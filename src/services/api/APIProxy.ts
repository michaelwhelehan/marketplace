import {
  ApolloClient,
  ApolloError,
  ObservableQuery,
  WatchQueryOptions,
} from '@apollo/client'
import { GraphQLError } from 'graphql'

import { PasswordChange } from '../mutations/gqlTypes/PasswordChange'
import { SetPassword } from '../mutations/gqlTypes/SetPassword'
import { getAuthToken, setAuthToken } from '../auth'
import { MUTATIONS } from '../mutations'
import { TokenAuth_tokenCreate } from '../mutations/gqlTypes/TokenAuth'
import { RequireAtLeastOne } from '../tsHelpers'
import {
  InferOptions,
  MapFn,
  QueryShape,
  WatchMapFn,
  WatchQueryData,
} from '../types'
import {
  getErrorsFromData,
  getMappedData,
  isDataEmpty,
  mergeEdges,
} from '../utils'
import { SignIn, SetPasswordChange, SetPasswordResult } from './types'
import { BROWSER_NO_CREDENTIAL_API_MESSAGE } from './Auth'

const handleDataErrors = <T extends QueryShape, TData>(
  mapFn: MapFn<T, TData> | WatchMapFn<T, TData>,
  data: TData,
  apolloErrors?: readonly GraphQLError[],
) => {
  // INFO: user input errors will be moved to graphql errors
  const userInputErrors = getErrorsFromData(data)
  const errors =
    apolloErrors || userInputErrors
      ? new ApolloError({
          extraInfo: userInputErrors,
          graphQLErrors: apolloErrors,
        })
      : null

  if (errors && isDataEmpty(data)) {
    return { errors }
  }

  const result = getMappedData(mapFn, data)

  return { data: result }
}

class APIProxy {
  setAccountUpdate = this.fireQuery(
    MUTATIONS.AccountUpdate,
    (data) => data!.accountUpdate,
  )

  client: ApolloClient<any>

  constructor(client: ApolloClient<any>) {
    this.client = client
  }

  signIn = async (
    variables: InferOptions<MUTATIONS['TokenAuth']>['variables'],
    options?: Omit<InferOptions<MUTATIONS['TokenAuth']>, 'variables'>,
  ): Promise<SignIn> => {
    await this.client.resetStore()
    let result: {
      data: TokenAuth_tokenCreate | null
    } | null = null

    result = await this.fireQuery(
      MUTATIONS.TokenAuth,
      (mutationData) => mutationData!.tokenCreate,
    )(variables, {
      ...options,
      fetchPolicy: 'no-cache',
    })
    const { data } = result

    if (data?.token && data.errors.length === 0) {
      setAuthToken(data.token)
      if (window.PasswordCredential && variables) {
        navigator.credentials
          .store(
            new window.PasswordCredential({
              id: variables.email,
              password: variables.password,
            }),
          )
          .catch((credentialsError) =>
            // eslint-disable-next-line no-console
            console.warn(BROWSER_NO_CREDENTIAL_API_MESSAGE, credentialsError),
          )
      }
    }
    return {
      data,
      error: null,
    }
  }

  setPassword = async (
    variables: InferOptions<MUTATIONS['SetPassword']>['variables'],
    options?: Omit<InferOptions<MUTATIONS['SetPassword']>, 'variables'>,
  ): Promise<SetPasswordResult> => {
    let result: {
      data: SetPassword | null
    } | null = null

    result = await this.fireQuery(MUTATIONS.SetPassword, (data) => data!)(
      variables,
      {
        ...options,
        fetchPolicy: 'no-cache',
      },
    )
    const { data } = result

    return {
      data,
      error: null,
    }
  }

  setPasswordChange = async (
    variables: InferOptions<MUTATIONS['PasswordChange']>['variables'],
    options?: Omit<InferOptions<MUTATIONS['PasswordChange']>, 'variables'>,
  ): Promise<SetPasswordChange> => {
    let result: {
      data: PasswordChange | null
    } | null = null

    result = await this.fireQuery(MUTATIONS.PasswordChange, (data) => data!)(
      variables,
      {
        ...options,
        fetchPolicy: 'no-cache',
      },
    )
    const { data } = result

    return {
      data,
      error: null,
    }
  }

  attachAuthListener = (callback: (authenticated: boolean) => void) => {
    const eventHandler = () => {
      callback(this.isLoggedIn())
    }

    window.addEventListener('auth', eventHandler)

    return () => {
      window.removeEventListener('auth', eventHandler)
    }
  }

  isLoggedIn = () => {
    return !!getAuthToken()
  }

  watchQuery<T extends QueryShape, TResult>(
    query: T,
    mapFn: WatchMapFn<T, TResult>,
  ) {
    return <
      TVariables extends InferOptions<T>['variables'],
      TOptions extends Omit<
        InferOptions<T> | WatchQueryOptions<InferOptions<T>>,
        'variables'
      >
    >(
      variables: TVariables,
      options: TOptions & {
        skip?: boolean
        onComplete?: () => void
        onError?: (error: ApolloError) => void
        onUpdate: (data: ReturnType<typeof mapFn> | null) => void
      },
    ) => {
      const { onComplete, onError, onUpdate, ...apolloClientOptions } = options

      const observable: ObservableQuery<WatchQueryData<T>, TVariables> = query(
        this.client,
        {
          ...apolloClientOptions,
          variables,
        },
      )

      if (options.skip) {
        return {
          refetch: () => {
            return new Promise((resolve) => {
              resolve({ data: null })
            })
          },
          unsubscribe: null,
        }
      }

      const subscription = observable.subscribe(
        (result) => {
          const { data, errors: apolloErrors } = result
          const errorHandledData = handleDataErrors(
            mapFn,
            data as any,
            apolloErrors,
          )
          if (onUpdate) {
            if (errorHandledData.errors) {
              if (onError) {
                onError(errorHandledData.errors)
              }
            } else {
              onUpdate(errorHandledData.data as TResult)
              if (onComplete) {
                onComplete()
              }
            }
          }
        },
        (error) => {
          if (onError) {
            onError(error)
          }
        },
      )

      return {
        loadMore: (
          extraVariables: RequireAtLeastOne<TVariables>,
          mergeResults: boolean = true,
        ) => {
          observable.fetchMore({
            updateQuery: (previousResult, { fetchMoreResult }) => {
              if (!fetchMoreResult) {
                // returning previousResult doesn't trigger observable `next`
                onUpdate(mapFn(previousResult))
                return previousResult
              }

              if (mergeResults) {
                const prevResultRef = mapFn(previousResult) as any
                const newResultRef = mapFn(fetchMoreResult) as any

                if (!prevResultRef || !newResultRef) {
                  onUpdate(prevResultRef)
                  return previousResult
                }

                const mergedEdges = mergeEdges(
                  prevResultRef.edges,
                  newResultRef.edges,
                )

                // use new result for metadata and mutate existing data
                Object.keys(prevResultRef).forEach((key) => {
                  prevResultRef[key] = newResultRef[key]
                })
                prevResultRef.edges = mergedEdges

                return previousResult
              }

              return fetchMoreResult
            },
            variables: { ...variables, ...extraVariables },
          })
        },
        // refetch: (newVariables?: TVariables) => {
        //   if (newVariables) {
        //     observable.setVariables(newVariables)
        //     const cachedResult = observable.currentResult()
        //     const errorHandledData = handleDataErrors(mapFn, cachedResult.data)
        //     if (errorHandledData.data) {
        //       onUpdate(errorHandledData.data as TResult)
        //     }
        //   }

        //   return APIProxy.firePromise(
        //     () => observable.refetch(newVariables),
        //     mapFn,
        //   )
        // },
        setOptions: (newOptions: TOptions) =>
          APIProxy.firePromise(() => observable.setOptions(newOptions), mapFn),
        unsubscribe: subscription.unsubscribe.bind(subscription),
      }
    }
  }

  fireQuery<T extends QueryShape, TResult>(query: T, mapFn: MapFn<T, TResult>) {
    return (
      variables: InferOptions<T>['variables'],
      options?: Omit<InferOptions<T>, 'variables'>,
    ) =>
      APIProxy.firePromise(
        () =>
          query(this.client, {
            ...options,
            variables,
          }),
        mapFn,
      )
  }

  // Promise wrapper to catch errors
  static firePromise<T extends QueryShape, TResult>(
    promise: () => Promise<any>,
    mapFn: MapFn<T, TResult> | WatchMapFn<T, TResult>,
  ) {
    return new Promise<{ data: ReturnType<typeof mapFn> | null }>(
      async (resolve, reject) => {
        try {
          const { data, errors: apolloErrors } = await promise()
          const errorHandledData = handleDataErrors(mapFn, data, apolloErrors)

          if (errorHandledData.errors) {
            reject(errorHandledData.errors)
          }

          resolve({ data: errorHandledData.data })
        } catch (error) {
          reject(error)
        }
      },
    )
  }
}

export default APIProxy

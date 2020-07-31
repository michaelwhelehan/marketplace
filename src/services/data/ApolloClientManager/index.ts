import { ApolloClient } from '@apollo/client'

import { User } from '../../fragments/gqlTypes/User'
import * as AuthMutations from '../../mutations/auth'
import {
  TokenAuth,
  TokenAuthVariables,
} from '../../mutations/gqlTypes/TokenAuth'
import { UserDetails } from '../../queries/gqlTypes/UserDetails'
import * as UserQueries from '../../queries/user'

export class ApolloClientManager {
  private client: ApolloClient<any>

  constructor(client: ApolloClient<any>) {
    this.client = client
  }

  subscribeToUserChange = (
    next: (value: User | null) => void,
    error?: (error: any) => void,
    complete?: () => void,
  ) => {
    this.client
      .watchQuery<UserDetails, any>({
        fetchPolicy: 'cache-only',
        query: UserQueries.getUserDetailsQuery,
      })
      .subscribe(value => next(value.data?.me), error, complete)
  }

  getUser = async () => {
    const { data, errors } = await this.client.query<UserDetails, any>({
      fetchPolicy: 'network-only',
      query: UserQueries.getUserDetailsQuery,
    })

    if (errors?.length) {
      return {
        error: errors,
      }
    }
    return {
      data: data?.me,
    }
  }

  signIn = async (email: string, password: string) => {
    const { data, errors } = await this.client.mutate<
      TokenAuth,
      TokenAuthVariables
    >({
      fetchPolicy: 'no-cache',
      mutation: AuthMutations.tokenAuthMutation,
      variables: {
        email,
        password,
      },
    })

    if (errors?.length) {
      return {
        error: errors,
      }
    }
    if (data?.tokenCreate?.errors.length) {
      return {
        error: data.tokenCreate.errors,
      }
    }
    return {
      data: {
        token: data?.tokenCreate?.token,
        user: data?.tokenCreate?.user,
      },
    }
  }

  signOut = async () => {
    await this.client.resetStore()
  }
}

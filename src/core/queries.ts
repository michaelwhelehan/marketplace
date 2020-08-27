import {
  useQuery as useApolloQuery,
  ErrorPolicy,
  FetchPolicy,
  DocumentNode,
  gql,
} from '@apollo/client'
import { RequireAtLeastOne } from '../services/tsHelpers'

import {
  PreSignedUploadParams,
  PreSignedUploadParamsVariables,
} from './gqlTypes/PreSignedUploadParams'

interface Config<TData, TVariables> {
  variables?: TVariables
  onCompleted?: (data: TData) => void
  fetchPolicy?: FetchPolicy
  nextFetchPolicy?: FetchPolicy
  errorPolicy?: ErrorPolicy
}

export function useQuery<TData, TVariables>(
  query: DocumentNode,
  config: Config<TData, TVariables> = {},
) {
  const {
    fetchPolicy = 'cache-and-network',
    nextFetchPolicy = 'cache-first',
    variables,
    onCompleted,
    errorPolicy,
  } = config
  const { error, loading, data, fetchMore } = useApolloQuery<TData, TVariables>(
    query,
    {
      fetchPolicy,
      nextFetchPolicy,
      variables,
      onCompleted,
      errorPolicy,
    },
  )
  const loadMore = (
    mergeFunc: (previousResults: TData, fetchMoreResult: TData) => TData,
    extraVariables: RequireAtLeastOne<TVariables>,
  ) =>
    fetchMore({
      query,
      updateQuery: (previousResults, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResults
        }
        return mergeFunc(previousResults, fetchMoreResult)
      },
      variables: { ...config.variables, ...extraVariables },
    })
  return { error, loading, data, loadMore }
}

const preSignedUploadParamsQuery = gql`
  query PreSignedUploadParams($directory: String!, $fileName: String!) {
    preSignedUploadParams(directory: $directory, fileName: $fileName) {
      fields
      uploadUrl
      fileUrl
    }
  }
`

export const usePreSignedUploadParamsQuery = () => {
  const { refetch } = useApolloQuery<
    PreSignedUploadParams,
    PreSignedUploadParamsVariables
  >(preSignedUploadParamsQuery, { skip: true })

  const imperativelyCallQuery = ({
    variables,
  }: {
    variables: PreSignedUploadParamsVariables
  }) => {
    return refetch(variables)
  }

  return imperativelyCallQuery
}

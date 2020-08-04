import {
  useQuery as useApolloQuery,
  ErrorPolicy,
  FetchPolicy,
  DocumentNode,
} from '@apollo/client'
import { RequireAtLeastOne } from '../services/tsHelpers'

interface Config<TData, TVariables> {
  variables?: TVariables
  onCompleted?: (data: TData) => void
  fetchPolicy?: FetchPolicy
  errorPolicy?: ErrorPolicy
}

export function useQuery<TData, TVariables>(
  query: DocumentNode,
  config?: Config<TData, TVariables>,
) {
  const { error, loading, data, fetchMore } = useApolloQuery<TData, TVariables>(
    query,
    config,
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

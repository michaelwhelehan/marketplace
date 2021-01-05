import { gql } from '@apollo/client'

import { useQuery } from '../../../core/queries'
import { UserTasks, UserTasksVariables } from './gqlTypes/UserTasks'

export const userTaskFragment = gql`
  fragment UserTask on Task {
    id
    owner {
      id
      avatarUrl
    }
    created
    title
    slug
    dueDate
    numOffers
  }
`

export const getTasksQuery = gql`
  ${userTaskFragment}
  query UserTasks(
    $after: String
    $pageSize: Int
    $filter: UserTaskFilterInput
  ) {
    me {
      id
      tasks(first: $pageSize, after: $after, filter: $filter) {
        edges {
          node {
            ...UserTask
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
  }
`

export const useGetUserTasksQuery = (variables: UserTasksVariables) => {
  return useQuery<UserTasks, UserTasksVariables>(getTasksQuery, { variables })
}

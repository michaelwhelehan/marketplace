import { gql } from '@apollo/client'

import { Tasks, TasksVariables } from './gqlTypes/Tasks'
import { useQuery } from '../../core/queries'

export const taskFragment = gql`
  fragment Task on Task {
    id
    owner {
      id
      username
      firstName
      lastName
      avatarUrl
    }
    title
    slug
    budget {
      currency
      amount
    }
    details
    dueDate
    locationType
    location
    locationLatitude
    locationLongitude
    conversationId
  }
`

export const getTasksQuery = gql`
  ${taskFragment}
  query Tasks($after: String, $pageSize: Int, $filter: TaskFilterInput) {
    tasks(first: $pageSize, after: $after, filter: $filter) {
      edges {
        node {
          ...Task
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
`

export const useGetTasksQuery = (variables: TasksVariables) => {
  return useQuery<Tasks, TasksVariables>(getTasksQuery, { variables })
}

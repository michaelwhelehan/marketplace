import { gql } from '@apollo/client'

import { Task, TaskVariables } from './gqlTypes/Task'
import { useQuery } from '../../core/queries'
import { taskFragment } from '../Marketplace/queries'

export const getTaskQuery = gql`
  ${taskFragment}
  query Task($slug: String!) {
    task(slug: $slug) {
      ...Task
    }
  }
`

export const useGetTaskQuery = (variables: TaskVariables) => {
  return useQuery<Task, TaskVariables>(getTaskQuery, { variables })
}

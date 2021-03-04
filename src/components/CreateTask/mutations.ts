import { gql, useMutation } from '@apollo/client'
import { publicUserBasicFragment } from '../../services/fragments/auth'
import { TaskCreate, TaskCreateVariables } from './gqlTypes/TaskCreate'
import { TaskUpdate, TaskUpdateVariables } from './gqlTypes/TaskUpdate'

export const taskCreateFragment = gql`
  ${publicUserBasicFragment}
  fragment TaskCreated on Task {
    id
    owner {
      ...PublicUserBasic
    }
    title
    slug
    details
    conversationId
  }
`

export const taskUpdateFragment = gql`
  fragment TaskUpdated on Task {
    id
    title
    slug
    details
    dueDate
    locationType
    location
    locationLatitude
    locationLongitude
  }
`

const taskCreateMutation = gql`
  ${taskCreateFragment}
  mutation TaskCreate($input: TaskInput!) {
    taskCreate(input: $input) {
      task {
        ...TaskCreated
      }
      taskErrors {
        message
        field
        code
      }
    }
  }
`

const taskUpdateMutation = gql`
  ${taskUpdateFragment}
  mutation TaskUpdate($id: ID!, $input: TaskInput!) {
    taskUpdate(id: $id, input: $input) {
      task {
        ...TaskUpdated
      }
      taskErrors {
        message
        field
        code
      }
    }
  }
`

export const useTaskCreateMutation = () => {
  const [createTask] = useMutation<TaskCreate, TaskCreateVariables>(
    taskCreateMutation,
  )
  return createTask
}

export const useTaskUpdateMutation = () => {
  const [updateTask] = useMutation<TaskUpdate, TaskUpdateVariables>(
    taskUpdateMutation,
  )
  return updateTask
}

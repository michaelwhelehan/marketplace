import { gql, useMutation } from '@apollo/client'

const conversationMessageUpdateMutation = gql`
  mutation ActivityUpdate($id: ID!, $input: ActivityInput!) {
    activityUpdate(id: $id, input: $input) {
      action {
        id
        read
      }
    }
  }
`

export const useActivityUpdateMutation = () => {
  const [updateActivity] = useMutation<any, any>(
    conversationMessageUpdateMutation,
  )
  return updateActivity
}

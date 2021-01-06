import { gql } from '@apollo/client'
import { useQuery } from '../../core/queries'
import { offerFragment, taskFragment } from '../../pages/Marketplace/queries'
import { publicUserBasicFragment } from '../../services/fragments/auth'
import { conversationMessageFragment } from '../Conversation/queries'
import { UserActivity, UserActivityVariables } from './gqlTypes/UserActivity'

export const activityFragment = gql`
  ${publicUserBasicFragment}
  ${offerFragment}
  ${taskFragment}
  ${conversationMessageFragment}
  fragment Activity on Activity {
    id
    verb
    timestamp
    read
    actorObject {
      ...PublicUserBasic
    }
    actionObject {
      __typename
      ...Offer
      ...Task
      ...ConversationMessage
    }
    targetObject {
      __typename
      ...Offer
      ...Task
    }
  }
`

export const getUserActivityQuery = gql`
  ${activityFragment}
  query UserActivity($after: String, $pageSize: Int) {
    me {
      id
      activity(first: $pageSize, after: $after) {
        edges {
          node {
            ...Activity
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

export const useGetUserActivityQuery = (variables: UserActivityVariables) => {
  return useQuery<UserActivity, UserActivityVariables>(getUserActivityQuery, {
    variables,
  })
}

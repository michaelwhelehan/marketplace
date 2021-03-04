import { gql } from '@apollo/client'
import { conversationMessageFragment } from '../../components/Conversation/queries'
import { useQuery } from '../../core/queries'
import { publicUserBasicFragment } from '../../services/fragments/auth'
import {
  UserConversations,
  UserConversationsVariables,
} from './gqlTypes/UserConversations'

export const userConversationFragment = gql`
  ${publicUserBasicFragment}
  ${conversationMessageFragment}
  fragment UserConversation on Conversation {
    id
    category
    members {
      ...PublicUserBasic
    }
    conversationFeed(first: 1) {
      edges {
        node {
          ...ConversationMessage
        }
      }
    }
  }
`

export const getUserConversationsQuery = gql`
  ${userConversationFragment}
  query UserConversations($after: String, $pageSize: Int) {
    me {
      id
      conversations(first: $pageSize, after: $after) {
        edges {
          node {
            ...UserConversation
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

export const useGetUserConversationsQuery = (
  variables: UserConversationsVariables,
) => {
  return useQuery<UserConversations, UserConversationsVariables>(
    getUserConversationsQuery,
    {
      variables,
    },
  )
}

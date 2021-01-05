import { gql } from '@apollo/client'

import { Conversation, ConversationVariables } from './gqlTypes/Conversation'
import {
  ConversationSubscription,
  ConversationSubscriptionVariables,
} from './gqlTypes/ConversationSubscription'
import { useQuery } from '../../core/queries'

export const conversationMessageFragment = gql`
  fragment ConversationMessage on ConversationMessage {
    id
    sentBy {
      id
      username
      firstName
      lastName
      avatarUrl
    }
    body
    url
    created
    modified
    messageType
  }
`

export const createConversationMessageFragment = gql`
  fragment CreateConversationMessage on CreateConversationMessagePayload {
    message {
      ...ConversationMessage
    }
  }
`

export const editConversationMessageFragment = gql`
  fragment EditConversationMessage on EditConversationMessagePayload {
    message {
      id
      modified
      body
    }
  }
`

export const deleteConversationMessageFragment = gql`
  fragment DeleteConversationMessage on DeleteConversationMessagePayload {
    message {
      id
    }
  }
`

export const getConversationQuery = gql`
  ${conversationMessageFragment}
  query Conversation($id: ID!, $after: String, $pageSize: Int) {
    conversation(id: $id) {
      id
      category
      task {
        ownerId
      }
      conversationFeed(first: $pageSize, after: $after) {
        totalCount
        edges {
          node {
            ...ConversationMessage
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

export const conversationMessageSubscription = gql`
  ${conversationMessageFragment}
  ${createConversationMessageFragment}
  ${editConversationMessageFragment}
  ${deleteConversationMessageFragment}
  subscription ConversationSubscription($conversationId: ID!) {
    conversationSubscription(conversationId: $conversationId) {
      conversationMessage {
        __typename
        ...CreateConversationMessage
        ...EditConversationMessage
        ...DeleteConversationMessage
      }
    }
  }
`

export const useGetConversationQuery = ({
  variables,
  subscriptionVariables,
}: {
  variables: ConversationVariables
  subscriptionVariables: ConversationSubscriptionVariables
}) => {
  return useQuery<
    Conversation,
    ConversationVariables,
    ConversationSubscription,
    ConversationSubscriptionVariables
  >(getConversationQuery, {
    variables,
    subscriptionVariables,
  })
}

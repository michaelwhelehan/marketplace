import { gql } from '@apollo/client'

import { Conversation, ConversationVariables } from './gqlTypes/Conversation'
import {
  ConversationSubscription,
  ConversationSubscriptionVariables,
} from './gqlTypes/ConversationSubscription'
import { useQuery } from '../../core/queries'
import { publicUserBasicFragment } from '../../services/fragments/auth'
import {
  ConversationMemberProfile,
  ConversationMemberProfileVariables,
} from './gqlTypes/ConversationMemberProfile'

export const conversationMessageFragment = gql`
  ${publicUserBasicFragment}
  fragment ConversationMessage on ConversationMessage {
    id
    sentBy {
      ...PublicUserBasic
    }
    rawBody
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
      rawBody
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
  query Conversation(
    $category: String!
    $id: ID
    $username: String
    $after: String
    $pageSize: Int
  ) {
    conversation(category: $category, id: $id, username: $username) {
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
  subscription ConversationSubscription(
    $category: String!
    $conversationId: ID
    $username: String
  ) {
    conversationSubscription(
      category: $category
      conversationId: $conversationId
      username: $username
    ) {
      conversationMessage {
        __typename
        ...CreateConversationMessage
        ...EditConversationMessage
        ...DeleteConversationMessage
      }
    }
  }
`

export const getConversationMemberProfileQuery = gql`
  ${publicUserBasicFragment}
  query ConversationMemberProfile($username: String!) {
    publicUser(username: $username) {
      ...PublicUserBasic
    }
  }
`

export const useConversationMemberProfileQuery = (username: string) => {
  return useQuery<
    ConversationMemberProfile,
    ConversationMemberProfileVariables
  >(getConversationMemberProfileQuery, {
    variables: { username },
  })
}

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

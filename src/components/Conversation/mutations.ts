import { gql, useMutation } from '@apollo/client'
import { ConversationPositionType } from '../../types/conversation'
import {
  Conversation_conversation_conversationFeed,
  Conversation_conversation_conversationFeed_edges,
} from './gqlTypes/Conversation'
import { ConversationMessage } from './gqlTypes/ConversationMessage'
import {
  ConversationMessageCreate,
  ConversationMessageCreateVariables,
} from './gqlTypes/ConversationMessageCreate'
import {
  ConversationMessageUpdate,
  ConversationMessageUpdateVariables,
} from './gqlTypes/ConversationMessageUpdate'
import { conversationMessageFragment } from './queries'

const conversationMessageCreateMutation = gql`
  ${conversationMessageFragment}
  mutation ConversationMessageCreate(
    $conversationId: ID!
    $messageType: String!
    $body: String!
  ) {
    conversationMessageCreate(
      input: {
        conversation: $conversationId
        messageType: $messageType
        body: $body
      }
    ) {
      conversationMessage {
        ...ConversationMessage
      }
    }
  }
`

const conversationMessageUpdateMutation = gql`
  ${conversationMessageFragment}
  mutation ConversationMessageUpdate($messageId: ID!, $body: String!) {
    conversationMessageUpdate(id: $messageId, input: { body: $body }) {
      conversationMessage {
        ...ConversationMessage
      }
    }
  }
`

export const useConversationMessageCreateMutation = ({
  conversationId,
  position,
}: {
  conversationId: string
  position: ConversationPositionType
}) => {
  const [createConversationMessage] = useMutation<
    ConversationMessageCreate,
    ConversationMessageCreateVariables
  >(conversationMessageCreateMutation, {
    update(cache, { data: { conversationMessageCreate } }) {
      cache.modify({
        id: cache.identify({ __typename: 'Conversation', id: conversationId }),
        fields: {
          conversationFeed(prevConversationFeed) {
            const newConversationMessageRef = cache.writeFragment<
              ConversationMessage
            >({
              data: conversationMessageCreate.conversationMessage,
              fragment: gql`
                ${conversationMessageFragment}
              `,
            })

            const edges: Conversation_conversation_conversationFeed_edges[] =
              position === 'topDown'
                ? [
                    {
                      __typename: 'ConversationMessageCountableEdge',
                      node: newConversationMessageRef,
                    },
                    ...prevConversationFeed.edges,
                  ]
                : [
                    ...prevConversationFeed.edges,
                    {
                      __typename: 'ConversationMessageCountableEdge',
                      node: newConversationMessageRef,
                    },
                  ]
            const data: Conversation_conversation_conversationFeed = {
              ...prevConversationFeed,
              totalCount: prevConversationFeed.totalCount + 1,
              edges,
            }
            return data
          },
        },
      })
    },
  })
  return createConversationMessage
}

export const useConversationMessageUpdateMutation = () => {
  const [updateConversationMessage] = useMutation<
    ConversationMessageUpdate,
    ConversationMessageUpdateVariables
  >(conversationMessageUpdateMutation)
  return updateConversationMessage
}

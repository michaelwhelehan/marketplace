import { gql, useMutation } from '@apollo/client'
import { ConversationPositionType } from '../../types/conversation'
import {
  Conversation,
  ConversationVariables,
  Conversation_conversation_conversationFeed_edges,
} from './gqlTypes/Conversation'
import {
  ConversationMessageCreate,
  ConversationMessageCreateVariables,
} from './gqlTypes/ConversationMessageCreate'
import { conversationMessageFragment, getConversationQuery } from './queries'

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
  >(conversationMessageCreateMutation)
  return createConversationMessage
}

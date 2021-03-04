import { gql, useMutation } from '@apollo/client'
import { ConversationPositionType } from '../../types/conversation'
import { addEdge } from '../../utils/graphql'
import { Conversation_conversation_conversationFeed } from './gqlTypes/Conversation'
import { ConversationMessage } from './gqlTypes/ConversationMessage'
import {
  ConversationMessageCreate,
  ConversationMessageCreateVariables,
} from './gqlTypes/ConversationMessageCreate'
import {
  ConversationMessageDelete,
  ConversationMessageDeleteVariables,
} from './gqlTypes/ConversationMessageDelete'
import {
  ConversationMessageUpdate,
  ConversationMessageUpdateVariables,
} from './gqlTypes/ConversationMessageUpdate'
import { conversationMessageFragment } from './queries'

const conversationMessageCreateMutation = gql`
  ${conversationMessageFragment}
  mutation ConversationMessageCreate($input: ConversationMessageCreateInput!) {
    conversationMessageCreate(input: $input) {
      conversationMessage {
        ...ConversationMessage
      }
    }
  }
`

const conversationMessageUpdateMutation = gql`
  ${conversationMessageFragment}
  mutation ConversationMessageUpdate(
    $id: ID!
    $input: ConversationMessageUpdateInput!
  ) {
    conversationMessageUpdate(id: $id, input: $input) {
      conversationMessage {
        ...ConversationMessage
      }
    }
  }
`

const conversationMessageDeleteMutation = gql`
  mutation ConversationMessageDelete($id: ID!) {
    conversationMessageDelete(id: $id) {
      conversationMessage {
        id
      }
    }
  }
`

export const useConversationMessageCreateMutation = ({
  conversationId,
  position,
}: {
  conversationId?: string
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
              fragment: conversationMessageFragment,
              fragmentName: 'ConversationMessage',
            })

            const data: Conversation_conversation_conversationFeed = {
              ...prevConversationFeed,
              totalCount: prevConversationFeed.totalCount + 1,
              edges: addEdge({
                position: position === 'topDown' ? 'start' : 'end',
                prevEdges: prevConversationFeed.edges,
                nextEdge: {
                  __typename: 'ConversationMessageCountableEdge',
                  node: newConversationMessageRef,
                },
              }),
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

export const useConversationMessageDeleteMutation = ({
  conversationId,
}: {
  conversationId: string
}) => {
  const [deleteConversationMessage] = useMutation<
    ConversationMessageDelete,
    ConversationMessageDeleteVariables
  >(conversationMessageDeleteMutation, {
    update(cache, { data: { conversationMessageDelete } }) {
      cache.modify({
        id: cache.identify({ __typename: 'Conversation', id: conversationId }),
        fields: {
          conversationFeed(prevConversationFeed, { readField }) {
            const data: Conversation_conversation_conversationFeed = {
              ...prevConversationFeed,
              totalCount: prevConversationFeed.totalCount - 1,
              edges: prevConversationFeed.edges.filter(
                (edgeRef: any) =>
                  conversationMessageDelete.conversationMessage.id !==
                  readField('id', readField('node', edgeRef)),
              ),
            }
            return data
          },
        },
      })
    },
  })
  return deleteConversationMessage
}

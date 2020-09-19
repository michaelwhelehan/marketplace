import React, { FC } from 'react'
import { useQuery, useMutation, gql } from '@apollo/client'
import Conversation from '../../uiComponents/organisms/Conversation/Conversation'
import ConversationMessageList from '../../uiComponents/organisms/Conversation/ConversationMessageList'
import {
  ConversationPositionType,
  ConversationScrollType,
  ConversationMessageType,
} from '../../types/conversation'
import ConversationMessage from '../../uiComponents/organisms/Conversation/ConversationMessage'

interface ConversationData {
  conversation: {
    id: string
    conversationFeed: {
      cursor: string
      messages: ConversationMessageType[]
    }
  }
}

interface ConversationVars {
  conversationId: string
  cursor: string
  loadAmount: number
}

const CREATE_CONVERSATION_MESSAGE = gql`
  mutation CreateConversationMessage($conversationId: ID!, $message: String!) {
    createConversationMessage(
      conversationId: $conversationId
      message: $message
    ) @client {
      ...Message
    }
  }
  ${ConversationMessage.fragments.message}
`

const GET_CONVERSATION_MESSAGES = gql`
  query ConversationMessages(
    $conversationId: ID!
    $cursor: String
    $loadAmount: Int
  ) {
    conversation(id: $conversationId) @client {
      id
      conversationFeed(cursor: $cursor, loadAmount: $loadAmount)
        @connection(key: "conversationMessageFeed") {
        ...MessageFeed
      }
    }
  }
  ${ConversationMessageList.fragments.messageFeed}
`

interface Props {
  position: ConversationPositionType
  scrollType: ConversationScrollType
}

const ConversationConnected: FC<Props> = ({ position, scrollType }) => {
  const { data, loading, fetchMore } = useQuery<
    ConversationData,
    ConversationVars
  >(GET_CONVERSATION_MESSAGES, {
    variables: {
      conversationId: '1',
      cursor: undefined,
      loadAmount: undefined,
    },
  })
  const [createConversationMessage] = useMutation(CREATE_CONVERSATION_MESSAGE, {
    update(cache, { data: { createConversationMessage } }) {
      const { conversation } = cache.readQuery({
        query: GET_CONVERSATION_MESSAGES,
        variables: { conversationId: '1', cursor: undefined },
      })
      const previousConversationMessages = conversation.conversationFeed
      const messages =
        position === 'topDown'
          ? [
              createConversationMessage,
              ...previousConversationMessages.messages,
            ]
          : [
              ...previousConversationMessages.messages,
              createConversationMessage,
            ]
      const data = {
        conversation: {
          ...conversation,
          conversationFeed: {
            ...previousConversationMessages,
            messages,
          },
        },
      }
      cache.writeQuery({
        query: GET_CONVERSATION_MESSAGES,
        variables: { conversationId: '1', cursor: undefined },
        data,
      })
    },
  })

  return (
    <Conversation
      position={position}
      scrollType={scrollType}
      messagesLoading={loading}
      messageList={data?.conversation?.conversationFeed?.messages}
      messagesLoadAmount={10}
      memberName="Michael W"
      onMessageCreated={(message) => {
        createConversationMessage({
          variables: { conversationId: '1', message },
        })
      }}
      onLoadMoreMessages={async (loadAmount) => {
        await sleep(Math.floor(Math.random() * 1000) + 500)
        await fetchMore({
          query: GET_CONVERSATION_MESSAGES,
          variables: {
            conversationId: '1',
            cursor: data.conversation.conversationFeed.cursor,
            loadAmount,
          },
          updateQuery: (
            previousResult: {
              conversation: {
                conversationFeed: { messages: any; cursor: string }
              }
            },
            { fetchMoreResult },
          ) => {
            const previousConversationFeed =
              previousResult.conversation.conversationFeed
            const newConversationFeed =
              fetchMoreResult.conversation.conversationFeed

            const newConversationData = {
              ...previousResult.conversation,
              conversationFeed: {
                messages: [
                  ...newConversationFeed.messages,
                  ...previousConversationFeed.messages,
                ],
                cursor: newConversationFeed.cursor,
                __typename: 'ConversationFeed',
              },
            }
            const newData = {
              ...previousResult,
              conversation: newConversationData,
            }
            return newData
          },
        })
      }}
    />
  )
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default ConversationConnected

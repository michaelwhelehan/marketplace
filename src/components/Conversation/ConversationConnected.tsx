import React, { FC } from 'react'
import { useQuery, useMutation, gql } from '@apollo/client'
import Conversation from '../../uiComponents/organisms/Conversation'
import ConversationMessageList from '../../uiComponents/molecules/Conversation/ConversationMessageList'

const CREATE_CONVERSATION_MESSAGE = gql`
  mutation CreateConversationMessage($conversationId: ID!, $message: String!) {
    createConversationMessage(
      conversationId: $conversationId
      message: $message
    ) @client
  }
`

const GET_CONVERSATION_MESSAGES = gql`
  query ConversationMessages($conversationId: ID!, $cursor: String) {
    conversation(id: $conversationId) @client {
      id
      conversationFeed(cursor: $cursor)
        @connection(key: "conversationMessageFeed") {
        ...MessageFeed
      }
    }
  }
  ${ConversationMessageList.fragments.messageFeed}
`

const ConversationConnected: FC = () => {
  const { data, loading, fetchMore } = useQuery(GET_CONVERSATION_MESSAGES, {
    variables: { conversationId: '1', cursor: undefined },
  })
  console.log(data)
  const [createConversationMessage] = useMutation(CREATE_CONVERSATION_MESSAGE)
  return (
    <Conversation
      messagesLoading={loading}
      messageList={data?.conversation?.conversationFeed?.messages}
      messagesLoadAmount={10}
      memberName="Michael W"
      onMessageCreated={message => {
        createConversationMessage({
          variables: { conversationId: '1', message },
        })
      }}
      onLoadMoreMessages={async loadAmount => {
        console.log('LOADING MORE')
        await sleep(Math.floor(Math.random() * 1000) + 500)
        await fetchMore({
          query: GET_CONVERSATION_MESSAGES,
          variables: {
            conversationId: '1',
            cursor: data.conversation.conversationFeed.cursor,
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
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default ConversationConnected

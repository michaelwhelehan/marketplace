import React, { FC } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Conversation from '../../uiComponents/organisms/Conversation'
import ConversationMessageList from '../../uiComponents/molecules/Conversation/ConversationMessageList'

const CREATE_CONVERSATION_MESSAGE = gql`
  mutation CreateConversationMessage($channelId: ID!, $message: String!) {
    createConversationMessage(channelId: $channelId, message: $message) @client
  }
`

const GET_CONVERSATION_MESSAGES = gql`
  query ConversationMessages($channelId: ID!, $cursor: String) {
    channel(id: $channelId) @client {
      id
      conversationMessages(cursor: $cursor)
        @connection(key: "conversationMessageFeed") {
        ...MessageList
      }
    }
  }
  ${ConversationMessageList.fragments.messageList}
`

const ConversationConnected: FC = () => {
  const { data, loading, fetchMore } = useQuery(GET_CONVERSATION_MESSAGES, {
    variables: { channelId: '1', cursor: undefined },
  })
  const [createConversationMessage] = useMutation(CREATE_CONVERSATION_MESSAGE)
  return (
    <Conversation
      messagesLoading={loading}
      messageList={data?.channel?.conversationMessages?.messages}
      messagesLoadAmount={5}
      memberName="Michael W"
      onMessageCreated={message => {
        createConversationMessage({
          variables: { channelId: '1', message },
        })
      }}
      onLoadMoreMessages={async loadAmount => {
        console.log('LOADING MORE')
        await fetchMore({
          query: GET_CONVERSATION_MESSAGES,
          variables: {
            channelId: '1',
            cursor: data.channel.conversationMessages.cursor,
          },
          updateQuery: (
            previousResult: {
              channel: {
                conversationMessages: { messages: any; cursor: string }
              }
            },
            { fetchMoreResult },
          ) => {
            const previousConversationMessages =
              previousResult.channel.conversationMessages
            const newConversationMessages =
              fetchMoreResult.channel.conversationMessages

            const newChannelData = {
              ...previousResult.channel,
              conversationMessages: {
                messages: [
                  ...newConversationMessages.messages,
                  ...previousConversationMessages.messages,
                ],
                cursor: newConversationMessages.cursor,
                __typename: 'ConversationMessages',
              },
            }
            const newData = {
              ...previousResult,
              channel: newChannelData,
            }
            return newData
          },
        })
      }}
    />
  )
}

export default ConversationConnected

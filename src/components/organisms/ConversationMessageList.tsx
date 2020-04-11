import React, { FC } from 'react'
import styled from 'styled-components'
import InfiniteList from '../molecules/InfiniteList'
import ConversationMessage from '../molecules/ConversationMessage'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const StyledConversationMessageList = styled.div`
  height: 100%;
`

const GET_CONVERSATION_MESSAGES = gql`
  query ConversationMessages($channelId: ID!, $cursor: String) {
    channel(id: $channelId) @client {
      id
      conversationMessages(cursor: $cursor)
        @connection(key: "conversationMessageFeed") {
        cursor
        messages {
          id
          member {
            name
            profilePictureUrl
            onlineStatus
          }
          message {
            text
            timestamp
          }
        }
      }
    }
  }
`

const ConversationMessageList: FC = () => {
  const { data, loading, fetchMore } = useQuery(GET_CONVERSATION_MESSAGES, {
    variables: { channelId: '1', cursor: undefined },
  })

  if (!data) {
    return null
  }

  console.log(data)

  return (
    <StyledConversationMessageList>
      <InfiniteList
        loading={loading}
        list={data.channel.conversationMessages.messages}
        loadAmount={5}
        renderListItem={listItem => <ConversationMessage {...listItem} />}
        onLoadMore={async lastListItem => {
          console.log('LOADING MORE')
          await fetchMore({
            query: GET_CONVERSATION_MESSAGES,
            variables: {
              channelId: '1',
              cursor: lastListItem.id || data.moreConversationMessages.cursor,
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
              console.log(newData)
              return newData
            },
          })
        }}
        rowHeight={80}
        heightCalculation="dynamic"
        direction="reverse"
      />
    </StyledConversationMessageList>
  )
}

export default ConversationMessageList

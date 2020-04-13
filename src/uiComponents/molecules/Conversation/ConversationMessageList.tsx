import React, { FC } from 'react'
import styled from 'styled-components'
import InfiniteList from '../InfiniteList'
import ConversationMessage from './ConversationMessage'
import gql from 'graphql-tag'
import { DocumentNode } from 'graphql'

const StyledConversationMessageList = styled.div`
  height: 100%;
`

export interface ConversationMessageListProps {
  messagesLoading: boolean
  messageList: any[]
  messagesLoadAmount: number
  onLoadMoreMessages: (loadAmount: number) => Promise<any>
}

type Fragments = {
  fragments: { messageFeed: DocumentNode }
}

const ConversationMessageList: FC<ConversationMessageListProps> & Fragments = ({
  messagesLoading,
  messageList,
  messagesLoadAmount,
  onLoadMoreMessages,
}) => {
  if (!messageList || !messageList.length) {
    return null
  }

  return (
    <StyledConversationMessageList>
      <InfiniteList
        loading={messagesLoading}
        list={messageList}
        loadAmount={messagesLoadAmount}
        renderListItem={listItem => <ConversationMessage {...listItem} />}
        onLoadMore={onLoadMoreMessages}
        rowHeight={1000}
        heightCalculation="dynamic"
        direction="reverse"
      />
    </StyledConversationMessageList>
  )
}

ConversationMessageList.fragments = {
  messageFeed: gql`
    fragment MessageFeed on ConversationFeed {
      cursor
      messages {
        ...Message
      }
    }
    ${ConversationMessage.fragments.message}
  `,
}

export default ConversationMessageList

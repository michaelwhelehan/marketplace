import React, { FC } from 'react'
import styled from 'styled-components'
import InfiniteList from '../InfiniteList'
import ConversationMessage from './ConversationMessage'
import { gql } from '@apollo/client'
import { DocumentNode } from 'graphql'
import { ConversationPositionType } from '../../../types/conversation'

const StyledConversationMessageList = styled.div`
  height: 100%;
`

export interface ConversationMessageListProps {
  messagesLoading: boolean
  messageList: any[]
  messagesLoadAmount: number
  onLoadMoreMessages: (loadAmount: number) => Promise<any>
  position: ConversationPositionType
}

type Fragments = {
  fragments: { messageFeed: DocumentNode }
}

const ConversationMessageList: FC<ConversationMessageListProps> & Fragments = ({
  messagesLoading,
  messageList,
  messagesLoadAmount,
  onLoadMoreMessages,
  position,
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
        rowHeight={100}
        heightCalculation="dynamic"
        direction={position === 'topDown' ? 'forward' : 'reverse'}
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

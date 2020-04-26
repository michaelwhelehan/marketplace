import React, { FC } from 'react'
import styled from 'styled-components'
import InfiniteList from '../../molecules/InfiniteList'
import ConversationMessage from './ConversationMessage'
import { gql } from '@apollo/client'
import { DocumentNode } from 'graphql'
import {
  ConversationPositionType,
  ConversationScrollType,
  ConversationMessageType,
} from '../../../types/conversation'
import WindowedList from '../../molecules/WindowedList'
import { useScrollElement } from '../../../contexts/ScrollElementContext'

const StyledConversationMessageList = styled.div`
  height: 100%;
`

export interface ConversationMessageListProps {
  messagesLoading: boolean
  messageList: ConversationMessageType[]
  messagesLoadAmount: number
  onLoadMoreMessages: (loadAmount: number) => Promise<any>
  position: ConversationPositionType
  scrollType: ConversationScrollType
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
  scrollType,
}) => {
  const scrollElementRef = useScrollElement()

  if (!messageList || !messageList.length) {
    return null
  }

  if (scrollType === 'windowed') {
    return (
      <WindowedList
        loading={messagesLoading}
        list={messageList}
        loadAmount={messagesLoadAmount}
        renderListItem={listItem => <ConversationMessage {...listItem} />}
        onLoadMore={onLoadMoreMessages}
        rowHeight={100}
        heightCalculation="dynamic"
        scrollElement={scrollElementRef.current ?? window}
      />
    )
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

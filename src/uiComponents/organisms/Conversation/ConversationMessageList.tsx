import React, { FC } from 'react'
import styled from 'styled-components'
import InfiniteList from '../../molecules/InfiniteList'
import ConversationMessage from './ConversationMessage'
import {
  ConversationPositionType,
  ConversationScrollType,
} from '../../../types/conversation'
import WindowedList from '../../molecules/WindowedList'
import { useScrollElement } from '../../../contexts/ScrollElementContext'
import { Conversation_conversation_conversationFeed_edges } from '../../../components/Conversation/gqlTypes/Conversation'

const StyledConversationMessageList = styled.div`
  height: 100%;
`

export interface ConversationMessageListProps {
  messagesLoading: boolean
  messageList: Conversation_conversation_conversationFeed_edges[]
  messagesLoadAmount: number
  onLoadMoreMessages: (loadAmount: number) => Promise<any>
  position: ConversationPositionType
  scrollType: ConversationScrollType
}

const ConversationMessageList: FC<ConversationMessageListProps> = ({
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
        renderListItem={listItem => <ConversationMessage message={listItem.node} />}
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
        renderListItem={(listItem: Conversation_conversation_conversationFeed_edges) => <ConversationMessage message={listItem.node} />}
        onLoadMore={onLoadMoreMessages}
        rowHeight={100}
        heightCalculation="dynamic"
        direction={position === 'topDown' ? 'forward' : 'reverse'}
      />
    </StyledConversationMessageList>
  )
}

export default ConversationMessageList

import React, { FC, useRef } from 'react'
import styled from 'styled-components'
import InfiniteList from '../../molecules/InfiniteList'
import ConversationMessage from './ConversationMessage'
import {
  ConversationPositionType,
  ConversationScrollType,
} from '../../../types/conversation'
import WindowedList from '../../molecules/WindowedList'
import { useScrollElement } from '../../../contexts/ScrollElementContext'
import { Conversation_conversation } from '../../../components/Conversation/gqlTypes/Conversation'
import { CellMeasurerCache, List } from 'react-virtualized'

const StyledConversationMessageList = styled.div`
  height: 100%;
`

export interface ConversationMessageListProps {
  messagesLoading: boolean
  currentUserId: string
  conversation: Conversation_conversation
  messagesLoadAmount: number
  onLoadMoreMessages: (loadAmount: number) => Promise<any>
  onConversationMessageEdit: ({
    messageId,
    body,
  }: {
    messageId: string
    body: string
  }) => void
  position: ConversationPositionType
  scrollType: ConversationScrollType
}

const ConversationMessageList: FC<ConversationMessageListProps> = ({
  messagesLoading,
  currentUserId,
  conversation,
  messagesLoadAmount,
  onLoadMoreMessages,
  onConversationMessageEdit,
  position,
  scrollType,
}) => {
  const scrollElementRef = useScrollElement()
  const listRef = useRef<List>()
  const cacheRef = useRef<CellMeasurerCache>()
  const messageList = conversation?.conversationFeed?.edges

  if (!messageList || !messageList.length) {
    return null
  }

  if (scrollType === 'windowed') {
    return (
      <WindowedList
        listRef={listRef}
        cacheRef={cacheRef}
        loading={messagesLoading}
        list={messageList}
        loadAmount={messagesLoadAmount}
        renderListItem={(listItem) => (
          <ConversationMessage
            listRef={listRef}
            cacheRef={cacheRef}
            index={listItem.index}
            currentUserId={currentUserId}
            conversation={conversation}
            onConversationMessageEdit={onConversationMessageEdit}
            message={listItem.node}
          />
        )}
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
        renderListItem={(listItem) => (
          <ConversationMessage
            listRef={listRef}
            cacheRef={cacheRef}
            index={listItem.index}
            currentUserId={currentUserId}
            conversation={conversation}
            onConversationMessageEdit={onConversationMessageEdit}
            message={listItem.node}
          />
        )}
        onLoadMore={onLoadMoreMessages}
        rowHeight={100}
        heightCalculation="dynamic"
        direction={position === 'topDown' ? 'forward' : 'reverse'}
      />
    </StyledConversationMessageList>
  )
}

export default ConversationMessageList

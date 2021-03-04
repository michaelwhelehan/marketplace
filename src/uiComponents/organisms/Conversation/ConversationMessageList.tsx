import React, { FC, useEffect, useRef } from 'react'
import styled from 'styled-components'
import InfiniteList from '../../molecules/InfiniteList'
import ConversationMessage, {
  ConversationMessageDeleteType,
  ConversationMessageEditType,
} from './ConversationMessage'
import {
  ConversationPositionType,
  ConversationScrollType,
} from '../../../types/conversation'
import WindowedList from '../../molecules/WindowedList'
import { useScrollElement } from '../../../contexts/ScrollElementContext'
import { Conversation_conversation } from '../../../components/Conversation/gqlTypes/Conversation'
import { CellMeasurerCache, List } from 'react-virtualized'
import { differenceSeconds } from '../../../utils/date'

const StyledConversationMessageList = styled.div`
  height: 100%;
`

export interface ConversationMessageListProps {
  messagesLoading: boolean
  currentUserId: string
  conversation: Conversation_conversation
  messagesLoadAmount: number
  onLoadMoreMessages: (loadAmount: number) => Promise<any>
  onConversationMessageEdit: ConversationMessageEditType
  onConversationMessageDelete: ConversationMessageDeleteType
  position: ConversationPositionType
  scrollType: ConversationScrollType
  onReplyClick: () => void
}

const ConversationMessageList: FC<ConversationMessageListProps> = ({
  messagesLoading,
  currentUserId,
  conversation,
  messagesLoadAmount,
  onLoadMoreMessages,
  onConversationMessageEdit,
  onConversationMessageDelete,
  position,
  scrollType,
  onReplyClick,
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
            onConversationMessageDelete={onConversationMessageDelete}
            message={listItem.node}
            onReplyClick={onReplyClick}
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
        list={messageList
          .slice()
          .sort((a, b) =>
            position === 'bottomUp'
              ? differenceSeconds(a.node.created, b.node.created)
              : -differenceSeconds(a.node.created, b.node.created),
          )}
        loadAmount={messagesLoadAmount}
        renderListItem={(listItem) => (
          <ConversationMessage
            listRef={listRef}
            cacheRef={cacheRef}
            index={listItem.index}
            currentUserId={currentUserId}
            conversation={conversation}
            onConversationMessageEdit={onConversationMessageEdit}
            onConversationMessageDelete={onConversationMessageDelete}
            message={listItem.node}
            onReplyClick={onReplyClick}
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

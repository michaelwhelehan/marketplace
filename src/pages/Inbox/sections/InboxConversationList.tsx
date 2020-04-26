import React, { FC } from 'react'
import styled from 'styled-components'
import InboxConversationCard from './InboxConversationCard'
import InfiniteList from '../../../uiComponents/molecules/InfiniteList'
import {
  MAIN_HEADER_HEIGHT,
  INBOX_HEADER_HEIGHT,
} from '../../../constants/sizes'
import { ConversationType } from '../../../types/conversation'

const ConversationList = styled.section`
  height: calc(100vh - ${MAIN_HEADER_HEIGHT}px - ${INBOX_HEADER_HEIGHT}px);
`

interface Props {
  conversationList: ConversationType[]
  conversationListLoading: boolean
  onLoadMoreConversations: (loadAmount: number) => Promise<any>
}

const InboxConversationList: FC<Props> = ({
  conversationList,
  conversationListLoading,
  onLoadMoreConversations,
}) => {
  return (
    <ConversationList>
      <InfiniteList
        list={conversationList}
        loading={conversationListLoading}
        loadAmount={10}
        renderListItem={listItem => <InboxConversationCard {...listItem} />}
        onLoadMore={onLoadMoreConversations}
        rowHeight={80}
      />
    </ConversationList>
  )
}

export default InboxConversationList

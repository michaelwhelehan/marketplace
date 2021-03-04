import React, { FC } from 'react'
import styled from 'styled-components'
import InboxConversationCard from './InboxConversationCard'
import InfiniteList from '../../../uiComponents/molecules/InfiniteList'
import {
  MAIN_HEADER_HEIGHT,
  INBOX_HEADER_HEIGHT,
} from '../../../constants/sizes'
import { UserConversations_me_conversations_edges } from '../gqlTypes/UserConversations'
import { User } from '../../../services/fragments/gqlTypes/User'

const ConversationList = styled.section`
  height: calc(100vh - ${MAIN_HEADER_HEIGHT}px - ${INBOX_HEADER_HEIGHT}px);
`

interface Props {
  user: User
  conversationLoadAmount: number
  conversationList: any[]
  conversationListLoading: boolean
  onLoadMoreConversations: (loadAmount: number) => Promise<any>
}

const InboxConversationList: FC<Props> = ({
  user,
  conversationLoadAmount,
  conversationList,
  conversationListLoading,
  onLoadMoreConversations,
}) => {
  return (
    <ConversationList>
      <InfiniteList
        list={conversationList}
        loading={conversationListLoading}
        loadAmount={conversationLoadAmount}
        renderListItem={(
          listItem: UserConversations_me_conversations_edges,
        ) => <InboxConversationCard user={user} conversation={listItem.node} />}
        onLoadMore={onLoadMoreConversations}
        rowHeight={80}
      />
    </ConversationList>
  )
}

export default InboxConversationList

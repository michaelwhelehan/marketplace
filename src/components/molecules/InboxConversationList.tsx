import React, { FC } from 'react'
import styled from 'styled-components'
import InboxConversationListCard from './InboxConversationListCard'
import InfiniteList from '../atoms/InfiniteList'
import { MAIN_HEADER_HEIGHT, INBOX_HEADER_HEIGHT } from '../../constants/sizes'

const ConversationList = styled.section`
  height: calc(100vh - ${MAIN_HEADER_HEIGHT}px - ${INBOX_HEADER_HEIGHT}px);
`

const list = [{ name: 'Mike Wells' }]

const ROW_HEIGHT = 100

const InboxConversationList: FC = () => {
  return (
    <ConversationList>
      <InfiniteList
        list={list}
        component={InboxConversationListCard}
        rowHeight={ROW_HEIGHT}
      />
    </ConversationList>
  )
}

export default InboxConversationList

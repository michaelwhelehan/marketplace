import React, { FC } from 'react'
import styled from 'styled-components'
import InboxConversationListCard from '../molecules/InboxConversationListCard'
import InfiniteList from '../molecules/InfiniteList'
import { MAIN_HEADER_HEIGHT, INBOX_HEADER_HEIGHT } from '../../constants/sizes'
import profilePictureUrl from '../../assets/images/profile.png'

const ConversationList = styled.section`
  height: calc(100vh - ${MAIN_HEADER_HEIGHT}px - ${INBOX_HEADER_HEIGHT}px);
`

const list = [
  {
    member: { name: 'Mike Wells', profilePictureUrl, onlineStatus: 'online' },
    message: {
      lastMessageFromMe: true,
      lastMessage: 'Ok blah blah blah blah',
      lastMessageTimestamp: new Date(),
    },
  },
  {
    member: { name: 'Mike Wells', profilePictureUrl, onlineStatus: 'online' },
    message: {
      lastMessageFromMe: true,
      lastMessage: 'Ok blah blah blah blah',
      lastMessageTimestamp: new Date(),
    },
  },
  {
    member: { name: 'Mike Wells', profilePictureUrl, onlineStatus: 'online' },
    message: {
      lastMessageFromMe: true,
      lastMessage: 'Ok blah blah blah blah',
      lastMessageTimestamp: new Date(),
    },
  },
  {
    member: { name: 'Mike Wells', profilePictureUrl, onlineStatus: 'online' },
    message: {
      lastMessageFromMe: true,
      lastMessage: 'Ok blah blah blah blah',
      lastMessageTimestamp: new Date(),
    },
  },
  {
    member: { name: 'Mike Wells', profilePictureUrl, onlineStatus: 'online' },
    message: {
      lastMessageFromMe: true,
      lastMessage: 'Ok blah blah blah blah',
      lastMessageTimestamp: new Date(),
    },
  },
]

const InboxConversationList: FC = () => {
  return (
    <ConversationList>
      <InfiniteList
        list={list}
        component={InboxConversationListCard}
        rowHeight={80}
      />
    </ConversationList>
  )
}

export default InboxConversationList

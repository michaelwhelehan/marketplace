import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Avatar from '../atoms/Avatar'
import { OnlineStatusType } from '../../types/user'
import { ParagraphS, ParagraphXXS } from '../atoms/Paragraphs'
import { black, borderColor, white } from '../../styles/colors'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
`

const StyledCard = styled.div<{ height: number }>`
  border-bottom: 1px solid ${borderColor};
  padding: 10px;
  height: ${props => props.height}px;
  background: ${white};
  display: flex;
  align-items: center;
`

const UserName = styled(ParagraphS)`
  color: ${black};
  font-weight: bold;
  margin-bottom: 5px;
`

const Message = styled(ParagraphS)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const LeftContainer = styled.div`
  flex: none;
`

const MiddleContainer = styled.div`
  flex: 1;
  padding-left: 10px;
  overflow: hidden;
`

const RightContainer = styled.div`
  flex: none;
  margin-bottom: 30px;
`

type MemberType = {
  name: string
  profilePictureUrl: string
  onlineStatus: OnlineStatusType
}

type MessageType = {
  lastMessage: string
  lastMessageFromMe: boolean
  lastMessageTimestamp: Date
}

interface Props {
  height: number
  member: MemberType
  message: MessageType
}

const InboxConversationListCard: FC<Props> = ({ height, member, message }) => {
  return (
    <StyledLink to="/lol">
      <StyledCard height={height}>
        <LeftContainer>
          <Avatar
            src={member.profilePictureUrl}
            size={50}
            onlineStatus={member.onlineStatus}
          />
        </LeftContainer>
        <MiddleContainer>
          <UserName>{member.name}</UserName>
          <Message>
            {message.lastMessageFromMe && 'Me: '}
            {message.lastMessage}
          </Message>
        </MiddleContainer>
        <RightContainer>
          <ParagraphXXS>
            {dayjs().from(message.lastMessageTimestamp)}
          </ParagraphXXS>
        </RightContainer>
      </StyledCard>
    </StyledLink>
  )
}

export default InboxConversationListCard

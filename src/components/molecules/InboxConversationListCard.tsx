import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Avatar from '../atoms/Avatar'
import { OnlineStatusType, MemberType } from '../../types/user'
import { ParagraphS, ParagraphXXS } from '../atoms/Paragraphs'
import { black, borderColor, white } from '../../styles/colors'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  height: 100%;
`

const StyledCard = styled.div`
  border-bottom: 1px solid ${borderColor};
  padding: 10px;
  height: 100%;
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

const PictureContainer = styled.div`
  flex: none;
`

const BodyContainer = styled.div`
  flex: 1;
  padding-left: 10px;
  overflow: hidden;
`

const TimestampContainer = styled.div`
  flex: none;
  margin-bottom: 30px;
`

type MessageType = {
  lastMessage: string
  lastMessageFromMe: boolean
  lastMessageTimestamp: Date
}

interface Props {
  member: MemberType
  message: MessageType
}

const InboxConversationListCard: FC<Props> = ({ member, message }) => {
  return (
    <StyledLink to="/dashboard/inbox/lol">
      <StyledCard>
        <PictureContainer>
          <Avatar
            src={member.profilePictureUrl}
            size={50}
            onlineStatus={member.onlineStatus}
          />
        </PictureContainer>
        <BodyContainer>
          <UserName>{member.name}</UserName>
          <Message>
            {message.lastMessageFromMe && 'Me: '}
            {message.lastMessage}
          </Message>
        </BodyContainer>
        <TimestampContainer>
          <ParagraphXXS>
            {dayjs().from(message.lastMessageTimestamp)}
          </ParagraphXXS>
        </TimestampContainer>
      </StyledCard>
    </StyledLink>
  )
}

export default InboxConversationListCard

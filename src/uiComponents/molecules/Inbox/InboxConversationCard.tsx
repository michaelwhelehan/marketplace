import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Avatar from '../../atoms/Avatar'
import { OnlineStatusType, UserType } from '../../../types/user'
import { ParagraphS, ParagraphXXS } from '../../atoms/Paragraphs'
import { black, borderColor, white } from '../../../styles/colors'
import { fromNow } from '../../../utils/date'
import UserName from '../../atoms/UserName'

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

const Message = styled(ParagraphS)`
  margin-top: 5px;
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
  padding-bottom: 30px;
`

type MessageType = {
  lastMessage: string
  lastMessageFromMe: boolean
  lastMessageTimestamp: Date
}

interface Props {
  member: UserType
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
          <ParagraphXXS>{fromNow(message.lastMessageTimestamp)}</ParagraphXXS>
        </TimestampContainer>
      </StyledCard>
    </StyledLink>
  )
}

export default InboxConversationListCard

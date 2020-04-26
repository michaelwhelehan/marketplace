import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Avatar from '../../../uiComponents/atoms/Avatar'
import { UserType } from '../../../types/user'
import {
  ParagraphS,
  ParagraphXXS,
} from '../../../uiComponents/atoms/Paragraphs'
import { borderColor, white } from '../../../styles/colors'
import { fromNow } from '../../../utils/date'
import UserName from '../../../uiComponents/atoms/UserName'
import { LastMessageType } from '../../../types/conversation'

const StyledCard = styled.div`
  border-bottom: 1px solid ${borderColor};
  padding: 10px;
  height: 100%;
  background: ${white};
  display: flex;
  align-items: center;
  text-decoration: none;
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

interface Props {
  member: UserType
  lastMessage: LastMessageType
}

const InboxConversationListCard: FC<Props> = ({ member, lastMessage }) => {
  return (
    <StyledCard to="/dashboard/inbox/1" as={Link}>
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
          {lastMessage.lastMessageFromMe && 'Me: '}
          {lastMessage.lastMessageText}
        </Message>
      </BodyContainer>
      <TimestampContainer>
        <ParagraphXXS>{fromNow(lastMessage.lastMessageTimestamp)}</ParagraphXXS>
      </TimestampContainer>
    </StyledCard>
  )
}

export default InboxConversationListCard

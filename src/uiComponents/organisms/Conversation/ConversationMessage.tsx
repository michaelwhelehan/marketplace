import React, { FC } from 'react'
import styled from 'styled-components'
import { primaryFontColor } from '../../../styles/colors'
import Avatar from '../../atoms/Avatar'
import { differenceSeconds, fromNow } from '../../../utils/date'
import { fsXXS } from '../../../styles/typography'
import UserName from '../../atoms/UserName'
import { ConversationMessage as ConversationMessageType } from '../../../components/Conversation/gqlTypes/ConversationMessage'

const MessageContainerOuter = styled.div`
  height: 100%;
  padding-top: 15px;
  padding-right: 20px;
  padding-bottom: 15px;
`

const MessageContainer = styled.div`
  height: 100%;
  display: flex;
`

const MessageMemberAvatar = styled.div`
  width: 60px;
  padding-right: 10px;
`

const MessageContent = styled.div`
  flex: 1;
`

const MessageMember = styled.div`
  display: flex;
  padding-bottom: 5px;
`

const MessageTimestamp = styled.span`
  padding-left: 10px;
  padding-top: 2px;
  font-size: ${fsXXS}px;
  color: ${primaryFontColor};
`

const MessageText = styled.p`
  line-height: 22px;
`

interface Props {
  message: ConversationMessageType
}

const ConversationMessage: FC<Props> = ({ message }) => {
  return (
    <MessageContainerOuter>
      <MessageContainer>
        <MessageMemberAvatar>
          <Avatar
            src={message.sentBy.avatarUrl}
            size={50}
            onlineStatus="online"
          />
        </MessageMemberAvatar>
        <MessageContent>
          <MessageMember>
            <UserName as="span">
              {message.sentBy.firstName} {message.sentBy.lastName}
            </UserName>
            <MessageTimestamp>{fromNow(message.created)}</MessageTimestamp>
            {differenceSeconds(message.modified, message.created) > 0 && (
              <MessageTimestamp>edited</MessageTimestamp>
            )}
          </MessageMember>
          {message.messageType === 'TEXT' && (
            <MessageText>{message.body}</MessageText>
          )}
          {message.messageType === 'MEDIA' && (
            <img width={640} height={480} src={message.url} alt="" />
          )}
        </MessageContent>
      </MessageContainer>
    </MessageContainerOuter>
  )
}

export default ConversationMessage

import React, { FC } from 'react'
import { UserType } from '../../../types/user'
import styled from 'styled-components'
import { primaryFontColor } from '../../../styles/colors'
import { gql } from '@apollo/client'
import { DocumentNode } from 'graphql'
import Avatar from '../../atoms/Avatar'
import { fromNow } from '../../../utils/date'
import { fsXXS } from '../../../styles/typography'
import UserName from '../../atoms/UserName'
import { Message, TextMessage, MediaMessage } from '../../../types/conversation'

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
  index: number
  measure: () => void
  member: UserType
  message: Message
}

type Fragments = {
  fragments: { message: DocumentNode }
}

const ConversationMessage: FC<Props> & Fragments = ({ member, message }) => {
  return (
    <MessageContainerOuter>
      <MessageContainer>
        <MessageMemberAvatar>
          <Avatar
            src={member.profilePictureUrl}
            size={50}
            onlineStatus="online"
          />
        </MessageMemberAvatar>
        <MessageContent>
          <MessageMember>
            <UserName as="span">{member.name}</UserName>
            <MessageTimestamp>{fromNow(message.timestamp)}</MessageTimestamp>
          </MessageMember>
          {message.type === 'text' ? (
            <MessageText>{(message as TextMessage).text}</MessageText>
          ) : (
            <img
              width="100%"
              height={450}
              src={(message as MediaMessage).url}
              alt=""
            />
          )}
        </MessageContent>
      </MessageContainer>
    </MessageContainerOuter>
  )
}

ConversationMessage.fragments = {
  message: gql`
    fragment Message on ConversationFeedMessage {
      id
      member {
        name
        profilePictureUrl
        onlineStatus
      }
      message {
        type
        timestamp
        ... on ConversationMessageText {
          text
        }
        ... on ConversationMessageImage {
          url
        }
        ... on ConversationMessageVideo {
          url
        }
      }
    }
  `,
}

export default ConversationMessage

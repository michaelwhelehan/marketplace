import React, { FC } from 'react'
import { MemberType } from '../../../types/user'
import styled from 'styled-components'
import { lightGrey } from '../../../styles/colors'
import { gql } from '@apollo/client'
import { DocumentNode } from 'graphql'

const MessageContainerOuter = styled.div`
  height: 100%;
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
`

const MessageContainer = styled.div`
  height: 100%;
  padding: 20px;
  background-color: ${lightGrey};
  border-radius: 4px;
`

const MessageText = styled.p`
  line-height: 22px;
`

interface Message {
  type: 'text' | 'image' | 'video'
  timestamp: Date
}

interface TextMessage extends Message {
  text: string
}

interface MediaMessage extends Message {
  url: string
}

interface Props {
  index: number
  measure: () => void
  member: MemberType
  message: Message
}

type Fragments = {
  fragments: { message: DocumentNode }
}

const ConversationMessage: FC<Props> & Fragments = ({
  index,
  measure,
  member,
  message,
}) => {
  return (
    <MessageContainerOuter>
      <MessageContainer>
        {message.type === 'text' ? (
          <MessageText>{(message as TextMessage).text}</MessageText>
        ) : (
          <img height={500} src={(message as MediaMessage).url} alt="" />
        )}
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

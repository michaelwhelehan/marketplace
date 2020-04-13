import React, { FC } from 'react'
import { MemberType } from '../../../types/user'
import styled from 'styled-components'
import { lightGrey } from '../../../styles/colors'
import gql from 'graphql-tag'
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

type MessageType = {
  text: string
  timestamp: Date
}

interface Props {
  index: number
  member: MemberType
  message: MessageType
}

type Fragments = {
  fragments: { message: DocumentNode }
}

const ConversationMessage: FC<Props> & Fragments = ({
  index,
  member,
  message,
}) => {
  return (
    <MessageContainerOuter>
      <MessageContainer>
        <MessageText>{message.text}</MessageText>
      </MessageContainer>
    </MessageContainerOuter>
  )
}

ConversationMessage.fragments = {
  message: gql`
    fragment Message on ConversationMessage {
      member {
        name
        profilePictureUrl
        onlineStatus
      }
      message {
        text
        timestamp
      }
    }
  `,
}

export default ConversationMessage

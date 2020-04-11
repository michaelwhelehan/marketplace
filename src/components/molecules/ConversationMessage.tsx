import React, { FC } from 'react'
import { MemberType } from '../../types/user'
import styled from 'styled-components'
import { lightGrey } from '../../styles/colors'

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

const ConversationMessage: FC<Props> = ({ index, member, message }) => {
  return (
    <MessageContainerOuter>
      <MessageContainer>
        <MessageText>{message.text}</MessageText>
      </MessageContainer>
    </MessageContainerOuter>
  )
}

export default ConversationMessage

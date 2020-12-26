import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import ConversationMessageList, {
  ConversationMessageListProps,
} from './ConversationMessageList'
import ConversationTextField, {
  ConversationTextFieldProps,
} from './ConversationTextField'
import { ConversationPositionType } from '../../../types/conversation'

const ConversationContainer = styled.article`
  position: relative;
  height: 100%;
  padding-left: 20px;
  padding-bottom: 20px;
`

const ConversationMessagesContainer = styled.div<{
  position: ConversationPositionType
}>`
  ${({ position }) =>
    position === 'topDown' &&
    css`
      margin-top: 190px;
    `}
  height: calc(100% - 60px);
`

const ConversationTextFieldContainer = styled.div<{
  position: ConversationPositionType
}>`
  position: absolute;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  left: 0;
  right: 0;
  ${({ position }) =>
    position === 'topDown' &&
    css`
      top: -170px;
    `}
  ${({ position }) =>
    position === 'bottomUp' &&
    css`
      bottom: 20px;
    `}
`

interface Props
  extends ConversationMessageListProps,
    ConversationTextFieldProps {}

const Conversation: FC<Props> = ({ onMessageCreated, ...props }) => {
  return (
    <ConversationContainer>
      <ConversationMessagesContainer position={props.position}>
        <ConversationMessageList {...props} />
      </ConversationMessagesContainer>
      <ConversationTextFieldContainer position={props.position}>
        <ConversationTextField
          conversation={props.conversation}
          position={props.position}
          onMessageCreated={onMessageCreated}
        />
      </ConversationTextFieldContainer>
    </ConversationContainer>
  )
}

export default Conversation

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

const ConversationMessagesWrapper = styled.div<{
  position: ConversationPositionType
}>`
  ${({ position }) =>
    position === 'topDown' &&
    css`
      margin-top: 70px;
    `}
  height: calc(100% - 60px);
`

const ConversationTextFieldWrapper = styled.div<{
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
      top: -50px;
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

const Conversation: FC<Props> = ({
  onMessageCreated,
  memberName,
  ...props
}) => {
  return (
    <ConversationContainer>
      <ConversationMessagesWrapper position={props.position}>
        <ConversationMessageList {...props} />
      </ConversationMessagesWrapper>
      <ConversationTextFieldWrapper position={props.position}>
        <ConversationTextField
          memberName={memberName}
          onMessageCreated={onMessageCreated}
        />
      </ConversationTextFieldWrapper>
    </ConversationContainer>
  )
}

export default Conversation
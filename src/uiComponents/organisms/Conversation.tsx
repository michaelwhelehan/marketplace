import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import ConversationMessageList, {
  ConversationMessageListProps,
} from '../molecules/Conversation/ConversationMessageList'
import ConversationTextField, {
  ConversationTextFieldProps,
} from '../molecules/Conversation/ConversationTextField'

const ConversationContainer = styled.article`
  position: relative;
  height: 100%;
  padding-left: 20px;
  padding-bottom: 20px;
`

const ConversationMessagesWrapper = styled.div<{
  position: 'topDown' | 'bottomUp'
}>`
  ${({ position }) =>
    position === 'topDown' &&
    css`
      margin-top: 70px;
    `}
  height: calc(100% - 60px);
`

const ConversationTextFieldWrapper = styled.div<{
  position: 'topDown' | 'bottomUp'
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
    ConversationTextFieldProps {
  position: 'topDown' | 'bottomUp'
}

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

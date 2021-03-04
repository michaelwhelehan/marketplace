import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { useResizeDetector } from 'react-resize-detector'
import ConversationMessageList, {
  ConversationMessageListProps,
} from './ConversationMessageList'
import ConversationTextField, {
  ConversationTextFieldProps,
} from './ConversationTextField'
import { ConversationPositionType } from '../../../types/conversation'
import ConversationWelcomeMessage, {
  ConversationWelcomeMessageProps,
} from './ConversationWelcomeMessage'

const ConversationContainer = styled.article`
  position: relative;
  height: 100%;
  padding-left: 20px;
  padding-bottom: 20px;
`

const ConversationMessagesContainer = styled.div<{
  position: ConversationPositionType
  textFieldHeightOffset: number
}>`
  position: relative;
  ${({ position, textFieldHeightOffset }) =>
    position === 'topDown'
      ? css`
          margin-top: ${(textFieldHeightOffset || 92) + 28}px;
          height: calc(100% - 60px);
        `
      : css`
          height: calc(100% - ${(textFieldHeightOffset || 92) + 20}px);
        `}
`

const ConversationTextFieldContainer = styled.div<{
  position: ConversationPositionType
  textFieldHeightOffset: number
}>`
  position: absolute;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  left: 0;
  right: 0;
  ${({ position, textFieldHeightOffset }) =>
    position === 'topDown' &&
    css`
      top: -${(textFieldHeightOffset || 92) + 15}px;
    `}
  ${({ position }) =>
    position === 'bottomUp' &&
    css`
      bottom: 20px;
    `}
`

interface Props
  extends ConversationMessageListProps,
    ConversationTextFieldProps,
    ConversationWelcomeMessageProps {}

const Conversation: FC<Props> = ({ onMessageCreated, member, ...props }) => {
  const { height, ref } = useResizeDetector()
  const messageListLength = props.conversation?.conversationFeed?.edges?.length

  return (
    <ConversationContainer>
      <ConversationMessagesContainer
        position={props.position}
        textFieldHeightOffset={height}
      >
        {messageListLength > 0 && <ConversationMessageList {...props} />}
        {!messageListLength && !!member && (
          <ConversationWelcomeMessage member={member} />
        )}
      </ConversationMessagesContainer>
      <ConversationTextFieldContainer
        ref={ref as any}
        position={props.position}
        textFieldHeightOffset={height}
      >
        <ConversationTextField
          editorRef={props.editorRef}
          editorValue={props.editorValue}
          setEditorValue={props.setEditorValue}
          textFieldPlaceholder={props.textFieldPlaceholder}
          onMessageCreated={onMessageCreated}
        />
      </ConversationTextFieldContainer>
    </ConversationContainer>
  )
}

export default Conversation

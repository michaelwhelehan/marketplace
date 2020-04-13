import React, { FC } from 'react'
import styled from 'styled-components'
import ConversationMessageList, {
  ConversationMessageListProps,
} from '../molecules/Conversation/ConversationMessageList'
import ConversationTextField from '../molecules/Conversation/ConversationTextField'

const ConversationContainer = styled.article`
  position: relative;
  height: 100%;
  padding-left: 20px;
  padding-bottom: 20px;
`

const ConversationMessagesWrapper = styled.div`
  height: calc(100% - 60px);
`

const ConversationTextFieldWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  left: 0;
  right: 0;
`

interface Props extends ConversationMessageListProps {}

const Conversation: FC<Props> = ({ ...props }) => {
  return (
    <ConversationContainer>
      <ConversationMessagesWrapper>
        <ConversationMessageList {...props} />
      </ConversationMessagesWrapper>
      <ConversationTextFieldWrapper>
        <ConversationTextField memberName="Michael" />
      </ConversationTextFieldWrapper>
    </ConversationContainer>
  )
}

export default Conversation

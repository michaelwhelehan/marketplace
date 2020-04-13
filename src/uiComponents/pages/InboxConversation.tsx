import React, { FC } from 'react'
import styled from 'styled-components'
import { borderColor, white } from '../../styles/colors'
import { MAIN_HEADER_HEIGHT } from '../../constants/sizes'
import ConversationConnected from '../../components/Conversation/ConversationConnected'

const INBOX_HEADER_HEIGHT = 75

const ConversationWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`

const TitleContainer = styled.article`
  background-color: ${white};
  border-bottom: 1px solid ${borderColor};
  width: 100%;
  height: ${INBOX_HEADER_HEIGHT}px;
`

const DiscussionContainer = styled.article`
  flex: 1;
  background-color: ${white};
  height: calc(100vh - ${MAIN_HEADER_HEIGHT}px - ${INBOX_HEADER_HEIGHT}px);
`

const DetailsContainer = styled.article`
  flex-basis: 300px;
  padding: 20px;
  border-left: 1px solid ${borderColor};
  background-color: ${white};
`

const InboxConversation: FC = () => {
  return (
    <ConversationWrapper>
      <TitleContainer />
      <DiscussionContainer>
        <ConversationConnected />
      </DiscussionContainer>
      <DetailsContainer />
    </ConversationWrapper>
  )
}

export default InboxConversation

import React, { FC } from 'react'
import styled from 'styled-components'
import { borderColor, white, black } from '../styles/colors'
import { MAIN_HEADER_HEIGHT } from '../constants/sizes'
import ConversationConnected from '../components/Conversation/ConversationConnected'
import StatusIndicator from '../uiComponents/atoms/StatusIndicator'
import { ParagraphS } from '../uiComponents/atoms/Paragraphs'
import { fwBold } from '../styles/typography'

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
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Member = styled.div`
  display: flex;
  align-items: center;
`

const MemberName = styled(ParagraphS)`
  ${fwBold};
  color: ${black};
  padding-left: 5px;
`

const LastSeen = styled.div`
  padding-top: 5px;
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
      <TitleContainer>
        <Member>
          <StatusIndicator onlineStatus="online" />
          <MemberName>Michael W.</MemberName>
        </Member>
        <LastSeen>
          <ParagraphS>Last seen 2 hours ago</ParagraphS>
        </LastSeen>
      </TitleContainer>
      <DiscussionContainer>
        <ConversationConnected position="bottomUp" />
      </DiscussionContainer>
      <DetailsContainer />
    </ConversationWrapper>
  )
}

export default InboxConversation

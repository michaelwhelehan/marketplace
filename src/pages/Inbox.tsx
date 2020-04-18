import React, { FC } from 'react'
import styled from 'styled-components'
import BaseContainer from '../uiComponents/atoms/Container'
import { borderColor, white, primaryFontColor } from '../styles/colors'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Icon from '../uiComponents/atoms/Icon'
import { MAIN_HEADER_HEIGHT } from '../constants/sizes'
import FilterSelect from '../uiComponents/atoms/FilterSelect'
import InboxConversation from './InboxConversation'
import { HeadingL } from '../uiComponents/atoms/Headings'
import { ParagraphM } from '../uiComponents/atoms/Paragraphs'
import { INBOX_HEADER_HEIGHT } from '../constants/sizes'
import InboxConversationList from '../uiComponents/molecules/Inbox/InboxConversationList'

const StyledContainer = styled(BaseContainer)`
  border-left: 1px solid ${borderColor};
  border-right: 1px solid ${borderColor};
  height: calc(100vh - ${MAIN_HEADER_HEIGHT}px);
  display: flex;
`

const FilterContainer = styled.div`
  height: ${INBOX_HEADER_HEIGHT}px;
  padding: 20px 10px 20px 10px;
  border-bottom: 1px solid ${borderColor};
`

const SideContainer = styled.article`
  flex-basis: 300px;
  border-right: 1px solid ${borderColor};
  background-color: ${white};
`

const MainContainer = styled.article`
  flex: 1;
  background-color: ${white};
`

const SelectConversation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const InboxHint: FC = () => (
  <SelectConversation>
    <Icon name="MdChat" size={40} color={primaryFontColor} />
    <HeadingL>Select a Conversation</HeadingL>
    <ParagraphM>
      Try selecting a conversation or searching for someone specific.
    </ParagraphM>
  </SelectConversation>
)

const Inbox: FC = () => {
  const match = useRouteMatch()

  return (
    <StyledContainer>
      <SideContainer>
        <FilterContainer>
          <FilterSelect placeholder="All Conversations" />
        </FilterContainer>
        <InboxConversationList />
      </SideContainer>
      <MainContainer>
        <Switch>
          <Route path={`${match.path}/:conversationId`}>
            <InboxConversation />
          </Route>
          <Route path={match.path}>
            <InboxHint />
          </Route>
        </Switch>
      </MainContainer>
    </StyledContainer>
  )
}

export default Inbox

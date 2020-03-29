import React, { FC } from 'react'
import styled from 'styled-components'
import BaseContainer from '../atoms/Container'
import {
  borderColor,
  offWhite,
  white,
  primaryFontColor,
} from '../../styles/colors'
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom'
import Icon from '../atoms/Icon'
import { MAIN_HEADER_HEIGHT } from '../../constants/sizes'
import FilterSelect from '../atoms/FilterSelect'
import InboxConversation from './InboxConversation'
import { HeadingL } from '../atoms/Headings'
import { ParagraphM } from '../atoms/Paragraphs'

const INBOX_HEADER_HEIGHT = 75

const StyledContainer = styled(BaseContainer)`
  border-left: 1px solid ${borderColor};
  border-right: 1px solid ${borderColor};
  height: calc(100vh - ${MAIN_HEADER_HEIGHT}px);
  display: flex;
`

const FilterContainer = styled.div`
  height: ${INBOX_HEADER_HEIGHT}px;
  padding: 20px;
  border-bottom: 1px solid ${borderColor};
`

const LeftSideContainer = styled.article`
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
      <LeftSideContainer>
        <FilterContainer>
          <FilterSelect placeholder="All Conversations" />
        </FilterContainer>
      </LeftSideContainer>
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

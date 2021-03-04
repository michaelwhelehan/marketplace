import React, { FC } from 'react'
import styled from 'styled-components'
import BaseContainer from '../../uiComponents/atoms/Container'
import { borderColor, white, primaryFontColor } from '../../styles/colors'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Icon from '../../uiComponents/atoms/Icon'
import { MAIN_HEADER_HEIGHT } from '../../constants/sizes'
import SelectField from '../../uiComponents/atoms/SelectField'
import InboxConversation from '../InboxConversation/InboxConversationPage'
import { HeadingL } from '../../uiComponents/atoms/Headings'
import { ParagraphM } from '../../uiComponents/atoms/Paragraphs'
import { INBOX_HEADER_HEIGHT } from '../../constants/sizes'
import { useGetUserConversationsQuery } from './queries'
import InboxConversationList from './sections/InboxConversationList'
import { useAuth } from '../../services'

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

const filterStyles = {
  control: (styles) => ({
    ...styles,
    border: 'none',
    cursor: 'pointer',
    width: '180px',
    padding: 0,
  }),
  indicatorSeparator: (styles) => ({ ...styles, backgroundColor: white }),
  dropdownIndicator: (styles) => ({ ...styles, color: primaryFontColor }),
  placeholder: (styles) => ({ ...styles, color: primaryFontColor }),
}

const InboxHint: FC = () => (
  <SelectConversation>
    <Icon name="MdChat" size={40} color={primaryFontColor} />
    <HeadingL>Select a Conversation</HeadingL>
    <ParagraphM>
      Try selecting a conversation or searching for someone specific.
    </ParagraphM>
  </SelectConversation>
)

const InboxPage: FC = () => {
  const match = useRouteMatch()
  const { user } = useAuth()
  const { data, loading, loadMore } = useGetUserConversationsQuery({
    pageSize: 20,
  })
  const hasData = data?.me?.conversations?.edges?.length > 0

  return (
    <StyledContainer>
      <SideContainer>
        <FilterContainer>
          <SelectField
            placeholder="All Conversations"
            options={[{ label: 'All Conversations', value: 'all' }]}
            styles={filterStyles}
          />
        </FilterContainer>
        <InboxConversationList
          user={user}
          conversationLoadAmount={20}
          conversationList={data?.me?.conversations?.edges}
          conversationListLoading={loading && !hasData}
          onLoadMoreConversations={async () => {
            if (data?.me?.conversations?.pageInfo?.hasNextPage) {
              loadMore(
                (prev, next) => ({
                  ...prev,
                  me: {
                    ...prev.me,
                    conversations: {
                      ...prev.me.conversations,
                      edges: [
                        ...prev.me.conversations.edges,
                        ...next.me.conversations.edges,
                      ],
                      pageInfo: next.me.conversations.pageInfo,
                    },
                  },
                }),
                {
                  after: data.me.conversations.pageInfo.endCursor,
                },
              )
            }
          }}
        />
      </SideContainer>
      <MainContainer>
        <Switch>
          <Route path={`${match.path}/:username`}>
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

export default InboxPage

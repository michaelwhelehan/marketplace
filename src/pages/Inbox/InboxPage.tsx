import React, { FC } from 'react'
import styled from 'styled-components'
import BaseContainer from '../../uiComponents/atoms/Container'
import { borderColor, white, primaryFontColor } from '../../styles/colors'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Icon from '../../uiComponents/atoms/Icon'
import { MAIN_HEADER_HEIGHT } from '../../constants/sizes'
import FilterSelect from '../../uiComponents/atoms/SelectField'
import InboxConversation from '../InboxConversation/InboxConversationPage'
import { HeadingL } from '../../uiComponents/atoms/Headings'
import { ParagraphM } from '../../uiComponents/atoms/Paragraphs'
import { INBOX_HEADER_HEIGHT } from '../../constants/sizes'
import InboxConversationList from './sections/InboxConversationList'
import { gql, useQuery } from '@apollo/client'

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

const GET_CONVERSATION_LIST = gql`
  query ConversationList($cursor: String, $loadAmount: Integer) {
    conversationList(cursor: $cursor, loadAmount: $loadAmount) @client {
      cursor
      conversations {
        id
        member {
          profilePictureUrl
          name
          onlineStatus
        }
        lastMessage {
          lastMessageFromMe
          lastMessageTimestamp
          lastMessageText
        }
      }
    }
  }
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

const InboxPage: FC = () => {
  const match = useRouteMatch()
  const { data, loading, fetchMore } = useQuery(GET_CONVERSATION_LIST, {
    variables: { cursor: undefined, loadAmount: undefined },
  })

  return (
    <StyledContainer>
      <SideContainer>
        <FilterContainer>
          <FilterSelect
            placeholder="All Conversations"
            options={[{ label: 'All Conversations', value: 'all' }]}
          />
        </FilterContainer>
        {!data ? (
          <>Loading...</>
        ) : (
          <InboxConversationList
            conversationList={data?.conversationList?.conversations}
            conversationListLoading={loading}
            onLoadMoreConversations={async loadAmount => {
              await sleep(Math.floor(Math.random() * 1000) + 500)
              await fetchMore({
                query: GET_CONVERSATION_LIST,
                variables: {
                  cursor: data.conversationList.cursor,
                  loadAmount,
                },
                updateQuery: (
                  previousResult: {
                    conversationList: { conversations: any; cursor: string }
                  },
                  { fetchMoreResult },
                ) => {
                  const previousConversationList =
                    previousResult.conversationList
                  const newConversationList = fetchMoreResult.conversationList

                  const newConversationListData = {
                    ...previousResult.conversationList,
                    conversations: [
                      ...previousConversationList.conversations,
                      ...newConversationList.conversations,
                    ],
                    cursor: newConversationList.cursor,
                    __typename: 'ConversationList',
                  }
                  const newData = {
                    ...previousResult,
                    conversationList: newConversationListData,
                  }
                  return newData
                },
              })
            }}
          />
        )}
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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default InboxPage

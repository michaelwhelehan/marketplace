import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import { borderColor, white } from '../../styles/colors'
import { MAIN_HEADER_HEIGHT } from '../../constants/sizes'
import ConversationConnected from '../../components/Conversation/ConversationConnected'
import profilePictureUrl from '../../assets/images/profile.png'
import InboxConversationTitle from './sections/InboxConversationTitle'
import { UserType } from '../../types/user'
import InboxConversationDetails from './sections/InboxConversationDetails'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { ConversationCategory } from '../../types/conversation'
import { useConversationMemberProfileQuery } from '../../components/Conversation/queries'
import Loader from '../../uiComponents/atoms/Loader/Loader'

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

interface MatchParams {
  username: string
}

const InboxConversationPage: FC = () => {
  const match = useRouteMatch<MatchParams>()
  const history = useHistory()

  const { data, loading } = useConversationMemberProfileQuery(
    match.params.username,
  )

  useEffect(() => {
    if (data?.publicUser === null) {
      history.push('/dashboard/inbox')
    }
  }, [data, history])

  return (
    <ConversationWrapper>
      {loading ? (
        <Loader name="Dashboard" />
      ) : (
        <>
          <TitleContainer>
            <InboxConversationTitle member={data.publicUser} />
          </TitleContainer>
          <DiscussionContainer>
            <ConversationConnected
              conversationCategory={ConversationCategory.INBOX}
              conversationMemberUsername={match.params.username}
              conversationMember={data.publicUser}
              position="bottomUp"
              scrollType="infinite"
            />
          </DiscussionContainer>
          <DetailsContainer>
            <InboxConversationDetails member={data.publicUser} />
          </DetailsContainer>
        </>
      )}
    </ConversationWrapper>
  )
}

export default InboxConversationPage

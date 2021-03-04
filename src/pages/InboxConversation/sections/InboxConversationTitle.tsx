import React, { FC } from 'react'
import styled from 'styled-components'
import StatusIndicator from '../../../uiComponents/atoms/StatusIndicator'
import { ParagraphS } from '../../../uiComponents/atoms/Paragraphs'
import UserName from '../../../uiComponents/atoms/UserName'
import { UserType } from '../../../types/user'
import { fromNow } from '../../../utils/date'
import { ConversationMemberProfile_publicUser } from '../../../components/Conversation/gqlTypes/ConversationMemberProfile'

const Container = styled.article`
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Member = styled.div`
  display: flex;
  align-items: center;
`

const LastSeen = styled.div`
  margin-top: 5px;
`

interface Props {
  member: ConversationMemberProfile_publicUser
}

const InboxConversationTitle: FC<Props> = ({ member }) => {
  return (
    <Container>
      <Member>
        <StatusIndicator onlineStatus="offline" />
        <UserName as="span" style={{ marginLeft: '5px' }}>
          {member.firstName} {member.lastName}
        </UserName>
      </Member>
      <LastSeen>
        <ParagraphS>Last seen {fromNow(new Date())}</ParagraphS>
      </LastSeen>
    </Container>
  )
}

export default InboxConversationTitle

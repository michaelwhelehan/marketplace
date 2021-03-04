import React, { FC } from 'react'
import styled from 'styled-components'
import { ConversationMemberProfile_publicUser } from '../../../components/Conversation/gqlTypes/ConversationMemberProfile'
import { UserType } from '../../../types/user'
import UserCard from '../../../uiComponents/molecules/UserCard'
import UserStats, {
  UserStatsSelector,
} from '../../../uiComponents/molecules/UserStats'

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${UserStatsSelector} {
    margin-top: 20px;
  }
`

interface Props {
  member: ConversationMemberProfile_publicUser
}

const InboxConversationDetails: FC<Props> = ({ member }) => {
  const userDetails: UserType = {
    profilePictureUrl: member.avatarUrl,
    name: `${member.firstName} ${member.lastName}`,
    onlineStatus: 'offline',
    lastSeen: new Date(),
  }

  return (
    <Container>
      <UserCard user={userDetails} />
      <UserStats />
    </Container>
  )
}

export default InboxConversationDetails

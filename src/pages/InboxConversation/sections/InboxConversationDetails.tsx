import React, { FC } from 'react'
import styled from 'styled-components'
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
  member: UserType
}

const InboxConversationDetails: FC<Props> = ({ member }) => {
  return (
    <Container>
      <UserCard user={member} />
      <UserStats />
    </Container>
  )
}

export default InboxConversationDetails

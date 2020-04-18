import React, { FC } from 'react'
import styled from 'styled-components'
import { MemberType } from '../../../types/user'
import UserCard from '../../../uiComponents/molecules/User/UserCard'

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`

interface Props {
  member: MemberType
}

const InboxConversationDetails: FC<Props> = ({ member }) => {
  return (
    <Container>
      <UserCard member={member} />
    </Container>
  )
}

export default InboxConversationDetails

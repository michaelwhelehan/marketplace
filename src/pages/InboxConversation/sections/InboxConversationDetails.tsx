import React, { FC } from 'react'
import styled from 'styled-components'
import { MemberType } from '../../../types/user'
import UserCard from '../../../uiComponents/molecules/User/UserCard'
import { ParagraphS } from '../../../uiComponents/atoms/Paragraphs'
import { fwBold } from '../../../styles/typography'
import { black } from '../../../styles/colors'

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const UserStats = styled.div`
  margin-top: 20px;
  width: 100%;
`

const UserStatWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  &:not(:first-child) {
    margin-top: 10px;
  }
`

const UserStatTitle = styled(ParagraphS)`
  ${fwBold};
`

const UserStat = styled(ParagraphS)`
  color: ${black};
  ${fwBold};
`

interface Props {
  member: MemberType
}

const InboxConversationDetails: FC<Props> = ({ member }) => {
  return (
    <Container>
      <UserCard member={member} />
      <UserStats>
        <UserStatWrapper>
          <UserStatTitle>Avg. response time</UserStatTitle>
          <UserStat>2h</UserStat>
        </UserStatWrapper>
        <UserStatWrapper>
          <UserStatTitle>From</UserStatTitle>
          <UserStat>Hamburg</UserStat>
        </UserStatWrapper>
        <UserStatWrapper>
          <UserStatTitle>German</UserStatTitle>
          <UserStat>Native</UserStat>
        </UserStatWrapper>
        <UserStatWrapper>
          <UserStatTitle>English</UserStatTitle>
          <UserStat>Professional</UserStat>
        </UserStatWrapper>
      </UserStats>
    </Container>
  )
}

export default InboxConversationDetails

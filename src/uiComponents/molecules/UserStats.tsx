import React, { FC } from 'react'
import styled from 'styled-components'
import { ParagraphS } from '../atoms/Paragraphs'
import { fwBold } from '../../styles/typography'
import { black } from '../../styles/colors'

export const UserStatsSelector = styled.div`
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

interface Props {}

const UserStats: FC<Props> = () => {
  return (
    <UserStatsSelector>
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
    </UserStatsSelector>
  )
}

export default UserStats

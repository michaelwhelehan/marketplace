import React, { FC } from 'react'
import styled from 'styled-components'
import {
  white,
  borderColor,
  primaryColor,
  black,
  featherGrey,
} from '../../../styles/colors'
import { ParagraphS, ParagraphL } from '../../../uiComponents/atoms/Paragraphs'
import { fwBold } from '../../../styles/typography'
import ProgressBar from '../../../uiComponents/atoms/ProgressBar'
import { Link } from 'react-router-dom'
import Icon from '../../../uiComponents/atoms/Icon'
import { featherShadow } from '../../../styles/shadows'
import LineBreak from '../../../uiComponents/atoms/LineBreak'

const Container = styled.div`
  background-color: ${white};
  border: 1px solid ${borderColor};
  ${featherShadow};
`

const Header = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${borderColor};
  background-color: ${primaryColor};
`

const Body = styled.div`
  padding: 20px;
  background-color: ${white};
`

const WelcomeText = styled(ParagraphS)`
  color: ${white};
`

const UserFullNameText = styled(ParagraphL)`
  color: ${white};
  ${fwBold};
`

const UserNameText = styled(ParagraphL)`
  color: ${white};
`

const AdvanceProfileItem = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: ${featherGrey};
  display: flex;
  justify-content: space-between;
`

const AdvanceProfileLink = styled(Link)`
  ${fwBold};
  text-decoration: none;
  color: ${primaryColor};
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
  }
`

const AdvanceProfileBenefit = styled(ParagraphS)`
  ${fwBold};
`

const AccountBalanceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AccountBalanceTitle = styled(ParagraphS)`
  ${fwBold};
  color ${black};
`

const AccountBalanceValue = styled(ParagraphS)`
  margin-top: 10px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${primaryColor};
`

const AccountSummary: FC = () => {
  const percentComplete = 40
  return (
    <Container>
      <Header>
        <WelcomeText>Welcome back,</WelcomeText>
        <UserFullNameText>Michael W.</UserFullNameText>
        <UserNameText>@mikewhelehan</UserNameText>
      </Header>
      <Body>
        <ProgressBar
          description={`Complete your profile ${percentComplete}%`}
          percentComplete={percentComplete}
          short
          fullWidth
        />
        <AdvanceProfileItem>
          <AdvanceProfileLink to="/dashboard/profile">
            <Icon name="MdAccountBalance" size={20} />
            <span>Add Education</span>
          </AdvanceProfileLink>
          <AdvanceProfileBenefit>+ 6%</AdvanceProfileBenefit>
        </AdvanceProfileItem>
        <LineBreak />
        <div>
          <AccountBalanceContainer>
            <AccountBalanceTitle>Account Balance</AccountBalanceTitle>
            <StyledLink to="/dashboard/payment-methods/">
              Deposit funds
            </StyledLink>
          </AccountBalanceContainer>
          <AccountBalanceValue>R50</AccountBalanceValue>
        </div>
      </Body>
    </Container>
  )
}

export default AccountSummary

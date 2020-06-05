import React, { FC } from 'react'
import styled from 'styled-components'
import { white, borderColor, black } from '../../../styles/colors'
import { HeadingM } from '../../../uiComponents/atoms/Headings'
import { ParagraphS } from '../../../uiComponents/atoms/Paragraphs'
import { fwBold } from '../../../styles/typography'

const Container = styled.div`
  background-color: ${white};
  border: 1px solid ${borderColor};
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.05);
`

const Header = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${borderColor};
`

const Body = styled.div`
  padding: 20px;
`

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:first-child) {
    padding-top: 10px;
  }

  &:not(:last-child) {
    padding-bottom: 10px;
    border-bottom: 1px solid ${borderColor};
  }
`

const SummaryTitle = styled(ParagraphS)`
  ${fwBold};
  color: ${black};
`

const SummaryValue = styled(ParagraphS)``

const StyledHeading = styled(HeadingM)`
  color: ${black};
`

const CreditSummary: FC = () => {
  return (
    <Container>
      <Header>
        <StyledHeading>Credit Summary</StyledHeading>
      </Header>
      <Body>
        <SummaryItem>
          <SummaryTitle>Remaining</SummaryTitle>
          <SummaryValue>7/8</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <SummaryTitle>Until next credit</SummaryTitle>
          <SummaryValue>3 days</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <SummaryTitle>Replenishment rate</SummaryTitle>
          <SummaryValue>1x</SummaryValue>
        </SummaryItem>
      </Body>
    </Container>
  )
}

export default CreditSummary

import React, { FC } from 'react'
import styled from 'styled-components'
import { borderColor, black } from '../../../styles/colors'
import { ParagraphS } from '../../../uiComponents/atoms/Paragraphs'
import { fwBold } from '../../../styles/typography'
import DashboardPanel from '../Panels/DashboardPanel'

const Container = styled.div`
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

const CreditSummary: FC = () => {
  return (
    <DashboardPanel title="Credit Summary">
      <Container>
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
      </Container>
    </DashboardPanel>
  )
}

export default CreditSummary

import React, { FC } from 'react'
import styled from 'styled-components'
import { primaryColor, black } from '../../../../../styles/colors'
import { HeadingS } from '../../../../../uiComponents/atoms/Headings'
import { ParagraphS } from '../../../../../uiComponents/atoms/Paragraphs'
import { fwBold } from '../../../../../styles/typography'
import { DashboardPanelContainer } from '../../../Panels/DashboardPanel'

const SummaryTitle = styled(HeadingS)`
  &:not(:first-child) {
    margin-top: 10px;
  }
`

const SummaryValue = styled(ParagraphS)`
  color: ${black};
  ${fwBold};
  margin-top: 5px;
`

const Budget = styled(SummaryValue)`
  color: ${primaryColor};
`

interface Props {}

const OffersSummary: FC<Props> = () => {
  return (
    <DashboardPanelContainer padded>
      <SummaryTitle>Budget</SummaryTitle>
      <Budget>$500</Budget>
      <SummaryTitle>Offers</SummaryTitle>
      <SummaryValue>4</SummaryValue>
      <SummaryTitle>Average Offer</SummaryTitle>
      <SummaryValue>$450</SummaryValue>
    </DashboardPanelContainer>
  )
}

export default OffersSummary

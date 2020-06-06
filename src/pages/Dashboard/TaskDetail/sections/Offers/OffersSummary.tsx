import React, { FC } from 'react'
import styled from 'styled-components'
import { white, borderColor, primaryColor } from '../../../../../styles/colors'
import { HeadingS } from '../../../../../uiComponents/atoms/Headings'
import { featherShadow } from '../../../../../styles/shadows'
import { ParagraphS } from '../../../../../uiComponents/atoms/Paragraphs'
import { fwBold } from '../../../../../styles/typography'

const Container = styled.div`
  background-color: ${white};
  border: 1px solid ${borderColor};
  ${featherShadow};
  padding: 20px;
`

const SummaryTitle = styled(HeadingS)`
  &:not(:first-child) {
    margin-top: 20px;
  }
`

const SummaryValue = styled(ParagraphS)`
  ${fwBold};
  margin-top: 10px;
`

const Budget = styled(SummaryValue)`
  color: ${primaryColor};
`

interface Props {}

const OffersSummary: FC<Props> = () => {
  return (
    <Container>
      <SummaryTitle>Budget</SummaryTitle>
      <Budget>R500</Budget>
      <SummaryTitle>Offers</SummaryTitle>
      <Budget>4</Budget>
      <SummaryTitle>Average Offer</SummaryTitle>
      <Budget>R450</Budget>
    </Container>
  )
}

export default OffersSummary

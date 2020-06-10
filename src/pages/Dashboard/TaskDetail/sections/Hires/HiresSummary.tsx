import React, { FC } from 'react'
import styled from 'styled-components'
import { black } from '../../../../../styles/colors'
import { HeadingS } from '../../../../../uiComponents/atoms/Headings'
import { ParagraphS } from '../../../../../uiComponents/atoms/Paragraphs'
import Button from '../../../../../uiComponents/atoms/Button'
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

const ButtonContainer = styled.div`
  margin-top: 20px;
`

interface Props {}

const HiresSummary: FC<Props> = () => {
  return (
    <DashboardPanelContainer padded>
      <SummaryTitle>Contact Started</SummaryTitle>
      <SummaryValue>2 June 2020</SummaryValue>
      <ButtonContainer>
        <Button styleType="error">Cancel Contract</Button>
      </ButtonContainer>
    </DashboardPanelContainer>
  )
}

export default HiresSummary

import React, { FC } from 'react'
import styled from 'styled-components'
import { white, borderColor, black } from '../../../../../styles/colors'
import { HeadingS } from '../../../../../uiComponents/atoms/Headings'
import { featherShadow } from '../../../../../styles/shadows'
import { ParagraphS } from '../../../../../uiComponents/atoms/Paragraphs'
import Button from '../../../../../uiComponents/atoms/Button'
import { fwBold } from '../../../../../styles/typography'

const Container = styled.div`
  background-color: ${white};
  border: 1px solid ${borderColor};
  ${featherShadow};
  padding: 20px;
`

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
    <Container>
      <SummaryTitle>Contact Started</SummaryTitle>
      <SummaryValue>2 June 2020</SummaryValue>
      <ButtonContainer>
        <Button styleType="error">Cancel Contract</Button>
      </ButtonContainer>
    </Container>
  )
}

export default HiresSummary
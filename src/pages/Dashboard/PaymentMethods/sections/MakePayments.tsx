import React, { FC } from 'react'
import styled from 'styled-components'
import { HeadingS } from '../../../../uiComponents/atoms/Headings'
import {
  ParagraphS,
  ParagraphM,
} from '../../../../uiComponents/atoms/Paragraphs'
import { fwBold } from '../../../../styles/typography'
import { black } from '../../../../styles/colors'
import CreditCardForm from '../../../../components/PaymentMethods/CreditCardForm'

const Container = styled.div``

const CreditContainer = styled.div`
  margin-top: 20px;
  display: flex;
`

const CreditItem = styled.div`
  margin-right: 20px;
`

const CreditItemTitle = styled(ParagraphS)`
  ${fwBold};
`

const CredititemValue = styled(ParagraphM)`
  ${fwBold};
  color: ${black};
`

const SectionContainer = styled.div`
  margin-top: 20px;
`

const HalfSectionContainer = styled(SectionContainer)`
  width: 50%;
`

const MakePayments: FC = () => {
  return (
    <Container>
      <ParagraphS>
        When you are ready to accept an offer, you will be required to pay for
        the task using our Escrow service. Payment will be held securely until
        the task is complete and you release payment to the Tasker.
      </ParagraphS>
      <HalfSectionContainer>
        <HeadingS>ADD CREDIT CARD</HeadingS>
        <CreditCardForm />
      </HalfSectionContainer>
      <SectionContainer>
        <HeadingS>CREDITS</HeadingS>
        <CreditContainer>
          <CreditItem>
            <CreditItemTitle>Balance:</CreditItemTitle>
            <CredititemValue>R50</CredititemValue>
          </CreditItem>
          <CreditItem>
            <CreditItemTitle>Credits Remaining:</CreditItemTitle>
            <CredititemValue>7 / 8</CredititemValue>
          </CreditItem>
          <CreditItem>
            <CreditItemTitle>Until next credit:</CreditItemTitle>
            <CredititemValue>3 days</CredititemValue>
          </CreditItem>
          <CreditItem>
            <CreditItemTitle>Refresh speed:</CreditItemTitle>
            <CredititemValue>1x</CredititemValue>
          </CreditItem>
        </CreditContainer>
      </SectionContainer>
    </Container>
  )
}

export default MakePayments

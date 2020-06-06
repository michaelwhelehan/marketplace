import React, { FC } from 'react'
import styled from 'styled-components'
import { HeadingS } from '../../../../uiComponents/atoms/Headings'
import Button from '../../../../uiComponents/atoms/Button'
import {
  ParagraphS,
  ParagraphM,
} from '../../../../uiComponents/atoms/Paragraphs'
import FormField from '../../../../uiComponents/molecules/FormField'
import TextField from '../../../../uiComponents/atoms/TextField'
import { fwBold } from '../../../../styles/typography'
import { black } from '../../../../styles/colors'

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

const CreditCardForm = styled.form`
  padding-top: 20px;
  padding-bottom: 20px;
`

const FieldContainer = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`

const ButtonContainer = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: flex-end;
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
        <CreditCardForm>
          <FormField label="Card Number">
            <TextField
              name="cardNumber"
              placeholder="1234 1234 1234 1234"
              fullWidth
            />
          </FormField>
          <FieldContainer>
            <FormField label="Expiry Date">
              <TextField name="expiryDate" placeholder="MM / YY" fullWidth />
            </FormField>
            <FormField label="CVC">
              <TextField name="cvc" placeholder="CVC" fullWidth />
            </FormField>
          </FieldContainer>
          <ButtonContainer>
            <Button>Add Credit Card</Button>
          </ButtonContainer>
        </CreditCardForm>
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

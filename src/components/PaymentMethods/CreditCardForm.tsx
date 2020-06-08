import React, { FC } from 'react'
import styled from 'styled-components'
import FormField from '../../uiComponents/molecules/FormField'
import TextField from '../../uiComponents/atoms/TextField'
import Button from '../../uiComponents/atoms/Button'
import FieldContainer from '../../uiComponents/molecules/FieldContainer'

const StyledForm = styled.form`
  padding-top: 20px;
`

const ButtonContainer = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: flex-end;
`

const CreditCardForm: FC = () => {
  return (
    <StyledForm>
      <FormField label="Card Number" required>
        <TextField
          name="cardNumber"
          placeholder="1234 1234 1234 1234"
          fullWidth
        />
      </FormField>
      <FieldContainer split spacingTop>
        <FormField label="Expiry Date" required>
          <TextField name="expiryDate" placeholder="MM / YY" fullWidth />
        </FormField>
        <FormField label="CVC" required>
          <TextField name="cvc" placeholder="CVC" fullWidth />
        </FormField>
      </FieldContainer>
      <ButtonContainer>
        <Button>Add Credit Card</Button>
      </ButtonContainer>
    </StyledForm>
  )
}

export default CreditCardForm

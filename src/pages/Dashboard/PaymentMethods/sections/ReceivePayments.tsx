import React, { FC } from 'react'
import styled from 'styled-components'
import { HeadingS } from '../../../../uiComponents/atoms/Headings'
import { ParagraphS } from '../../../../uiComponents/atoms/Paragraphs'
import FormField from '../../../../uiComponents/molecules/FormField'
import TextField from '../../../../uiComponents/atoms/TextField'
import Button from '../../../../uiComponents/atoms/Button'
import FieldContainer from '../../../../uiComponents/molecules/FieldContainer'
import { Controller, useForm } from 'react-hook-form'
import SelectField from '../../../../uiComponents/atoms/SelectField'

const Container = styled.div``

const SectionContainer = styled.div`
  margin-top: 20px;
`

const HalfSectionContainer = styled(SectionContainer)`
  width: 50%;
`

const StyledForm = styled.form`
  padding-top: 20px;
`

const ButtonContainer = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: flex-end;
`

const ReceivePayments: FC = () => {
  const { control } = useForm()

  return (
    <Container>
      <ParagraphS>
        Once a task is completed, you will be able to request payment from the
        Job Poster, who will then release it to your nominated account.
      </ParagraphS>
      <HalfSectionContainer>
        <HeadingS>BILLING ADDRESS</HeadingS>
        <ParagraphS style={{ marginTop: '10px' }}>
          Your address will never been shown publicly, it is only used for
          account verification purposes.
        </ParagraphS>
        <StyledForm>
          <FormField label="Address Line 1" required>
            <TextField name="address1" fullWidth />
          </FormField>
          <FormField label="Address Line 2" spacingTop>
            <TextField name="address2" fullWidth />
          </FormField>
          <FieldContainer split spacingTop>
            <FormField label="Country" required>
              <TextField name="country" fullWidth />
            </FormField>
            <FormField label="City" required>
              <TextField name="city" fullWidth />
            </FormField>
          </FieldContainer>
          <FieldContainer split spacingTop>
            <FormField label="Suburb" required>
              <TextField name="suburb" fullWidth />
            </FormField>
            <FormField label="Postcode" required>
              <TextField name="postcode" fullWidth />
            </FormField>
          </FieldContainer>
          <ButtonContainer>
            <Button>Add Billing Address</Button>
          </ButtonContainer>
        </StyledForm>
      </HalfSectionContainer>
      <HalfSectionContainer>
        <HeadingS>BANK ACCOUNT DETAILS</HeadingS>
        <ParagraphS style={{ marginTop: '10px' }}>
          Please provide your bank details so you can get paid. We don't take
          any money from your account.
        </ParagraphS>
        <StyledForm>
          <FormField label="Account Holder Name" required>
            <TextField
              name="accountHolderName"
              placeholder="Michael Whelehan"
              fullWidth
            />
          </FormField>
          <FormField label="Account Number" required spacingTop>
            <TextField name="accountNumber" placeholder="123465789" fullWidth />
          </FormField>
          <FieldContainer split spacingTop>
            <FormField label="Branch Code" required>
              <TextField name="branchCode" placeholder="12345" fullWidth />
            </FormField>
            <FormField label="Account Type" required>
              <Controller
                as={SelectField}
                name="accountType"
                control={control}
                placeholder="Select an account type"
                options={[
                  { label: 'Cheque', value: 'cheque' },
                  { label: 'Savings', value: 'savings' },
                ]}
              />
            </FormField>
          </FieldContainer>
          <ButtonContainer>
            <Button>Add Bank Account</Button>
          </ButtonContainer>
        </StyledForm>
      </HalfSectionContainer>
    </Container>
  )
}

export default ReceivePayments

import React, { FC } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import FieldContainer from '../../../../uiComponents/molecules/FieldContainer'
import FormField from '../../../../uiComponents/molecules/FormField'
import TextField from '../../../../uiComponents/atoms/TextField'
import Button from '../../../../uiComponents/atoms/Button'

const StyledForm = styled.form`
  padding: 20px;
  width: 50%;
`

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`

const Password: FC = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormField label="Change password">
        <FieldContainer>
          <TextField
            name="currentPassword"
            ref={register()}
            placeholder="Current Password *"
            fullWidth
          />
        </FieldContainer>
        <FieldContainer spacingTop>
          <TextField
            name="password1"
            ref={register()}
            placeholder="New Password *"
            fullWidth
          />
        </FieldContainer>
        <FieldContainer spacingTop>
          <TextField
            name="password2"
            ref={register()}
            placeholder="Repeat Password *"
            fullWidth
          />
        </FieldContainer>
      </FormField>
      <ButtonContainer>
        <Button>Change Password</Button>
      </ButtonContainer>
    </StyledForm>
  )
}

export default Password

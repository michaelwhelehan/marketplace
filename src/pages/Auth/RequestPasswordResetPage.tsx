import React, { FC } from 'react'
import styled from 'styled-components'
import BaseContainer from '../../uiComponents/atoms/Container'
import Logo from '../../uiComponents/atoms/Logo'
import Button from '../../uiComponents/atoms/Button'
import TextField from '../../uiComponents/atoms/TextField'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { primaryColor, red } from '../../styles/colors'
import { ParagraphS } from '../../uiComponents/atoms/Paragraphs'
import { usePasswordResetRequestMutation } from './mutations'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const StyledContainer = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const LogoContainer = styled.div`
  height: 64px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  width: 300px;
`

const ErrorMessage = styled(ParagraphS)`
  color: ${red};
`

const StyledTextField = styled(TextField)`
  &:not(:first-child) {
    margin-top: 10px;
  }
`

const StyledButton = styled(Button)`
  margin-top: 10px;
`

const AlreadyHaveAnAccount = styled(ParagraphS)`
  margin-top: 20px;
`

const LoginLink = styled(Link)`
  color: ${primaryColor};
`

const schema = yup.object().shape({
  email: yup.string().required('Email is required'),
})

type FormValues = {
  email: string
}

const RequestPasswordResetPage: FC = () => {
  const { register, handleSubmit, errors: formErrors } = useForm<FormValues>({
    resolver: yupResolver(schema),
  })
  const requestPasswordReset = usePasswordResetRequestMutation()
  const [loading, setLoading] = React.useState(false)
  const [errors, setErrors] = React.useState(null)

  const onSubmit = async ({ email }) => {
    setLoading(true)
    const redirectUrl = `${window.location.origin}/reset-password`
    const { data } = await requestPasswordReset({
      variables: { email, redirectUrl },
    })
    setLoading(false)
    if (data.requestPasswordReset.errors?.length > 0) {
      setErrors(data.requestPasswordReset.errors)
    } else if (data) {
      setErrors(null)
    }
  }

  return (
    <StyledContainer>
      <LogoContainer>
        <Link to="/">
          <Logo />
        </Link>
      </LogoContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <ParagraphS>
          Please provide us your email address so we can share you a link to
          reset your password
        </ParagraphS>
        {errors?.length > 0 &&
          errors.map((error) => <ErrorMessage>{error.message}</ErrorMessage>)}
        <StyledTextField
          name="email"
          ref={register()}
          fullWidth
          placeholder="Email address"
          hasError={Boolean(formErrors.email)}
        />
        <StyledButton large fullWidth disabled={loading}>
          {loading ? 'Resetting...' : 'Reset password'}
        </StyledButton>
        <AlreadyHaveAnAccount>
          <LoginLink to="/login">Log in</LoginLink>
        </AlreadyHaveAnAccount>
      </StyledForm>
    </StyledContainer>
  )
}

export default RequestPasswordResetPage

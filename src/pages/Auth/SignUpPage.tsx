import React, { FC } from 'react'
import styled from 'styled-components'
import BaseContainer from '../../uiComponents/atoms/Container'
import Logo from '../../uiComponents/atoms/Logo'
import Button from '../../uiComponents/atoms/Button'
import TextField from '../../uiComponents/atoms/TextField'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { primaryColor, red, primaryFontColor } from '../../styles/colors'
import { ParagraphS, ParagraphXS } from '../../uiComponents/atoms/Paragraphs'
import { fsXS } from '../../styles/typography'
import { useAccountRegisterMutation } from './mutations'
import { useAuth } from '../../services'
import { yupResolver } from '@hookform/resolvers'
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

const Terms = styled(ParagraphXS)`
  margin-top: 20px;
  text-align: center;
`

const LoginLink = styled(Link)`
  color: ${primaryColor};
`

const TermsLink = styled(Link)`
  color: ${primaryFontColor};
  font-size: ${fsXS}px;
`

const schema = yup.object().shape({
  email: yup.string().required('Email is required'),
  password: yup.string().required('Password is required'),
})

type FormValues = {
  email: string
  password: string
}

const SignUpPage: FC = () => {
  const { register, handleSubmit, errors: formErrors } = useForm<FormValues>({
    resolver: yupResolver(schema),
  })
  const registerAccount = useAccountRegisterMutation()
  const [loading, setLoading] = React.useState(false)
  const [errors, setErrors] = React.useState(null)
  const history = useHistory()
  const { signIn } = useAuth()

  const onSubmit = async ({ email, password }) => {
    setLoading(true)
    const redirectUrl = `${window.location.origin}/confirm-account`
    const { data } = await registerAccount({
      variables: { email, password, redirectUrl },
    })
    setLoading(false)
    if (data.accountRegister.errors?.length > 0) {
      setErrors(data.accountRegister.errors)
    } else if (data) {
      setErrors(null)
      const { data: signInData } = await signIn(email, password)
      if (signInData) {
        history.push('/')
      }
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
        {errors?.length > 0 &&
          errors.map((error) => <ErrorMessage>{error.message}</ErrorMessage>)}
        {/* <StyledTextField
          name="firstName"
          ref={register()}
          fullWidth
          placeholder="First name"
        />
        <StyledTextField
          name="lastName"
          ref={register()}
          fullWidth
          placeholder="Last name"
        /> */}
        <StyledTextField
          name="email"
          ref={register()}
          fullWidth
          placeholder="Email address"
          hasError={Boolean(formErrors.email)}
        />
        <StyledTextField
          name="password"
          type="password"
          ref={register()}
          fullWidth
          placeholder="Password"
          hasError={Boolean(formErrors.password)}
        />
        <StyledButton large fullWidth disabled={loading}>
          {loading ? 'Signing up...' : 'Sign up'}
        </StyledButton>
        <AlreadyHaveAnAccount>
          Do you already have an account?{' '}
          <LoginLink to="/login">Log in</LoginLink>
        </AlreadyHaveAnAccount>
        <Terms>
          By registering, you agree to the{' '}
          <TermsLink to="/terms">Terms &amp; Conditions</TermsLink> and{' '}
          <TermsLink to="/privacy">Privacy Policy.</TermsLink>
        </Terms>
      </StyledForm>
    </StyledContainer>
  )
}

export default SignUpPage

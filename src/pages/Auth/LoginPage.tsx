import React, { FC } from 'react'
import styled from 'styled-components'
import BaseContainer from '../../uiComponents/atoms/Container'
import Logo from '../../uiComponents/atoms/Logo'
import Button from '../../uiComponents/atoms/Button'
import TextField from '../../uiComponents/atoms/TextField'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { primaryColor, red } from '../../styles/colors'
import { useAuth } from '../../services'
import { ParagraphS } from '../../uiComponents/atoms/Paragraphs'

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

  > *:not(:first-child) {
    margin-top: 10px;
  }
`

const ErrorMessage = styled(ParagraphS)`
  color: ${red};
`

const StyledLink = styled(Link)`
  margin-top: 20px !important;
  color: ${primaryColor};
`

type FormValues = {
  email: string
  password: string
}

const LoginPage: FC = () => {
  const { register, handleSubmit } = useForm<FormValues>()
  const { signIn } = useAuth()
  const [loading, setLoading] = React.useState(false)
  const [errors, setErrors] = React.useState(null)
  const history = useHistory()

  const onSubmit = async ({ email, password }) => {
    setLoading(true)
    const { data, dataError } = await signIn(email, password)
    setLoading(false)
    if (dataError?.error) {
      setErrors(dataError.error)
    } else if (data) {
      setErrors(null)
      history.push('/')
    }
  }

  return (
    <StyledContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        {errors?.length > 0 &&
          errors.map((error) => <ErrorMessage>{error.message}</ErrorMessage>)}
        <TextField
          name="email"
          ref={register()}
          fullWidth
          placeholder="Email address"
        />
        <TextField
          name="password"
          type="password"
          ref={register()}
          fullWidth
          placeholder="Password"
        />
        <Button large fullWidth disabled={loading}>
          {loading ? 'Signing in...' : 'Sign in'}
        </Button>
        <StyledLink to="/forgot-password">Forgot password?</StyledLink>
      </StyledForm>
    </StyledContainer>
  )
}

export default LoginPage

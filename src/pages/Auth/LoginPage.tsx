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

const StyledLink = styled(Link)`
  color: ${primaryColor};
`

const schema = yup.object().shape({
  email: yup.string().required('Email is required'),
  password: yup.string().required('Password is required'),
})

type FormValues = {
  email: string
  password: string
}

const LoginPage: FC = () => {
  const { register, handleSubmit, errors: formErrors } = useForm<FormValues>({
    resolver: yupResolver(schema),
  })
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
        <Link to="/">
          <Logo />
        </Link>
      </LogoContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <ParagraphS>Don't have an account?</ParagraphS>
        <StyledLink
          to="/sign-up"
          style={{ marginTop: '10px', marginBottom: '10px' }}
        >
          Sign up for free
        </StyledLink>
        {errors?.length > 0 &&
          errors.map((error) => <ErrorMessage>{error.message}</ErrorMessage>)}
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
          {loading ? 'Signing in...' : 'Sign in'}
        </StyledButton>
        <StyledLink to="/forgot-password" style={{ marginTop: '20px' }}>
          Forgot password?
        </StyledLink>
      </StyledForm>
    </StyledContainer>
  )
}

export default LoginPage

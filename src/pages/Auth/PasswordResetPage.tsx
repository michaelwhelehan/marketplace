import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import BaseContainer from '../../uiComponents/atoms/Container'
import Logo from '../../uiComponents/atoms/Logo'
import Button from '../../uiComponents/atoms/Button'
import TextField from '../../uiComponents/atoms/TextField'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { red } from '../../styles/colors'
import { ParagraphS } from '../../uiComponents/atoms/Paragraphs'
import { setAuthToken, useSetPassword } from '../../services'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'
import useUrlQueries from '../../hooks/useUrlQueries'

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

const schema = yup.object().shape({
  password1: yup
    .string()
    .min(2, 'Password is too short!')
    .required('Password is required'),
  password2: yup
    .string()
    .min(2, 'Please retype password')
    .required('Password confirmation is required')
    .oneOf([yup.ref('password1')], 'Password confirmation does not match'),
})

type FormValues = {
  password1: string
  password2: string
}

const PasswordResetPage: FC = () => {
  const { register, handleSubmit, errors: formErrors } = useForm<FormValues>({
    resolver: yupResolver(schema),
  })
  const history = useHistory()
  const { params } = useUrlQueries({
    allowedParams: ['email', 'token'],
  })
  const [setPassword, { data, error: graphqlErrors }] = useSetPassword()
  const [loading, setLoading] = React.useState(false)
  const [errors, setErrors] = React.useState(null)

  useEffect(() => {
    if (data?.setPassword?.token) {
      setAuthToken(data.setPassword.token)
      history.push('/')
    } else if (graphqlErrors?.extraInfo?.userInputErrors) {
      setErrors(graphqlErrors.extraInfo.userInputErrors)
    }
  }, [data, graphqlErrors])

  const onSubmit = async ({ password1 }) => {
    setLoading(true)
    await setPassword({
      email: params.email,
      password: password1,
      token: params.token,
    })
    setLoading(false)
  }

  return (
    <StyledContainer>
      <LogoContainer>
        <Link to="/">
          <Logo />
        </Link>
      </LogoContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <ParagraphS>Reset your password</ParagraphS>
        {errors?.length > 0 &&
          errors.map((error) => <ErrorMessage>{error.message}</ErrorMessage>)}
        <StyledTextField
          name="password1"
          type="password"
          ref={register()}
          fullWidth
          placeholder="Password"
          hasError={Boolean(formErrors.password1)}
        />
        <StyledTextField
          name="password2"
          type="password"
          ref={register()}
          fullWidth
          placeholder="Password Confirmation"
          hasError={Boolean(formErrors.password2)}
        />
        <StyledButton large fullWidth disabled={loading}>
          {loading ? 'Setting...' : 'Set new password'}
        </StyledButton>
      </StyledForm>
    </StyledContainer>
  )
}

export default PasswordResetPage

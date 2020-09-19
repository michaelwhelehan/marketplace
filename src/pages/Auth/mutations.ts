import { gql, useMutation } from '@apollo/client'
import { useAlert } from 'react-alert'

import {
  RegisterAccount,
  RegisterAccountVariables,
} from './gqlTypes/RegisterAccount'

import {
  ResetPasswordRequest,
  ResetPasswordRequestVariables,
} from './gqlTypes/ResetPasswordRequest'

const accountRegisterMutation = gql`
  mutation RegisterAccount(
    $email: String!
    $password: String!
    $redirectUrl: String!
  ) {
    accountRegister(
      input: { email: $email, password: $password, redirectUrl: $redirectUrl }
    ) {
      errors {
        field
        message
      }
      requiresConfirmation
    }
  }
`

const passwordResetRequestMutation = gql`
  mutation ResetPasswordRequest($email: String!, $redirectUrl: String!) {
    requestPasswordReset(email: $email, redirectUrl: $redirectUrl) {
      errors {
        field
        message
      }
    }
  }
`

export const useAccountRegisterMutation = () => {
  const alert = useAlert()
  const [registerAccount] = useMutation<
    RegisterAccount,
    RegisterAccountVariables
  >(accountRegisterMutation, {
    onCompleted: (data) => {
      alert.show(
        'Account registration successful, you are now being logged in.',
        {
          type: 'success',
        },
      )
    },
  })
  return registerAccount
}

export const usePasswordResetRequestMutation = () => {
  const alert = useAlert()
  const [requestPasswordReset] = useMutation<
    ResetPasswordRequest,
    ResetPasswordRequestVariables
  >(passwordResetRequestMutation, {
    onCompleted: (data) => {
      alert.show('Password reset confirmation link sent to your email.', {
        type: 'success',
      })
    },
  })
  return requestPasswordReset
}

import { gql } from '@apollo/client'

import { userFragment } from '../../pages/Dashboard/Profile/queries'
import { userFragment as basicUserFragment } from '../fragments/auth'
import { accountErrorFragment } from '../fragments/errors'

export const changeUserPassword = gql`
  ${accountErrorFragment}
  mutation PasswordChange($newPassword: String!, $oldPassword: String!) {
    passwordChange(newPassword: $newPassword, oldPassword: $oldPassword) {
      errors: accountErrors {
        ...AccountError
      }
    }
  }
`

export const accountUpdate = gql`
  ${userFragment}
  ${accountErrorFragment}
  mutation AccountUpdate($input: AccountInput!) {
    accountUpdate(input: $input) {
      errors: accountErrors {
        ...AccountError
      }
      user {
        ...UserDetails
      }
    }
  }
`

export const setPassword = gql`
  ${basicUserFragment}
  ${accountErrorFragment}
  mutation SetPassword($token: String!, $email: String!, $password: String!) {
    setPassword(token: $token, email: $email, password: $password) {
      errors: accountErrors {
        ...AccountError
      }
      token
      user {
        ...User
      }
      accountErrors {
        field
        message
        code
      }
    }
  }
`

import { gql, useMutation, MutationHookOptions } from '@apollo/client'

import {
  RegisterAccount,
  RegisterAccountVariables,
} from './gqlTypes/RegisterAccount'

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

export const useAccountRegisterMutation = (
  options?: MutationHookOptions<any, any>,
) => {
  const [registerAccount] = useMutation<
    RegisterAccount,
    RegisterAccountVariables
  >(accountRegisterMutation, options)
  return registerAccount
}

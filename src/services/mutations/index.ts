import {
  ApolloClient,
  MutationOptions as ApolloMutationOptions,
} from '@apollo/client'

import * as Auth from './auth'
import * as User from './user'

import { SetPassword, SetPasswordVariables } from './gqlTypes/SetPassword'

import { TokenAuth, TokenAuthVariables } from './gqlTypes/TokenAuth'

import {
  PasswordChange,
  PasswordChangeVariables,
} from './gqlTypes/PasswordChange'

import { AccountUpdate, AccountUpdateVariables } from './gqlTypes/AccountUpdate'

export type MutationOptions<TData, TVariables> = Omit<
  ApolloMutationOptions<TData, TVariables>,
  'mutation'
>

// TODO: Add ability to pass custom fragments to mutations
export const MUTATIONS = {
  AccountUpdate: <TCacheShape>(
    client: ApolloClient<TCacheShape>,
    options: MutationOptions<AccountUpdate, AccountUpdateVariables>,
  ) =>
    client.mutate({
      mutation: User.accountUpdate,
      ...options,
    }),
  PasswordChange: <TCacheShape>(
    client: ApolloClient<TCacheShape>,
    options: MutationOptions<PasswordChange, PasswordChangeVariables>,
  ) =>
    client.mutate({
      mutation: User.changeUserPassword,
      ...options,
    }),
  SetPassword: <TCacheShape>(
    client: ApolloClient<TCacheShape>,
    options: MutationOptions<SetPassword, SetPasswordVariables>,
  ) =>
    client.mutate({
      mutation: User.setPassword,
      ...options,
    }),
  TokenAuth: <TCacheShape>(
    client: ApolloClient<TCacheShape>,
    options: MutationOptions<TokenAuth, TokenAuthVariables>,
  ) =>
    client.mutate({
      mutation: Auth.tokenAuthMutation,
      ...options,
    }),
}

export type MUTATIONS = typeof MUTATIONS

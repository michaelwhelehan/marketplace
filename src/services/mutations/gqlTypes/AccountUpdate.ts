/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AccountInput, AccountErrorCode } from './../../gqlTypes/globalTypes'

// ====================================================
// GraphQL mutation operation: AccountUpdate
// ====================================================

export interface AccountUpdate_accountUpdate_errors {
  __typename: 'AccountError'
  /**
   * The error code.
   */
  code: AccountErrorCode
  /**
   * Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.
   */
  field: string | null
  /**
   * The error message.
   */
  message: string | null
}

export interface AccountUpdate_accountUpdate_user {
  __typename: 'User'
  /**
   * The ID of the object.
   */
  id: string
  email: string
  firstName: string
  lastName: string
  isStaff: boolean
}

export interface AccountUpdate_accountUpdate {
  __typename: 'AccountUpdate'
  errors: AccountUpdate_accountUpdate_errors[]
  user: AccountUpdate_accountUpdate_user | null
}

export interface AccountUpdate {
  /**
   * Updates the account of the logged-in user.
   */
  accountUpdate: AccountUpdate_accountUpdate | null
}

export interface AccountUpdateVariables {
  input: AccountInput
}
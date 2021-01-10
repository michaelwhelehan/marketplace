/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AccountInput, AccountErrorCode } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: AccountNotificationsUpdate
// ====================================================

export interface AccountNotificationsUpdate_accountUpdateNotifications_errors {
  __typename: "AccountError";
  /**
   * The error code.
   */
  code: AccountErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error message.
   */
  message: string | null;
}

export interface AccountNotificationsUpdate_accountUpdateNotifications_user {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  lastNotificationsSeenTimestamp: any | null;
}

export interface AccountNotificationsUpdate_accountUpdateNotifications {
  __typename: "AccountUpdate";
  errors: AccountNotificationsUpdate_accountUpdateNotifications_errors[];
  user: AccountNotificationsUpdate_accountUpdateNotifications_user | null;
}

export interface AccountNotificationsUpdate {
  /**
   * Updates the account of the logged-in user.
   */
  accountUpdateNotifications: AccountNotificationsUpdate_accountUpdateNotifications | null;
}

export interface AccountNotificationsUpdateVariables {
  input: AccountInput;
}

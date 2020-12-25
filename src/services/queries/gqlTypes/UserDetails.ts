/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserDetails
// ====================================================

export interface UserDetails_me {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  avatarUrl: string | null;
}

export interface UserDetails {
  /**
   * Return the currently authenticated user.
   */
  me: UserDetails_me | null;
}

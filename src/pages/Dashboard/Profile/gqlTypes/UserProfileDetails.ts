/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserProfileDetails
// ====================================================

export interface UserProfileDetails_me {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatarUrl: string | null;
}

export interface UserProfileDetails {
  /**
   * Return the currently authenticated user.
   */
  me: UserProfileDetails_me | null;
}

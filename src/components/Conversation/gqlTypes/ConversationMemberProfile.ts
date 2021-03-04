/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ConversationMemberProfile
// ====================================================

export interface ConversationMemberProfile_publicUser {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  avatarUrl: string | null;
  jobTitle: string | null;
}

export interface ConversationMemberProfile {
  /**
   * Look up a public user profile by username.
   */
  publicUser: ConversationMemberProfile_publicUser | null;
}

export interface ConversationMemberProfileVariables {
  username: string;
}

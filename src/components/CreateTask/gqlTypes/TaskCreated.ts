/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TaskCreated
// ====================================================

export interface TaskCreated_owner {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  avatarUrl: string | null;
}

export interface TaskCreated {
  __typename: "Task";
  /**
   * The ID of the object.
   */
  id: string;
  owner: TaskCreated_owner | null;
  title: string;
  slug: string;
  details: string;
  /**
   * ID of the conversation linked to this task.
   */
  conversationId: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserTask
// ====================================================

export interface UserTask_owner {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  avatarUrl: string | null;
}

export interface UserTask {
  __typename: "Task";
  /**
   * The ID of the object.
   */
  id: string;
  owner: UserTask_owner | null;
  created: any;
  title: string;
  slug: string;
  dueDate: any | null;
  /**
   * Number of offers the task has made on it.
   */
  numOffers: number | null;
}

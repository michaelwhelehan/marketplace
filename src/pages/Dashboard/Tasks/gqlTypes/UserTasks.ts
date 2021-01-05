/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserTaskFilterInput } from "./../../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL query operation: UserTasks
// ====================================================

export interface UserTasks_me_tasks_edges_node_owner {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  avatarUrl: string | null;
}

export interface UserTasks_me_tasks_edges_node {
  __typename: "Task";
  /**
   * The ID of the object.
   */
  id: string;
  owner: UserTasks_me_tasks_edges_node_owner | null;
  created: any;
  title: string;
  slug: string;
  dueDate: any | null;
  /**
   * Number of offers the task has made on it.
   */
  numOffers: number | null;
}

export interface UserTasks_me_tasks_edges {
  __typename: "TaskCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: UserTasks_me_tasks_edges_node;
}

export interface UserTasks_me_tasks_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean;
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
}

export interface UserTasks_me_tasks {
  __typename: "TaskCountableConnection";
  edges: UserTasks_me_tasks_edges[];
  /**
   * Pagination data for this connection.
   */
  pageInfo: UserTasks_me_tasks_pageInfo;
}

export interface UserTasks_me {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * List of the user's tasks.
   */
  tasks: UserTasks_me_tasks | null;
}

export interface UserTasks {
  /**
   * Return the currently authenticated user.
   */
  me: UserTasks_me | null;
}

export interface UserTasksVariables {
  after?: string | null;
  pageSize?: number | null;
  filter?: UserTaskFilterInput | null;
}

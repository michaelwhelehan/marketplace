/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TaskFilterInput, TaskStatus, TaskLocationType } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL query operation: Tasks
// ====================================================

export interface Tasks_tasks_edges_node_owner {
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

export interface Tasks_tasks_edges_node_budget {
  __typename: "Money";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money.
   */
  amount: number;
}

export interface Tasks_tasks_edges_node {
  __typename: "Task";
  /**
   * The ID of the object.
   */
  id: string;
  owner: Tasks_tasks_edges_node_owner | null;
  title: string;
  slug: string;
  taskStatus: TaskStatus | null;
  budget: Tasks_tasks_edges_node_budget | null;
  details: string;
  dueDate: any | null;
  locationType: TaskLocationType | null;
  location: string | null;
  locationLatitude: string | null;
  locationLongitude: string | null;
  /**
   * ID of the conversation linked to this task.
   */
  conversationId: string | null;
  /**
   * Number of offers the task has made on it.
   */
  numOffers: number | null;
}

export interface Tasks_tasks_edges {
  __typename: "TaskCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: Tasks_tasks_edges_node;
}

export interface Tasks_tasks_pageInfo {
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

export interface Tasks_tasks {
  __typename: "TaskCountableConnection";
  edges: Tasks_tasks_edges[];
  /**
   * Pagination data for this connection.
   */
  pageInfo: Tasks_tasks_pageInfo;
}

export interface Tasks {
  /**
   * List of the marketplace's tasks.
   */
  tasks: Tasks_tasks | null;
}

export interface TasksVariables {
  after?: string | null;
  pageSize?: number | null;
  filter?: TaskFilterInput | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TaskLocationType } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL fragment: TaskEdges
// ====================================================

export interface TaskEdges_edges_node_owner {
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

export interface TaskEdges_edges_node_budget {
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

export interface TaskEdges_edges_node {
  __typename: "Task";
  /**
   * The ID of the object.
   */
  id: string;
  owner: TaskEdges_edges_node_owner | null;
  title: string;
  slug: string;
  budget: TaskEdges_edges_node_budget | null;
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

export interface TaskEdges_edges {
  __typename: "TaskCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: TaskEdges_edges_node;
}

export interface TaskEdges {
  __typename: "TaskCountableConnection";
  edges: TaskEdges_edges[];
}

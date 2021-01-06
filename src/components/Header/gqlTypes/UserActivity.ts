/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OfferStatus, TaskStatus, TaskLocationType, ConversationMessageMessageType } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL query operation: UserActivity
// ====================================================

export interface UserActivity_me_activity_edges_node_actorObject {
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

export interface UserActivity_me_activity_edges_node_actionObject_Offer_createdBy {
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

export interface UserActivity_me_activity_edges_node_actionObject_Offer_amount {
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

export interface UserActivity_me_activity_edges_node_actionObject_Offer {
  __typename: "Offer";
  /**
   * The ID of the object.
   */
  id: string;
  created: any;
  offerStatus: OfferStatus | null;
  createdBy: UserActivity_me_activity_edges_node_actionObject_Offer_createdBy;
  message: string | null;
  amount: UserActivity_me_activity_edges_node_actionObject_Offer_amount | null;
}

export interface UserActivity_me_activity_edges_node_actionObject_Task_owner {
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

export interface UserActivity_me_activity_edges_node_actionObject_Task_budget {
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

export interface UserActivity_me_activity_edges_node_actionObject_Task {
  __typename: "Task";
  /**
   * The ID of the object.
   */
  id: string;
  owner: UserActivity_me_activity_edges_node_actionObject_Task_owner | null;
  title: string;
  slug: string;
  taskStatus: TaskStatus | null;
  budget: UserActivity_me_activity_edges_node_actionObject_Task_budget | null;
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

export interface UserActivity_me_activity_edges_node_actionObject_ConversationMessage_sentBy {
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

export interface UserActivity_me_activity_edges_node_actionObject_ConversationMessage {
  __typename: "ConversationMessage";
  /**
   * The ID of the object.
   */
  id: string;
  sentBy: UserActivity_me_activity_edges_node_actionObject_ConversationMessage_sentBy;
  body: string | null;
  url: string | null;
  created: any;
  modified: any;
  messageType: ConversationMessageMessageType;
}

export type UserActivity_me_activity_edges_node_actionObject = UserActivity_me_activity_edges_node_actionObject_Offer | UserActivity_me_activity_edges_node_actionObject_Task | UserActivity_me_activity_edges_node_actionObject_ConversationMessage;

export interface UserActivity_me_activity_edges_node_targetObject_Offer_createdBy {
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

export interface UserActivity_me_activity_edges_node_targetObject_Offer_amount {
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

export interface UserActivity_me_activity_edges_node_targetObject_Offer {
  __typename: "Offer";
  /**
   * The ID of the object.
   */
  id: string;
  created: any;
  offerStatus: OfferStatus | null;
  createdBy: UserActivity_me_activity_edges_node_targetObject_Offer_createdBy;
  message: string | null;
  amount: UserActivity_me_activity_edges_node_targetObject_Offer_amount | null;
}

export interface UserActivity_me_activity_edges_node_targetObject_Task_owner {
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

export interface UserActivity_me_activity_edges_node_targetObject_Task_budget {
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

export interface UserActivity_me_activity_edges_node_targetObject_Task {
  __typename: "Task";
  /**
   * The ID of the object.
   */
  id: string;
  owner: UserActivity_me_activity_edges_node_targetObject_Task_owner | null;
  title: string;
  slug: string;
  taskStatus: TaskStatus | null;
  budget: UserActivity_me_activity_edges_node_targetObject_Task_budget | null;
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

export type UserActivity_me_activity_edges_node_targetObject = UserActivity_me_activity_edges_node_targetObject_Offer | UserActivity_me_activity_edges_node_targetObject_Task;

export interface UserActivity_me_activity_edges_node {
  __typename: "Activity";
  /**
   * The ID of the object.
   */
  id: string;
  verb: string;
  timestamp: any;
  /**
   * User has read the activity.
   */
  read: boolean | null;
  /**
   * Person who performed the activity.
   */
  actorObject: UserActivity_me_activity_edges_node_actorObject | null;
  /**
   * Action object involved in the activity.
   */
  actionObject: UserActivity_me_activity_edges_node_actionObject | null;
  /**
   * Target object involved in the activity.
   */
  targetObject: UserActivity_me_activity_edges_node_targetObject | null;
}

export interface UserActivity_me_activity_edges {
  __typename: "ActivityCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: UserActivity_me_activity_edges_node;
}

export interface UserActivity_me_activity_pageInfo {
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

export interface UserActivity_me_activity {
  __typename: "ActivityCountableConnection";
  edges: UserActivity_me_activity_edges[];
  /**
   * Pagination data for this connection.
   */
  pageInfo: UserActivity_me_activity_pageInfo;
}

export interface UserActivity_me {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * List of the user's activity.
   */
  activity: UserActivity_me_activity | null;
}

export interface UserActivity {
  /**
   * Return the currently authenticated user.
   */
  me: UserActivity_me | null;
}

export interface UserActivityVariables {
  after?: string | null;
  pageSize?: number | null;
}

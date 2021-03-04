/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OfferStatus, TaskStatus, TaskLocationType, ConversationMessageMessageType } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL fragment: Activity
// ====================================================

export interface Activity_actorObject {
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

export interface Activity_actionObject_Offer_createdBy {
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

export interface Activity_actionObject_Offer_amount {
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

export interface Activity_actionObject_Offer {
  __typename: "Offer";
  /**
   * The ID of the object.
   */
  id: string;
  created: any;
  offerStatus: OfferStatus | null;
  createdBy: Activity_actionObject_Offer_createdBy;
  message: string | null;
  amount: Activity_actionObject_Offer_amount | null;
}

export interface Activity_actionObject_Task_owner {
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

export interface Activity_actionObject_Task_budget {
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

export interface Activity_actionObject_Task {
  __typename: "Task";
  /**
   * The ID of the object.
   */
  id: string;
  owner: Activity_actionObject_Task_owner | null;
  title: string;
  slug: string;
  taskStatus: TaskStatus | null;
  budget: Activity_actionObject_Task_budget | null;
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

export interface Activity_actionObject_ConversationMessage_sentBy {
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

export interface Activity_actionObject_ConversationMessage {
  __typename: "ConversationMessage";
  /**
   * The ID of the object.
   */
  id: string;
  sentBy: Activity_actionObject_ConversationMessage_sentBy;
  rawBody: any | null;
  url: string | null;
  created: any;
  modified: any;
  messageType: ConversationMessageMessageType;
}

export type Activity_actionObject = Activity_actionObject_Offer | Activity_actionObject_Task | Activity_actionObject_ConversationMessage;

export interface Activity_targetObject_Offer_createdBy {
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

export interface Activity_targetObject_Offer_amount {
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

export interface Activity_targetObject_Offer {
  __typename: "Offer";
  /**
   * The ID of the object.
   */
  id: string;
  created: any;
  offerStatus: OfferStatus | null;
  createdBy: Activity_targetObject_Offer_createdBy;
  message: string | null;
  amount: Activity_targetObject_Offer_amount | null;
}

export interface Activity_targetObject_Task_owner {
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

export interface Activity_targetObject_Task_budget {
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

export interface Activity_targetObject_Task {
  __typename: "Task";
  /**
   * The ID of the object.
   */
  id: string;
  owner: Activity_targetObject_Task_owner | null;
  title: string;
  slug: string;
  taskStatus: TaskStatus | null;
  budget: Activity_targetObject_Task_budget | null;
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

export type Activity_targetObject = Activity_targetObject_Offer | Activity_targetObject_Task;

export interface Activity {
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
  actorObject: Activity_actorObject | null;
  /**
   * Action object involved in the activity.
   */
  actionObject: Activity_actionObject | null;
  /**
   * Target object involved in the activity.
   */
  targetObject: Activity_targetObject | null;
}

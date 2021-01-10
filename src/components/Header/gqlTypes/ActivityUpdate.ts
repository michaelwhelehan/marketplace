/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ActivityInput, OfferStatus, TaskStatus, TaskLocationType, ConversationMessageMessageType } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: ActivityUpdate
// ====================================================

export interface ActivityUpdate_activityUpdate_action_actorObject {
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

export interface ActivityUpdate_activityUpdate_action_actionObject_Offer_createdBy {
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

export interface ActivityUpdate_activityUpdate_action_actionObject_Offer_amount {
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

export interface ActivityUpdate_activityUpdate_action_actionObject_Offer {
  __typename: "Offer";
  /**
   * The ID of the object.
   */
  id: string;
  created: any;
  offerStatus: OfferStatus | null;
  createdBy: ActivityUpdate_activityUpdate_action_actionObject_Offer_createdBy;
  message: string | null;
  amount: ActivityUpdate_activityUpdate_action_actionObject_Offer_amount | null;
}

export interface ActivityUpdate_activityUpdate_action_actionObject_Task_owner {
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

export interface ActivityUpdate_activityUpdate_action_actionObject_Task_budget {
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

export interface ActivityUpdate_activityUpdate_action_actionObject_Task {
  __typename: "Task";
  /**
   * The ID of the object.
   */
  id: string;
  owner: ActivityUpdate_activityUpdate_action_actionObject_Task_owner | null;
  title: string;
  slug: string;
  taskStatus: TaskStatus | null;
  budget: ActivityUpdate_activityUpdate_action_actionObject_Task_budget | null;
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

export interface ActivityUpdate_activityUpdate_action_actionObject_ConversationMessage_sentBy {
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

export interface ActivityUpdate_activityUpdate_action_actionObject_ConversationMessage {
  __typename: "ConversationMessage";
  /**
   * The ID of the object.
   */
  id: string;
  sentBy: ActivityUpdate_activityUpdate_action_actionObject_ConversationMessage_sentBy;
  body: string | null;
  url: string | null;
  created: any;
  modified: any;
  messageType: ConversationMessageMessageType;
}

export type ActivityUpdate_activityUpdate_action_actionObject = ActivityUpdate_activityUpdate_action_actionObject_Offer | ActivityUpdate_activityUpdate_action_actionObject_Task | ActivityUpdate_activityUpdate_action_actionObject_ConversationMessage;

export interface ActivityUpdate_activityUpdate_action_targetObject_Offer_createdBy {
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

export interface ActivityUpdate_activityUpdate_action_targetObject_Offer_amount {
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

export interface ActivityUpdate_activityUpdate_action_targetObject_Offer {
  __typename: "Offer";
  /**
   * The ID of the object.
   */
  id: string;
  created: any;
  offerStatus: OfferStatus | null;
  createdBy: ActivityUpdate_activityUpdate_action_targetObject_Offer_createdBy;
  message: string | null;
  amount: ActivityUpdate_activityUpdate_action_targetObject_Offer_amount | null;
}

export interface ActivityUpdate_activityUpdate_action_targetObject_Task_owner {
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

export interface ActivityUpdate_activityUpdate_action_targetObject_Task_budget {
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

export interface ActivityUpdate_activityUpdate_action_targetObject_Task {
  __typename: "Task";
  /**
   * The ID of the object.
   */
  id: string;
  owner: ActivityUpdate_activityUpdate_action_targetObject_Task_owner | null;
  title: string;
  slug: string;
  taskStatus: TaskStatus | null;
  budget: ActivityUpdate_activityUpdate_action_targetObject_Task_budget | null;
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

export type ActivityUpdate_activityUpdate_action_targetObject = ActivityUpdate_activityUpdate_action_targetObject_Offer | ActivityUpdate_activityUpdate_action_targetObject_Task;

export interface ActivityUpdate_activityUpdate_action {
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
  actorObject: ActivityUpdate_activityUpdate_action_actorObject | null;
  /**
   * Action object involved in the activity.
   */
  actionObject: ActivityUpdate_activityUpdate_action_actionObject | null;
  /**
   * Target object involved in the activity.
   */
  targetObject: ActivityUpdate_activityUpdate_action_targetObject | null;
}

export interface ActivityUpdate_activityUpdate {
  __typename: "ActivityUpdate";
  action: ActivityUpdate_activityUpdate_action | null;
}

export interface ActivityUpdate {
  /**
   * Updates an activity.
   */
  activityUpdate: ActivityUpdate_activityUpdate | null;
}

export interface ActivityUpdateVariables {
  id: string;
  input: ActivityInput;
}

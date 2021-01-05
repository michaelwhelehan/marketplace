/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TaskStatus, TaskLocationType } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL fragment: EditTask
// ====================================================

export interface EditTask_task_owner {
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

export interface EditTask_task_budget {
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

export interface EditTask_task {
  __typename: "Task";
  /**
   * The ID of the object.
   */
  id: string;
  owner: EditTask_task_owner | null;
  title: string;
  slug: string;
  status: TaskStatus | null;
  budget: EditTask_task_budget | null;
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

export interface EditTask {
  __typename: "EditTaskPayload";
  /**
   * The task that was edited.
   */
  task: EditTask_task | null;
}

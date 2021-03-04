/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TaskStatus, TaskLocationType } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL query operation: Task
// ====================================================

export interface Task_task_owner {
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

export interface Task_task_budget {
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

export interface Task_task {
  __typename: "Task";
  /**
   * The ID of the object.
   */
  id: string;
  owner: Task_task_owner | null;
  title: string;
  slug: string;
  taskStatus: TaskStatus | null;
  budget: Task_task_budget | null;
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

export interface Task {
  /**
   * Look up a task by slug.
   */
  task: Task_task | null;
}

export interface TaskVariables {
  slug: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TaskStatus, TaskLocationType } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL subscription operation: TaskSubscription
// ====================================================

export interface TaskSubscription_taskSubscription_marketplaceTask_PublishTaskPayload_task_owner {
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

export interface TaskSubscription_taskSubscription_marketplaceTask_PublishTaskPayload_task_budget {
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

export interface TaskSubscription_taskSubscription_marketplaceTask_PublishTaskPayload_task {
  __typename: "Task";
  /**
   * The ID of the object.
   */
  id: string;
  owner: TaskSubscription_taskSubscription_marketplaceTask_PublishTaskPayload_task_owner | null;
  title: string;
  slug: string;
  taskStatus: TaskStatus | null;
  budget: TaskSubscription_taskSubscription_marketplaceTask_PublishTaskPayload_task_budget | null;
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

export interface TaskSubscription_taskSubscription_marketplaceTask_PublishTaskPayload {
  __typename: "PublishTaskPayload";
  /**
   * The task that was published.
   */
  task: TaskSubscription_taskSubscription_marketplaceTask_PublishTaskPayload_task | null;
}

export interface TaskSubscription_taskSubscription_marketplaceTask_EditTaskPayload_task_owner {
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

export interface TaskSubscription_taskSubscription_marketplaceTask_EditTaskPayload_task_budget {
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

export interface TaskSubscription_taskSubscription_marketplaceTask_EditTaskPayload_task {
  __typename: "Task";
  /**
   * The ID of the object.
   */
  id: string;
  owner: TaskSubscription_taskSubscription_marketplaceTask_EditTaskPayload_task_owner | null;
  title: string;
  slug: string;
  taskStatus: TaskStatus | null;
  budget: TaskSubscription_taskSubscription_marketplaceTask_EditTaskPayload_task_budget | null;
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

export interface TaskSubscription_taskSubscription_marketplaceTask_EditTaskPayload {
  __typename: "EditTaskPayload";
  /**
   * The task that was edited.
   */
  task: TaskSubscription_taskSubscription_marketplaceTask_EditTaskPayload_task | null;
}

export interface TaskSubscription_taskSubscription_marketplaceTask_DeleteTaskPayload_task {
  __typename: "Task";
  /**
   * The ID of the object.
   */
  id: string;
}

export interface TaskSubscription_taskSubscription_marketplaceTask_DeleteTaskPayload {
  __typename: "DeleteTaskPayload";
  /**
   * The task that was deleted.
   */
  task: TaskSubscription_taskSubscription_marketplaceTask_DeleteTaskPayload_task | null;
}

export type TaskSubscription_taskSubscription_marketplaceTask = TaskSubscription_taskSubscription_marketplaceTask_PublishTaskPayload | TaskSubscription_taskSubscription_marketplaceTask_EditTaskPayload | TaskSubscription_taskSubscription_marketplaceTask_DeleteTaskPayload;

export interface TaskSubscription_taskSubscription {
  __typename: "TaskSubscription";
  /**
   * When a conversation message is changed.
   */
  marketplaceTask: TaskSubscription_taskSubscription_marketplaceTask | null;
}

export interface TaskSubscription {
  taskSubscription: TaskSubscription_taskSubscription | null;
}

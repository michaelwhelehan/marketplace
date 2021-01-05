/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TaskInput, TaskLocationType, TaskErrorCode } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: TaskUpdate
// ====================================================

export interface TaskUpdate_taskUpdate_task {
  __typename: "Task";
  /**
   * The ID of the object.
   */
  id: string;
  title: string;
  slug: string;
  details: string;
  dueDate: any | null;
  locationType: TaskLocationType | null;
  location: string | null;
  locationLatitude: string | null;
  locationLongitude: string | null;
}

export interface TaskUpdate_taskUpdate_taskErrors {
  __typename: "TaskError";
  /**
   * The error message.
   */
  message: string | null;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error code.
   */
  code: TaskErrorCode;
}

export interface TaskUpdate_taskUpdate {
  __typename: "TaskUpdate";
  task: TaskUpdate_taskUpdate_task | null;
  taskErrors: TaskUpdate_taskUpdate_taskErrors[];
}

export interface TaskUpdate {
  /**
   * Updates an existing task.
   */
  taskUpdate: TaskUpdate_taskUpdate | null;
}

export interface TaskUpdateVariables {
  id: string;
  input: TaskInput;
}

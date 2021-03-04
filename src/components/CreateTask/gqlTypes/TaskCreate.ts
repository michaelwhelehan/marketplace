/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TaskInput, TaskErrorCode } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: TaskCreate
// ====================================================

export interface TaskCreate_taskCreate_task_owner {
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

export interface TaskCreate_taskCreate_task {
  __typename: "Task";
  /**
   * The ID of the object.
   */
  id: string;
  owner: TaskCreate_taskCreate_task_owner | null;
  title: string;
  slug: string;
  details: string;
  /**
   * ID of the conversation linked to this task.
   */
  conversationId: string | null;
}

export interface TaskCreate_taskCreate_taskErrors {
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

export interface TaskCreate_taskCreate {
  __typename: "TaskCreate";
  task: TaskCreate_taskCreate_task | null;
  taskErrors: TaskCreate_taskCreate_taskErrors[];
}

export interface TaskCreate {
  /**
   * Creates a new task.
   */
  taskCreate: TaskCreate_taskCreate | null;
}

export interface TaskCreateVariables {
  input: TaskInput;
}

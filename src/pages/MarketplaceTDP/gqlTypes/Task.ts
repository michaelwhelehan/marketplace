/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Task
// ====================================================

export interface Task_task_owner {
  __typename: "User";
  profilePictureUrl: string | null;
  name: string;
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
  budget: Task_task_budget | null;
  location: string | null;
  dueDate: any | null;
  details: string;
}

export interface Task {
  task: Task_task | null;
}

export interface TaskVariables {
  slug: string;
}

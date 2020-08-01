/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Task
// ====================================================

export interface Task_task_creator {
  __typename: "User";
  profilePictureUrl: string | null;
  name: string;
}

export interface Task_task_currency {
  __typename: "Currency";
  code: string;
  iso: string;
}

export interface Task_task {
  __typename: "Task";
  id: string;
  creator: Task_task_creator;
  title: string;
  slug: string;
  budget: number;
  currency: Task_task_currency;
  location: string;
  dueDate: any;
  details: string | null;
  numOffers: number;
}

export interface Task {
  task: Task_task | null;
}

export interface TaskVariables {
  slug: string;
}

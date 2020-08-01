/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Tasks
// ====================================================

export interface Tasks_taskFeed_tasks_creator {
  __typename: "User";
  profilePictureUrl: string | null;
  name: string;
}

export interface Tasks_taskFeed_tasks_currency {
  __typename: "Currency";
  code: string;
  iso: string;
}

export interface Tasks_taskFeed_tasks {
  __typename: "Task";
  id: string;
  creator: Tasks_taskFeed_tasks_creator;
  title: string;
  slug: string;
  budget: number;
  currency: Tasks_taskFeed_tasks_currency;
  location: string;
  dueDate: any;
  details: string | null;
  numOffers: number;
}

export interface Tasks_taskFeed {
  __typename: "TaskFeed";
  cursor: string;
  tasks: (Tasks_taskFeed_tasks | null)[];
}

export interface Tasks {
  taskFeed: Tasks_taskFeed | null;
}

export interface TasksVariables {
  cursor?: string | null;
  loadAmount?: number | null;
}

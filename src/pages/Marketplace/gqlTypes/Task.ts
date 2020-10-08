/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TaskLocationType } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL fragment: Task
// ====================================================

export interface Task_owner {
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

export interface Task_budget {
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

export interface Task {
  __typename: "Task";
  /**
   * The ID of the object.
   */
  id: string;
  owner: Task_owner | null;
  title: string;
  slug: string;
  budget: Task_budget | null;
  details: string;
  dueDate: any | null;
  locationType: TaskLocationType | null;
  location: string | null;
  locationLatitude: string | null;
  locationLongitude: string | null;
}
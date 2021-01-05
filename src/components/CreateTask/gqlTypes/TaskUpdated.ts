/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TaskLocationType } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL fragment: TaskUpdated
// ====================================================

export interface TaskUpdated {
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

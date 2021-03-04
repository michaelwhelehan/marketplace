/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ActivityInput } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: ActivityUpdate
// ====================================================

export interface ActivityUpdate_activityUpdate_action {
  __typename: "Activity";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * User has read the activity.
   */
  read: boolean | null;
}

export interface ActivityUpdate_activityUpdate {
  __typename: "ActivityUpdate";
  action: ActivityUpdate_activityUpdate_action | null;
}

export interface ActivityUpdate {
  /**
   * Updates an activity.
   */
  activityUpdate: ActivityUpdate_activityUpdate | null;
}

export interface ActivityUpdateVariables {
  id: string;
  input: ActivityInput;
}

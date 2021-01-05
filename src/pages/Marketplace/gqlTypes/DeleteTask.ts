/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: DeleteTask
// ====================================================

export interface DeleteTask_task {
  __typename: "Task";
  /**
   * The ID of the object.
   */
  id: string;
}

export interface DeleteTask {
  __typename: "DeleteTaskPayload";
  /**
   * The task that was deleted.
   */
  task: DeleteTask_task | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: DeleteConversationMessage
// ====================================================

export interface DeleteConversationMessage_message {
  __typename: "ConversationMessage";
  /**
   * The ID of the object.
   */
  id: string;
}

export interface DeleteConversationMessage {
  __typename: "DeleteConversationMessagePayload";
  /**
   * The conversation message that was deleted.
   */
  message: DeleteConversationMessage_message | null;
}

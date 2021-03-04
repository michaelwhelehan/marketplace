/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: EditConversationMessage
// ====================================================

export interface EditConversationMessage_message {
  __typename: "ConversationMessage";
  /**
   * The ID of the object.
   */
  id: string;
  modified: any;
  rawBody: any | null;
}

export interface EditConversationMessage {
  __typename: "EditConversationMessagePayload";
  /**
   * The conversation message that was edited.
   */
  message: EditConversationMessage_message | null;
}

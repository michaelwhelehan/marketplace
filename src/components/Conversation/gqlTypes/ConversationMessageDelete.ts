/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ConversationMessageDelete
// ====================================================

export interface ConversationMessageDelete_conversationMessageDelete_conversationMessage {
  __typename: "ConversationMessage";
  /**
   * The ID of the object.
   */
  id: string;
}

export interface ConversationMessageDelete_conversationMessageDelete {
  __typename: "ConversationMessageDelete";
  conversationMessage: ConversationMessageDelete_conversationMessageDelete_conversationMessage | null;
}

export interface ConversationMessageDelete {
  /**
   * Deletes a conversation message.
   */
  conversationMessageDelete: ConversationMessageDelete_conversationMessageDelete | null;
}

export interface ConversationMessageDeleteVariables {
  id: string;
}

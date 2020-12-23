/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ConversationMessageMessageType } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL fragment: EditConversationMessage
// ====================================================

export interface EditConversationMessage_conversationMessage {
  __typename: "ConversationMessage";
  /**
   * The ID of the object.
   */
  id: string;
  modified: any;
  body: string | null;
  url: string | null;
  messageType: ConversationMessageMessageType;
  isActive: boolean;
}

export interface EditConversationMessage {
  __typename: "EditConversationMessagePayload";
  /**
   * The conversation message that was edited.
   */
  conversationMessage: EditConversationMessage_conversationMessage | null;
}

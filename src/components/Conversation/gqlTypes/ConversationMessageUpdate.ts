/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ConversationMessageMessageType } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: ConversationMessageUpdate
// ====================================================

export interface ConversationMessageUpdate_conversationMessageUpdate_conversationMessage_sentBy {
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

export interface ConversationMessageUpdate_conversationMessageUpdate_conversationMessage {
  __typename: "ConversationMessage";
  /**
   * The ID of the object.
   */
  id: string;
  sentBy: ConversationMessageUpdate_conversationMessageUpdate_conversationMessage_sentBy;
  body: string | null;
  url: string | null;
  created: any;
  modified: any;
  messageType: ConversationMessageMessageType;
}

export interface ConversationMessageUpdate_conversationMessageUpdate {
  __typename: "ConversationMessageUpdate";
  conversationMessage: ConversationMessageUpdate_conversationMessageUpdate_conversationMessage | null;
}

export interface ConversationMessageUpdate {
  /**
   * Updates an existing offer.
   */
  conversationMessageUpdate: ConversationMessageUpdate_conversationMessageUpdate | null;
}

export interface ConversationMessageUpdateVariables {
  messageId: string;
  body: string;
}

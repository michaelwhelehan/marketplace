/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ConversationMessageMessageType } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: ConversationMessageCreate
// ====================================================

export interface ConversationMessageCreate_conversationMessageCreate_conversationMessage_sentBy {
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

export interface ConversationMessageCreate_conversationMessageCreate_conversationMessage {
  __typename: "ConversationMessage";
  /**
   * The ID of the object.
   */
  id: string;
  sentBy: ConversationMessageCreate_conversationMessageCreate_conversationMessage_sentBy;
  body: string | null;
  url: string | null;
  created: any;
  modified: any;
  messageType: ConversationMessageMessageType;
}

export interface ConversationMessageCreate_conversationMessageCreate {
  __typename: "ConversationMessageCreate";
  conversationMessage: ConversationMessageCreate_conversationMessageCreate_conversationMessage | null;
}

export interface ConversationMessageCreate {
  /**
   * Creates a new conversation message.
   */
  conversationMessageCreate: ConversationMessageCreate_conversationMessageCreate | null;
}

export interface ConversationMessageCreateVariables {
  conversationId: string;
  messageType: string;
  body: string;
}

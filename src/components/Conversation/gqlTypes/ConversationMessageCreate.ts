/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ConversationMessageCreateInput, ConversationMessageMessageType } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: ConversationMessageCreate
// ====================================================

export interface ConversationMessageCreate_conversationMessageCreate_conversationMessage_sentBy {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  avatarUrl: string | null;
  jobTitle: string | null;
}

export interface ConversationMessageCreate_conversationMessageCreate_conversationMessage {
  __typename: "ConversationMessage";
  /**
   * The ID of the object.
   */
  id: string;
  sentBy: ConversationMessageCreate_conversationMessageCreate_conversationMessage_sentBy;
  rawBody: any | null;
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
  input: ConversationMessageCreateInput;
}

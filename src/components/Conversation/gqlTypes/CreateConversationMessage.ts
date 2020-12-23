/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ConversationMessageMessageType } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL fragment: CreateConversationMessage
// ====================================================

export interface CreateConversationMessage_conversationMessage_sentBy {
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

export interface CreateConversationMessage_conversationMessage {
  __typename: "ConversationMessage";
  /**
   * The ID of the object.
   */
  id: string;
  sentBy: CreateConversationMessage_conversationMessage_sentBy;
  body: string | null;
  url: string | null;
  created: any;
  modified: any;
  messageType: ConversationMessageMessageType;
}

export interface CreateConversationMessage {
  __typename: "CreateConversationMessagePayload";
  /**
   * The conversation message that was created.
   */
  conversationMessage: CreateConversationMessage_conversationMessage | null;
}

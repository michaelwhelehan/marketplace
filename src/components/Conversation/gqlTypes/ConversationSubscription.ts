/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ConversationMessageMessageType } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL subscription operation: ConversationSubscription
// ====================================================

export interface ConversationSubscription_conversationSubscription_conversationMessage_CreateConversationMessagePayload_message_sentBy {
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

export interface ConversationSubscription_conversationSubscription_conversationMessage_CreateConversationMessagePayload_message {
  __typename: "ConversationMessage";
  /**
   * The ID of the object.
   */
  id: string;
  sentBy: ConversationSubscription_conversationSubscription_conversationMessage_CreateConversationMessagePayload_message_sentBy;
  body: string | null;
  url: string | null;
  created: any;
  modified: any;
  messageType: ConversationMessageMessageType;
}

export interface ConversationSubscription_conversationSubscription_conversationMessage_CreateConversationMessagePayload {
  __typename: "CreateConversationMessagePayload";
  /**
   * The conversation message that was created.
   */
  message: ConversationSubscription_conversationSubscription_conversationMessage_CreateConversationMessagePayload_message | null;
}

export interface ConversationSubscription_conversationSubscription_conversationMessage_EditConversationMessagePayload_message {
  __typename: "ConversationMessage";
  /**
   * The ID of the object.
   */
  id: string;
  modified: any;
  body: string | null;
}

export interface ConversationSubscription_conversationSubscription_conversationMessage_EditConversationMessagePayload {
  __typename: "EditConversationMessagePayload";
  /**
   * The conversation message that was edited.
   */
  message: ConversationSubscription_conversationSubscription_conversationMessage_EditConversationMessagePayload_message | null;
}

export interface ConversationSubscription_conversationSubscription_conversationMessage_DeleteConversationMessagePayload_message {
  __typename: "ConversationMessage";
  /**
   * The ID of the object.
   */
  id: string;
}

export interface ConversationSubscription_conversationSubscription_conversationMessage_DeleteConversationMessagePayload {
  __typename: "DeleteConversationMessagePayload";
  /**
   * The conversation message that was deleted.
   */
  message: ConversationSubscription_conversationSubscription_conversationMessage_DeleteConversationMessagePayload_message | null;
}

export type ConversationSubscription_conversationSubscription_conversationMessage = ConversationSubscription_conversationSubscription_conversationMessage_CreateConversationMessagePayload | ConversationSubscription_conversationSubscription_conversationMessage_EditConversationMessagePayload | ConversationSubscription_conversationSubscription_conversationMessage_DeleteConversationMessagePayload;

export interface ConversationSubscription_conversationSubscription {
  __typename: "ConversationSubscription";
  /**
   * When a conversation message is changed.
   */
  conversationMessage: ConversationSubscription_conversationSubscription_conversationMessage | null;
}

export interface ConversationSubscription {
  conversationSubscription: ConversationSubscription_conversationSubscription | null;
}

export interface ConversationSubscriptionVariables {
  conversationId: string;
}

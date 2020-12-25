/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ConversationMessageMessageType } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL subscription operation: ConversationSubscription
// ====================================================

export interface ConversationSubscription_conversationSubscription_CreateConversationMessagePayload_conversationMessage_sentBy {
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

export interface ConversationSubscription_conversationSubscription_CreateConversationMessagePayload_conversationMessage {
  __typename: "ConversationMessage";
  /**
   * The ID of the object.
   */
  id: string;
  sentBy: ConversationSubscription_conversationSubscription_CreateConversationMessagePayload_conversationMessage_sentBy;
  body: string | null;
  url: string | null;
  created: any;
  modified: any;
  messageType: ConversationMessageMessageType;
}

export interface ConversationSubscription_conversationSubscription_CreateConversationMessagePayload {
  __typename: "CreateConversationMessagePayload";
  /**
   * The conversation message that was created.
   */
  conversationMessage: ConversationSubscription_conversationSubscription_CreateConversationMessagePayload_conversationMessage | null;
}

export interface ConversationSubscription_conversationSubscription_EditConversationMessagePayload_conversationMessage {
  __typename: "ConversationMessage";
  /**
   * The ID of the object.
   */
  id: string;
  modified: any;
  body: string | null;
}

export interface ConversationSubscription_conversationSubscription_EditConversationMessagePayload {
  __typename: "EditConversationMessagePayload";
  /**
   * The conversation message that was edited.
   */
  conversationMessage: ConversationSubscription_conversationSubscription_EditConversationMessagePayload_conversationMessage | null;
}

export interface ConversationSubscription_conversationSubscription_DeleteConversationMessagePayload_conversationMessage {
  __typename: "ConversationMessage";
  /**
   * The ID of the object.
   */
  id: string;
}

export interface ConversationSubscription_conversationSubscription_DeleteConversationMessagePayload {
  __typename: "DeleteConversationMessagePayload";
  /**
   * The conversation message that was deleted.
   */
  conversationMessage: ConversationSubscription_conversationSubscription_DeleteConversationMessagePayload_conversationMessage | null;
}

export type ConversationSubscription_conversationSubscription = ConversationSubscription_conversationSubscription_CreateConversationMessagePayload | ConversationSubscription_conversationSubscription_EditConversationMessagePayload | ConversationSubscription_conversationSubscription_DeleteConversationMessagePayload;

export interface ConversationSubscription {
  /**
   * When a conversation message is changed.
   */
  conversationSubscription: ConversationSubscription_conversationSubscription | null;
}

export interface ConversationSubscriptionVariables {
  conversationId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateConversationMessage
// ====================================================

export interface CreateConversationMessage_createConversationMessage_member {
  __typename: "User";
  name: string;
  profilePictureUrl: string | null;
  onlineStatus: string;
}

export interface CreateConversationMessage_createConversationMessage_message_ConversationMessageText {
  __typename: "ConversationMessageText";
  type: string;
  timestamp: any;
  text: string;
}

export interface CreateConversationMessage_createConversationMessage_message_ConversationMessageImage {
  __typename: "ConversationMessageImage";
  type: string;
  timestamp: any;
  url: string;
}

export interface CreateConversationMessage_createConversationMessage_message_ConversationMessageVideo {
  __typename: "ConversationMessageVideo";
  type: string;
  timestamp: any;
  url: string;
}

export type CreateConversationMessage_createConversationMessage_message = CreateConversationMessage_createConversationMessage_message_ConversationMessageText | CreateConversationMessage_createConversationMessage_message_ConversationMessageImage | CreateConversationMessage_createConversationMessage_message_ConversationMessageVideo;

export interface CreateConversationMessage_createConversationMessage {
  __typename: "ConversationFeedMessage";
  id: string;
  member: CreateConversationMessage_createConversationMessage_member;
  message: CreateConversationMessage_createConversationMessage_message;
}

export interface CreateConversationMessage {
  createConversationMessage: CreateConversationMessage_createConversationMessage | null;
}

export interface CreateConversationMessageVariables {
  conversationId: string;
  message: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ConversationMessages
// ====================================================

export interface ConversationMessages_conversation_conversationFeed_messages_member {
  __typename: "User";
  name: string;
  profilePictureUrl: string | null;
  onlineStatus: string;
}

export interface ConversationMessages_conversation_conversationFeed_messages_message_ConversationMessageText {
  __typename: "ConversationMessageText";
  type: string;
  timestamp: any;
  text: string;
}

export interface ConversationMessages_conversation_conversationFeed_messages_message_ConversationMessageImage {
  __typename: "ConversationMessageImage";
  type: string;
  timestamp: any;
  url: string;
}

export interface ConversationMessages_conversation_conversationFeed_messages_message_ConversationMessageVideo {
  __typename: "ConversationMessageVideo";
  type: string;
  timestamp: any;
  url: string;
}

export type ConversationMessages_conversation_conversationFeed_messages_message = ConversationMessages_conversation_conversationFeed_messages_message_ConversationMessageText | ConversationMessages_conversation_conversationFeed_messages_message_ConversationMessageImage | ConversationMessages_conversation_conversationFeed_messages_message_ConversationMessageVideo;

export interface ConversationMessages_conversation_conversationFeed_messages {
  __typename: "ConversationFeedMessage";
  id: string;
  member: ConversationMessages_conversation_conversationFeed_messages_member;
  message: ConversationMessages_conversation_conversationFeed_messages_message;
}

export interface ConversationMessages_conversation_conversationFeed {
  __typename: "ConversationFeed";
  cursor: string;
  messages: (ConversationMessages_conversation_conversationFeed_messages | null)[];
}

export interface ConversationMessages_conversation {
  __typename: "Conversation";
  id: string;
  conversationFeed: ConversationMessages_conversation_conversationFeed;
}

export interface ConversationMessages {
  conversation: ConversationMessages_conversation | null;
}

export interface ConversationMessagesVariables {
  conversationId: string;
  cursor?: string | null;
  loadAmount?: number | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ConversationList
// ====================================================

export interface ConversationList_conversationList_conversations_member {
  __typename: "User";
  profilePictureUrl: string | null;
  name: string;
  onlineStatus: string;
}

export interface ConversationList_conversationList_conversations_lastMessage {
  __typename: "ConversationLastMessage";
  lastMessageFromMe: boolean;
  lastMessageTimestamp: any;
  lastMessageText: string;
}

export interface ConversationList_conversationList_conversations {
  __typename: "Conversation";
  id: string;
  member: ConversationList_conversationList_conversations_member;
  lastMessage: ConversationList_conversationList_conversations_lastMessage;
}

export interface ConversationList_conversationList {
  __typename: "ConversationList";
  cursor: string;
  conversations: (ConversationList_conversationList_conversations | null)[];
}

export interface ConversationList {
  conversationList: ConversationList_conversationList | null;
}

export interface ConversationListVariables {
  cursor?: string | null;
  loadAmount?: number | null;
}

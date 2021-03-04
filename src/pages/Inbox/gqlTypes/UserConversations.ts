/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ConversationCategory, ConversationMessageMessageType } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL query operation: UserConversations
// ====================================================

export interface UserConversations_me_conversations_edges_node_members {
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

export interface UserConversations_me_conversations_edges_node_conversationFeed_edges_node_sentBy {
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

export interface UserConversations_me_conversations_edges_node_conversationFeed_edges_node {
  __typename: "ConversationMessage";
  /**
   * The ID of the object.
   */
  id: string;
  sentBy: UserConversations_me_conversations_edges_node_conversationFeed_edges_node_sentBy;
  rawBody: any | null;
  url: string | null;
  created: any;
  modified: any;
  messageType: ConversationMessageMessageType;
}

export interface UserConversations_me_conversations_edges_node_conversationFeed_edges {
  __typename: "ConversationMessageCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: UserConversations_me_conversations_edges_node_conversationFeed_edges_node;
}

export interface UserConversations_me_conversations_edges_node_conversationFeed {
  __typename: "ConversationMessageCountableConnection";
  edges: UserConversations_me_conversations_edges_node_conversationFeed_edges[];
}

export interface UserConversations_me_conversations_edges_node {
  __typename: "Conversation";
  /**
   * The ID of the object.
   */
  id: string;
  category: ConversationCategory;
  /**
   * List of conversation's members.
   */
  members: (UserConversations_me_conversations_edges_node_members | null)[] | null;
  /**
   * List of the conversation's messages.
   */
  conversationFeed: UserConversations_me_conversations_edges_node_conversationFeed | null;
}

export interface UserConversations_me_conversations_edges {
  __typename: "ConversationCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: UserConversations_me_conversations_edges_node;
}

export interface UserConversations_me_conversations_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean;
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
}

export interface UserConversations_me_conversations {
  __typename: "ConversationCountableConnection";
  edges: UserConversations_me_conversations_edges[];
  /**
   * Pagination data for this connection.
   */
  pageInfo: UserConversations_me_conversations_pageInfo;
}

export interface UserConversations_me {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * List of the user's conversations.
   */
  conversations: UserConversations_me_conversations | null;
}

export interface UserConversations {
  /**
   * Return the currently authenticated user.
   */
  me: UserConversations_me | null;
}

export interface UserConversationsVariables {
  after?: string | null;
  pageSize?: number | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ConversationCategory, ConversationMessageMessageType } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL query operation: Conversation
// ====================================================

export interface Conversation_conversation_task {
  __typename: "Task";
  /**
   * ID of the owner linked to this task.
   */
  ownerId: string | null;
}

export interface Conversation_conversation_conversationFeed_edges_node_sentBy {
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

export interface Conversation_conversation_conversationFeed_edges_node {
  __typename: "ConversationMessage";
  /**
   * The ID of the object.
   */
  id: string;
  sentBy: Conversation_conversation_conversationFeed_edges_node_sentBy;
  rawBody: any | null;
  url: string | null;
  created: any;
  modified: any;
  messageType: ConversationMessageMessageType;
}

export interface Conversation_conversation_conversationFeed_edges {
  __typename: "ConversationMessageCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: Conversation_conversation_conversationFeed_edges_node;
}

export interface Conversation_conversation_conversationFeed_pageInfo {
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

export interface Conversation_conversation_conversationFeed {
  __typename: "ConversationMessageCountableConnection";
  /**
   * A total count of items in the collection.
   */
  totalCount: number | null;
  edges: Conversation_conversation_conversationFeed_edges[];
  /**
   * Pagination data for this connection.
   */
  pageInfo: Conversation_conversation_conversationFeed_pageInfo;
}

export interface Conversation_conversation {
  __typename: "Conversation";
  /**
   * The ID of the object.
   */
  id: string;
  category: ConversationCategory;
  task: Conversation_conversation_task | null;
  /**
   * List of the conversation's messages.
   */
  conversationFeed: Conversation_conversation_conversationFeed | null;
}

export interface Conversation {
  /**
   * Look up a conversation by ID.
   */
  conversation: Conversation_conversation | null;
}

export interface ConversationVariables {
  category: string;
  id?: string | null;
  username?: string | null;
  after?: string | null;
  pageSize?: number | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ConversationCategory, ConversationMessageMessageType } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL fragment: UserConversation
// ====================================================

export interface UserConversation_members {
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

export interface UserConversation_conversationFeed_edges_node_sentBy {
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

export interface UserConversation_conversationFeed_edges_node {
  __typename: "ConversationMessage";
  /**
   * The ID of the object.
   */
  id: string;
  sentBy: UserConversation_conversationFeed_edges_node_sentBy;
  rawBody: any | null;
  url: string | null;
  created: any;
  modified: any;
  messageType: ConversationMessageMessageType;
}

export interface UserConversation_conversationFeed_edges {
  __typename: "ConversationMessageCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: UserConversation_conversationFeed_edges_node;
}

export interface UserConversation_conversationFeed {
  __typename: "ConversationMessageCountableConnection";
  edges: UserConversation_conversationFeed_edges[];
}

export interface UserConversation {
  __typename: "Conversation";
  /**
   * The ID of the object.
   */
  id: string;
  category: ConversationCategory;
  /**
   * List of conversation's members.
   */
  members: (UserConversation_members | null)[] | null;
  /**
   * List of the conversation's messages.
   */
  conversationFeed: UserConversation_conversationFeed | null;
}

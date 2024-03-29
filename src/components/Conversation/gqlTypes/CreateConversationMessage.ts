/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ConversationMessageMessageType } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL fragment: CreateConversationMessage
// ====================================================

export interface CreateConversationMessage_message_sentBy {
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

export interface CreateConversationMessage_message {
  __typename: "ConversationMessage";
  /**
   * The ID of the object.
   */
  id: string;
  sentBy: CreateConversationMessage_message_sentBy;
  rawBody: any | null;
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
  message: CreateConversationMessage_message | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ConversationMessageMessageType } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL fragment: ConversationMessage
// ====================================================

export interface ConversationMessage_sentBy {
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

export interface ConversationMessage {
  __typename: "ConversationMessage";
  /**
   * The ID of the object.
   */
  id: string;
  sentBy: ConversationMessage_sentBy;
  body: string | null;
  url: string | null;
  created: any;
  modified: any;
  messageType: ConversationMessageMessageType;
}

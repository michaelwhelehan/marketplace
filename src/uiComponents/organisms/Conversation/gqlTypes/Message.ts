/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Message
// ====================================================

export interface Message_member {
  __typename: "User";
  name: string;
  profilePictureUrl: string | null;
  onlineStatus: string;
}

export interface Message_message_ConversationMessageText {
  __typename: "ConversationMessageText";
  type: string;
  timestamp: any;
  text: string;
}

export interface Message_message_ConversationMessageImage {
  __typename: "ConversationMessageImage";
  type: string;
  timestamp: any;
  url: string;
}

export interface Message_message_ConversationMessageVideo {
  __typename: "ConversationMessageVideo";
  type: string;
  timestamp: any;
  url: string;
}

export type Message_message = Message_message_ConversationMessageText | Message_message_ConversationMessageImage | Message_message_ConversationMessageVideo;

export interface Message {
  __typename: "ConversationFeedMessage";
  id: string;
  member: Message_member;
  message: Message_message;
}

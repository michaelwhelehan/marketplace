/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MessageFeed
// ====================================================

export interface MessageFeed_messages_member {
  __typename: "User";
  name: string;
  profilePictureUrl: string | null;
  onlineStatus: string;
}

export interface MessageFeed_messages_message_ConversationMessageText {
  __typename: "ConversationMessageText";
  type: string;
  timestamp: any;
  text: string;
}

export interface MessageFeed_messages_message_ConversationMessageImage {
  __typename: "ConversationMessageImage";
  type: string;
  timestamp: any;
  url: string;
}

export interface MessageFeed_messages_message_ConversationMessageVideo {
  __typename: "ConversationMessageVideo";
  type: string;
  timestamp: any;
  url: string;
}

export type MessageFeed_messages_message = MessageFeed_messages_message_ConversationMessageText | MessageFeed_messages_message_ConversationMessageImage | MessageFeed_messages_message_ConversationMessageVideo;

export interface MessageFeed_messages {
  __typename: "ConversationFeedMessage";
  id: string;
  member: MessageFeed_messages_member;
  message: MessageFeed_messages_message;
}

export interface MessageFeed {
  __typename: "ConversationFeed";
  cursor: string;
  messages: (MessageFeed_messages | null)[];
}

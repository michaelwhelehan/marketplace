import { UserType } from './user'

export type ConversationPositionType = 'topDown' | 'bottomUp'

export type ConversationScrollType = 'infinite' | 'windowed'

export interface Message {
  type: 'text' | 'image' | 'video'
  timestamp: Date
}

export interface TextMessage extends Message {
  text: string
}

export interface MediaMessage extends Message {
  url: string
}

export type LastMessageType = {
  lastMessageText: string
  lastMessageFromMe: boolean
  lastMessageTimestamp: Date
}

export type ConversationType = {
  id: string
  member: UserType
  lastMessage: LastMessageType
}

export type ConversationMessageType = {
  id: string
  message: Message
  member: UserType
}

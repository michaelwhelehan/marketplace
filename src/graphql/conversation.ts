export const typeDef = `
  type Conversation {
    id: ID!
    conversationFeed: [ConversationFeedItem]
  }

  type ConversationFeedItem {
    id: ID!
    member: ConversationMember
    message: ConversationMessage
  }
`

import faker from 'faker'
import { gql } from '@apollo/client'
import profilePictureUrl from '../assets/images/profile.png'

function weightedRandom(prob) {
  let i,
    sum = 0,
    r = Math.random()
  for (i in prob) {
    sum += prob[i]
    if (r <= sum) return i
  }
}

function generateConversationItem() {
  const roll = parseInt(weightedRandom({ 0: 0.8, 1: 0.1, 2: 0.1 }), 10)
  const listItem: any = {
    id: faker.random.uuid(),
    member: {
      name: faker.name.findName(),
      profilePictureUrl: faker.image.avatar(),
      onlineStatus: 'online',
      __typename: 'ConversationMember',
    },
    __typename: 'ConversationFeedMessage',
  }
  if (roll === 0) {
    listItem.message = {
      type: 'text',
      text: faker.lorem.paragraph(5),
      timestamp: faker.date.past(),
      __typename: 'ConversationMessageText',
    }
  } else if (roll === 1) {
    listItem.message = {
      type: 'image',
      url: faker.image.imageUrl(),
      timestamp: faker.date.past(),
      __typename: 'ConversationMessageImage',
    }
  } else if (roll === 2) {
    listItem.message = {
      type: 'video',
      url: faker.image.imageUrl(),
      timestamp: faker.date.past(),
      __typename: 'ConversationMessageVideo',
    }
  }

  return listItem
}

function generateConversationItems(numToGenerate: number) {
  const list = []
  for (let i = 0; i < numToGenerate; i++) {
    const listItem = generateConversationItem()
    list.push(listItem)
  }
  return list
}

function generateConversationListItem() {
  const listItem: any = {
    id: faker.random.uuid(),
    member: {
      name: faker.name.findName(),
      profilePictureUrl: faker.image.avatar(),
      onlineStatus: 'online',
      __typename: 'User',
    },
    lastMessage: {
      lastMessageFromMe: Math.random() >= 0.5,
      lastMessageText: faker.hacker.phrase(),
      lastMessageTimestamp: faker.date.past(),
      __typename: 'ConversationLastMessage',
    },
    __typename: 'Conversation',
  }

  return listItem
}

function generateConversationListItems(numToGenerate: number) {
  const list = []
  for (let i = 0; i < numToGenerate; i++) {
    const listItem = generateConversationListItem()
    list.push(listItem)
  }
  return list
}

export const typeDefs = gql`
  scalar Date

  extend type Query {
    conversation(id: ID!): Conversation
  }

  type ConversationList {
    cursor: String!
    conversations: [Conversation]!
  }

  type Conversation {
    id: ID!
    member: User!
    lastMessage: ConversationLastMessage!
    conversationFeed: ConversationFeed!
  }

  type ConversationFeed {
    cursor: String!
    messages: [ConversationFeedMessage]!
  }

  type ConversationFeedMessage {
    id: ID!
    member: ConversationMember!
    message: ConversationMessage!
  }

  type User {
    name: String!
    profilePictureUrl: String!
    onlineStatus: String!
  }

  type ConversationLastMessage {
    lastMessageFromMe: Boolean!
    lastMessageText: String!
    lastMessageTimestamp: Date!
  }

  interface ConversationMessage {
    type: String!
    timestamp: Date!
  }

  type ConversationMessageText implements ConversationMessage {
    text: String!
  }

  type ConversationMessageImage implements ConversationMessage {
    url: String!
  }

  type ConversationMessageVideo implements ConversationMessage {
    url: String!
  }
`

export const resolvers = {
  Query: {
    conversation: (root, { id }) => {
      return { id: '1', __typename: 'Conversation' }
    },
    conversationList: (root, { cursor, loadAmount }) => {
      if (!cursor) {
        return {
          cursor: '2cf2a616-56fd-4d54-9585-a48666549102',
          conversations: generateConversationListItems(20),
          __typename: 'ConversationList',
        }
      }

      if (cursor && loadAmount) {
        return {
          cursor: '2cf2a616-56fd-4d54-9585-a48666549102',
          conversations: generateConversationListItems(loadAmount),
          __typename: 'ConversationList',
        }
      }
    },
  },
  Conversation: {
    conversationFeed: (conversation, { cursor, loadAmount }) => {
      if (!cursor) {
        return {
          cursor: '2cf2a616-56fd-4d54-9585-a48666549102',
          messages: generateConversationItems(50),
          __typename: 'ConversationFeed',
        }
      }

      if (cursor && loadAmount) {
        return {
          cursor: '2cf2a616-56fd-4d54-9585-a48666549102',
          messages: generateConversationItems(loadAmount),
          __typename: 'ConversationFeed',
        }
      }
    },
  },
  Mutation: {
    createConversationMessage: (
      _,
      { conversationId, message },
      { cache, getCacheKey },
    ) => {
      return {
        __typename: 'ConversationFeedMessage',
        id: faker.random.uuid(),
        member: {
          __typename: 'User',
          name: 'Mike Wells',
          profilePictureUrl,
          onlineStatus: 'online',
        },
        message: {
          __typename: 'ConversationMessageText',
          type: 'text',
          text: message,
          timestamp: new Date(),
        },
      }
    },
  },
}

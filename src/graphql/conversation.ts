import faker from 'faker'
import { gql } from '@apollo/client'
import ConversationMessageList from '../uiComponents/molecules/Conversation/ConversationMessageList'

function generateMessages(numMessages: number) {
  const messages = []
  for (let i = 0; i < numMessages; i++) {
    const roll = Math.floor(Math.random() * Math.floor(3))
    const message: any = {
      id: faker.random.uuid(),
      member: {
        name: 'Mike Wells',
        profilePictureUrl: '',
        onlineStatus: 'online',
        __typename: 'ConversationMember',
      },
      __typename: 'ConversationFeedMessage',
    }
    if (roll === 0) {
      message.message = {
        type: 'text',
        text: faker.lorem.paragraph(5),
        timestamp: new Date(),
        __typename: 'ConversationMessageText',
      }
    } else if (roll === 1) {
      message.message = {
        type: 'image',
        url: faker.image.imageUrl(),
        timestamp: new Date(),
        __typename: 'ConversationMessageImage',
      }
    } else if (roll === 2) {
      message.message = {
        type: 'video',
        url: faker.image.imageUrl(),
        timestamp: new Date(),
        __typename: 'ConversationMessageVideo',
      }
    }
    messages.push(message)
  }
  return messages
}

export const typeDefs = gql`
  scalar Date

  extend type Query {
    conversation(id: ID!): Conversation
  }

  type Conversation {
    id: ID!
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

  type ConversationMember {
    name: String!
    profilePictureUrl: String!
    onlineStatus: String!
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
  },
  Conversation: {
    conversationFeed: (conversation, { cursor }) => {
      return {
        cursor: '2cf2a616-56fd-4d54-9585-a48666549102',
        messages: generateMessages(10),
        __typename: 'ConversationFeed',
      }
    },
  },
  Mutation: {
    createConversationMessage: (
      _,
      { conversationId, message },
      { cache, getCacheKey },
    ) => {
      const id = getCacheKey({ __typename: 'Conversation', id: conversationId })
      const fragment = gql`
        ${ConversationMessageList.fragments.messageFeed}
        fragment ConversationData on Conversation {
          id
          conversationMessageFeed {
            ...MessageFeed
          }
        }
      `
      const conversation = cache.readFragment({
        fragment,
        id,
        fragmentName: 'ConversationData',
      })
      const previousConversationMessages = conversation.conversationMessageFeed
      const data = {
        ...conversation,
        conversationMessageFeed: {
          ...previousConversationMessages,
          messages: [
            ...previousConversationMessages.messages,
            {
              id: faker.random.uuid(),
              member: {
                name: 'Mike Wells',
                profilePictureUrl: '',
                onlineStatus: 'online',
                __typename: 'ConversationMember',
              },
              message: {
                text: message,
                timestamp: new Date(),
                __typename: 'ConversationMessageText',
              },
              __typename: 'ConversationFeedMessage',
            },
          ],
        },
      }
      cache.writeFragment({
        id,
        fragment,
        data,
        fragmentName: 'ConversationData',
      })
      return null
    },
  },
}

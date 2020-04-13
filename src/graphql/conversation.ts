import faker from 'faker'
import gql from 'graphql-tag'
import ConversationMessageList from '../uiComponents/molecules/Conversation/ConversationMessageList'

const newList = [
  {
    id: '29ac8c86-028b-4c3c-9d6d-2f46489571fd',
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
      __typename: 'ConversationMember',
    },
    message: {
      text: faker.lorem.paragraph(5),
      timestamp: new Date(),
      __typename: 'ConversationMessage',
    },
    __typename: 'ConversationFeedMessage',
  },
  {
    id: faker.random.uuid(),
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
      __typename: 'ConversationMember',
    },
    message: {
      text: faker.lorem.paragraph(5),
      timestamp: new Date(),
      __typename: 'ConversationMessage',
    },
    __typename: 'ConversationFeedMessage',
  },
  {
    id: faker.random.uuid(),
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
      __typename: 'ConversationMember',
    },
    message: {
      text: faker.lorem.paragraph(5),
      timestamp: new Date(),
      __typename: 'ConversationMessage',
    },
    __typename: 'ConversationFeedMessage',
  },
  {
    id: faker.random.uuid(),
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
      __typename: 'ConversationMember',
    },
    message: {
      text: faker.lorem.paragraph(5),
      timestamp: new Date(),
      __typename: 'ConversationMessage',
    },
    __typename: 'ConversationFeedMessage',
  },
  {
    id: faker.random.uuid(),
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
      __typename: 'ConversationMember',
    },
    message: {
      text: faker.lorem.paragraph(5),
      timestamp: new Date(),
      __typename: 'ConversationMessage',
    },
    __typename: 'ConversationFeedMessage',
  },
]

const list = [
  {
    id: '2cf2a616-56fd-4d54-9585-a48666549102',
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
      __typename: 'ConversationMember',
    },
    message: {
      text: faker.lorem.paragraph(5),
      timestamp: new Date(),
      __typename: 'ConversationMessage',
    },
    __typename: 'ConversationFeedMessage',
  },
  {
    id: faker.random.uuid(),
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
      __typename: 'ConversationMember',
    },
    message: {
      text: faker.lorem.paragraph(5),
      timestamp: new Date(),
      __typename: 'ConversationMessage',
    },
    __typename: 'ConversationFeedMessage',
  },
  {
    id: faker.random.uuid(),
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
      __typename: 'ConversationMember',
    },
    message: {
      text: faker.lorem.paragraph(5),
      timestamp: new Date(),
      __typename: 'ConversationMessage',
    },
    __typename: 'ConversationFeedMessage',
  },
  {
    id: faker.random.uuid(),
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
      __typename: 'ConversationMember',
    },
    message: {
      text: faker.lorem.paragraph(5),
      timestamp: new Date(),
      __typename: 'ConversationMessage',
    },
    __typename: 'ConversationFeedMessage',
  },
  {
    id: faker.random.uuid(),
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
      __typename: 'ConversationMember',
    },
    message: {
      text: faker.lorem.paragraph(5),
      timestamp: new Date(),
      __typename: 'ConversationMessage',
    },
    __typename: 'ConversationFeedMessage',
  },
  {
    id: faker.random.uuid(),
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
      __typename: 'ConversationMember',
    },
    message: {
      text: faker.lorem.paragraph(5),
      timestamp: new Date(),
      __typename: 'ConversationMessage',
    },
    __typename: 'ConversationFeedMessage',
  },
  {
    id: faker.random.uuid(),
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
      __typename: 'ConversationMember',
    },
    message: {
      text: faker.lorem.paragraph(5),
      timestamp: new Date(),
      __typename: 'ConversationMessage',
    },
    __typename: 'ConversationFeedMessage',
  },
]

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

  type ConversationMessage {
    text: String!
    timestamp: Date!
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
      if (
        cursor === '2cf2a616-56fd-4d54-9585-a48666549102' ||
        cursor === '29ac8c86-028b-4c3c-9d6d-2f46489571fd'
      ) {
        console.log('HEEERE')
        return {
          cursor: '29ac8c86-028b-4c3c-9d6d-2f46489571fd',
          messages: newList,
          __typename: 'ConversationFeed',
        }
      }
      return {
        cursor: '2cf2a616-56fd-4d54-9585-a48666549102',
        messages: list,
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
                __typename: 'ConversationMessage',
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

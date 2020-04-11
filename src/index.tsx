import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from '@apollo/react-hooks'
import faker from 'faker'
import App from './App'

const newList = [
  {
    id: '29ac8c86-028b-4c3c-9d6d-2f46489571fd',
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
      __typename: 'Member',
    },
    message: {
      text: faker.lorem.paragraph(5),
      timestamp: new Date(),
      __typename: 'Message',
    },
    __typename: 'ConversationMessage',
  },
  {
    id: faker.random.uuid(),
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
      __typename: 'Member',
    },
    message: {
      text: faker.lorem.paragraph(5),
      timestamp: new Date(),
      __typename: 'Message',
    },
    __typename: 'ConversationMessage',
  },
  {
    id: faker.random.uuid(),
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
      __typename: 'Member',
    },
    message: {
      text: faker.lorem.paragraph(5),
      timestamp: new Date(),
      __typename: 'Message',
    },
    __typename: 'ConversationMessage',
  },
  {
    id: faker.random.uuid(),
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
      __typename: 'Member',
    },
    message: {
      text: faker.lorem.paragraph(5),
      timestamp: new Date(),
      __typename: 'Message',
    },
    __typename: 'ConversationMessage',
  },
  {
    id: faker.random.uuid(),
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
      __typename: 'Member',
    },
    message: {
      text: faker.lorem.paragraph(5),
      timestamp: new Date(),
      __typename: 'Message',
    },
    __typename: 'ConversationMessage',
  },
]

const list = [
  {
    id: '2cf2a616-56fd-4d54-9585-a48666549102',
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
      __typename: 'Member',
    },
    message: {
      text: faker.lorem.paragraph(5),
      timestamp: new Date(),
      __typename: 'Message',
    },
    __typename: 'ConversationMessage',
  },
  {
    id: faker.random.uuid(),
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
      __typename: 'Member',
    },
    message: {
      text: faker.lorem.paragraph(5),
      timestamp: new Date(),
      __typename: 'Message',
    },
    __typename: 'ConversationMessage',
  },
  {
    id: faker.random.uuid(),
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
      __typename: 'Member',
    },
    message: {
      text: faker.lorem.paragraph(5),
      timestamp: new Date(),
      __typename: 'Message',
    },
    __typename: 'ConversationMessage',
  },
  {
    id: faker.random.uuid(),
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
      __typename: 'Member',
    },
    message: {
      text: faker.lorem.paragraph(5),
      timestamp: new Date(),
      __typename: 'Message',
    },
    __typename: 'ConversationMessage',
  },
  {
    id: faker.random.uuid(),
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
      __typename: 'Member',
    },
    message: {
      text: faker.lorem.paragraph(5),
      timestamp: new Date(),
      __typename: 'Message',
    },
    __typename: 'ConversationMessage',
  },
  {
    id: faker.random.uuid(),
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
      __typename: 'Member',
    },
    message: {
      text: faker.lorem.paragraph(5),
      timestamp: new Date(),
      __typename: 'Message',
    },
    __typename: 'ConversationMessage',
  },
  {
    id: faker.random.uuid(),
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
      __typename: 'Member',
    },
    message: {
      text: faker.lorem.paragraph(5),
      timestamp: new Date(),
      __typename: 'Message',
    },
    __typename: 'ConversationMessage',
  },
]

const cache = new InMemoryCache()
const client = new ApolloClient({
  cache,
  resolvers: {
    Query: {
      channel: (root, { id }) => {
        return { id: '1', __typename: 'Channel' }
      },
    },
    Channel: {
      conversationMessages: (channel, { cursor }) => {
        if (cursor === '2cf2a616-56fd-4d54-9585-a48666549102') {
          console.log('HEEERE')
          return {
            cursor: '29ac8c86-028b-4c3c-9d6d-2f46489571fd',
            messages: newList,
            __typename: 'ConversationMessages',
          }
        }
        return {
          cursor: '2cf2a616-56fd-4d54-9585-a48666549102',
          messages: list,
          __typename: 'ConversationMessages',
        }
      },
    },
  },
})

const render = Component => {
  return ReactDOM.render(
    <ApolloProvider client={client}>
      <Component />
    </ApolloProvider>,
    document.getElementById('root'),
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(NextApp)
  })
}

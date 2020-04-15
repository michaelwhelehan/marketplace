import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import App from './App'
import { typeDefs, resolvers } from './graphql/conversation'

const cache = new InMemoryCache({
  possibleTypes: {
    ConversationFeed: [],
    ConversationMessage: [
      'ConversationMessageText',
      'ConversationMessageImage',
      'ConversationMessageVideo',
    ],
  },
})
const client = new ApolloClient({
  cache,
  typeDefs,
  resolvers,
  connectToDevTools: true,
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

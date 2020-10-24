import React, { FC } from 'react'
import ReactDOM from 'react-dom'
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import App from './App'
import { MarketplaceProvider, useAuth } from './services'
import { ConfigInput } from './services/types'
import { apiUrl } from './constants/app'
import { positions, Provider as AlertProvider, useAlert } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const MARKETPLACE_CONFIG: ConfigInput = {
  apiUrl,
}

const notificationOptions = {
  position: positions.TOP_RIGHT,
  timeout: 2500,
}

const Notifications: FC = () => {
  const alert = useAlert()

  const { authenticated } = useAuth()
  const [prevAuthenticated, setPrevAuthenticated] = React.useState<
    boolean | undefined
  >()

  React.useEffect(() => {
    if (prevAuthenticated !== undefined && authenticated !== undefined) {
      if (!prevAuthenticated && authenticated) {
        alert.show('You are now logged in', { type: 'success' })
      } else if (prevAuthenticated && !authenticated) {
        alert.show('You are now logged out', { type: 'success' })
      }
      setPrevAuthenticated(authenticated)
    } else if (authenticated !== undefined) {
      setPrevAuthenticated(authenticated)
    }
  }, [authenticated])

  return null
}

const render = (Component) => {
  return ReactDOM.render(
    <AlertProvider template={AlertTemplate as any} {...notificationOptions}>
      <MarketplaceProvider config={MARKETPLACE_CONFIG}>
        <>
          <Component />
          <Notifications />
        </>
      </MarketplaceProvider>
    </AlertProvider>,
    document.getElementById('root'),
  )
}

render(App)

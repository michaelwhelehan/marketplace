import { BatchHttpLink } from '@apollo/client/link/batch-http'
import { RetryLink } from '@apollo/client/link/retry'
import { WebSocketLink } from '@apollo/client/link/ws'
import { split } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'

import { authLink, invalidTokenLinkWithTokenHandler } from './auth'

interface MarketplaceLinksConfig {
  /**
   * Url of the Marketplace GraphQL API.
   */
  apiUrl: string
  /**
   * Url of the Marketplace Websocket.
   */
  wsUrl: string
  /**
   * Callback called when token expiration error occured in Marketplace API response.
   */
  tokenExpirationCallback: () => void
}

/**
 * Creates list of links for Apollo client.
 * @param linksConfig Configuration for created links.
 */
export const createMarketplaceLinks = ({
  apiUrl,
  wsUrl,
  tokenExpirationCallback,
}: MarketplaceLinksConfig) => {
  const invalidTokenLink = invalidTokenLinkWithTokenHandler(
    tokenExpirationCallback,
  )

  const httpLink = new BatchHttpLink({ uri: apiUrl })

  const wsLink = new WebSocketLink({
    uri: wsUrl,
    options: {
      reconnect: true,
    },
  })

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      )
    },
    wsLink,
    httpLink,
  )

  return [invalidTokenLink, authLink, new RetryLink(), splitLink]
}

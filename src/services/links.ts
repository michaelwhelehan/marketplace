import { BatchHttpLink } from '@apollo/client/link/batch-http'
import { RetryLink } from '@apollo/client/link/retry'

import { authLink, invalidTokenLinkWithTokenHandler } from './auth'

interface MarketplaceLinksConfig {
  /**
   * Url of the Marketplace GraphQL API.
   */
  apiUrl: string
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
  tokenExpirationCallback,
}: MarketplaceLinksConfig) => {
  const invalidTokenLink = invalidTokenLinkWithTokenHandler(
    tokenExpirationCallback,
  )

  return [
    invalidTokenLink,
    authLink,
    new RetryLink(),
    new BatchHttpLink({ uri: apiUrl }),
  ]
}

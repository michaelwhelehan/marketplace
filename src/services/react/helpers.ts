import React from 'react'

import { MarketplaceAPI } from '../api'
import { MarketplaceContext } from './context'

export function useMarketplaceClient(): MarketplaceAPI {
  const marketplace = React.useContext(MarketplaceContext)

  if (!marketplace) {
    throw new Error(
      "Could not find marketplace's apollo client in the context. " +
        'Did you forget to wrap the root component in a <MarketplaceProvider>?',
    )
  }

  return marketplace
}

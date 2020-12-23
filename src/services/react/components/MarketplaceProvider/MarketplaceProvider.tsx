import React, { useEffect, useMemo, useState } from 'react'
import { ApolloProvider, ApolloCache } from '@apollo/client'

import { ApolloConfigInput } from '../../../types'
import { MarketplaceManager } from '../../..'
import { MarketplaceAPI } from '../../../api'
import { MarketplaceContext } from '../../context'
import { createMarketplaceCache } from '../../../cache'

import { IProps } from './types'
import { createMarketplaceLinks } from '../../../links'
import { createMarketplaceClient } from '../../../client'

const MarketplaceProvider: React.FC<IProps> = ({
  apolloConfig: apolloConfigInput,
  config,
  children,
}: IProps) => {
  const apolloConfig: ApolloConfigInput = {
    persistCache: true,
    ...apolloConfigInput,
  }

  const [cache, setCache] = useState<ApolloCache<any> | null>(null)
  const [context, setContext] = useState<MarketplaceAPI | null>(null)
  const [tokenExpired, setTokenExpired] = useState(false)

  /**
   * Setup Apollo Cache and persist it in local storage by default
   */
  useEffect(() => {
    ;(async () => {
      const marketplaceCache = apolloConfig?.cache
        ? apolloConfig.cache
        : await createMarketplaceCache({
            persistCache: !!apolloConfig?.persistCache,
          })

      setCache(marketplaceCache)
    })()
  }, [])

  const tokenExpirationCallback = () => {
    setTokenExpired(true)
  }

  /**
   * Setup Apollo Links, Apollo Client and Marketplace Manager
   */
  const apolloClient = useMemo(() => {
    if (cache) {
      const marketplaceLinks = apolloConfig?.links
        ? apolloConfig.links
        : createMarketplaceLinks({
            apiUrl: config.apiUrl,
            wsUrl: config.wsUrl,
            tokenExpirationCallback,
          })

      const marketplaceClient = createMarketplaceClient(cache, marketplaceLinks)

      const manager = new MarketplaceManager(marketplaceClient, config)

      manager.connect((marketplaceAPI) => setContext({ ...marketplaceAPI }))

      return marketplaceClient
    }
    return undefined
  }, [cache])

  useEffect(() => {
    if (tokenExpired) {
      context?.auth.signOut()
      setTokenExpired(false)
    }
  }, [tokenExpired, context])

  if (apolloClient && context) {
    return (
      <MarketplaceContext.Provider value={context}>
        <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
      </MarketplaceContext.Provider>
    )
  }
  return null
}

MarketplaceProvider.displayName = 'MarketplaceProvider'
export { MarketplaceProvider }

import {
  InMemoryCache,
  defaultDataIdFromObject,
  NormalizedCacheObject,
} from '@apollo/client'
import { persistCache as apolloPersistCache } from 'apollo-cache-persist'
import { PersistentStorage, PersistedData } from 'apollo-cache-persist/types'

interface MarketplaceCacheConfig {
  /**
   * Determines if the cache has to be persisted in local storage. False by default.
   */
  persistCache?: boolean
}

/**
 * Creates cache for Apollo client.
 * @param cacheConfig Configuration for created cache.
 */
export const createMarketplaceCache = async ({
  persistCache = false,
}: MarketplaceCacheConfig) => {
  const marketplaceCache = new InMemoryCache({
    dataIdFromObject: (obj) => {
      // eslint-disable-next-line no-underscore-dangle
      if (obj.__typename === 'Shop') {
        return 'shop'
      }
      return defaultDataIdFromObject(obj)
    },
  })

  if (persistCache) {
    await apolloPersistCache({
      cache: marketplaceCache,
      storage: window.localStorage as PersistentStorage<
        PersistedData<NormalizedCacheObject>
      >,
    })
  }

  return marketplaceCache
}

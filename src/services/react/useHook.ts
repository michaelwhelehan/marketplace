import { MarketplaceAPI } from '../api'
import { useMarketplaceClient } from './helpers'

const useHook = <T extends keyof MarketplaceAPI>(
  dataName: T,
): MarketplaceAPI[T] => {
  const marketplace = useMarketplaceClient()

  const getHookData = () => {
    return marketplace[dataName]
  }

  return getHookData()
}

export const hookFactory = <T extends keyof MarketplaceAPI>(query: T) => () =>
  useHook(query)

import { ApolloClient } from '@apollo/client'

import { MarketplaceAPI } from './api'
import { ConfigInput } from './types'
import APIProxy from './api/APIProxy'

export class MarketplaceManager {
  private apiProxy: APIProxy

  private api: MarketplaceAPI

  private apiChangeListener: ((api: MarketplaceAPI) => any) | undefined

  constructor(client: ApolloClient<any>, config: ConfigInput) {
    this.apiProxy = new APIProxy(client)
    this.api = new MarketplaceAPI(
      client,
      this.apiProxy,
      config,
      this.onMarketplaceAPIChange,
    )
  }

  /**
   * Use this method to obtain current API and listen to its update on occured changes within it.
   * @param apiChangeListener Function called to get an API and called on every API update.
   */
  connect(apiChangeListener: (api: MarketplaceAPI) => any) {
    this.apiChangeListener = apiChangeListener
    this.apiChangeListener(this.api)
  }

  private onMarketplaceAPIChange = () => {
    if (this.apiChangeListener) {
      this.apiChangeListener(this.api)
    }
  }
}

export * from './auth'
export * from './cache'
export * from './links'
export * from './client'
export * from './gqlTypes/globalTypes'

// FIXME: It's imported here because it's not a monorepo yet
/* eslint-disable import/no-cycle */
export * from './react'

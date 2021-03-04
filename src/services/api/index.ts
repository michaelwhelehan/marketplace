import { ApolloClient } from '@apollo/client'

import { defaultConfig } from '../config'
import { ApolloClientManager } from '../data/ApolloClientManager'
import { LocalStorageHandler } from '../helpers/LocalStorageHandler'
import { JobsManager } from '../jobs'
import { MarketplaceState } from '../state'
import { ConfigInput } from '../types'
import { AuthAPI } from './Auth'
import { TaskAPI } from './Task'
import APIProxy from './APIProxy'

export class MarketplaceAPI {
  auth: AuthAPI

  task: TaskAPI

  /**
   * @deprecated Please do not use it anymore. Reference to API Proxy will be removed in future.
   * Now it just exists for legacy React hooks, which also will be removed.
   */
  legacyAPIProxy: APIProxy

  constructor(
    client: ApolloClient<any>,
    apiProxy: APIProxy,
    config: ConfigInput,
    onStateUpdate?: () => any,
  ) {
    this.legacyAPIProxy = apiProxy
    const finalConfig = {
      ...defaultConfig,
      ...config,
      loadOnStart: {
        ...defaultConfig.loadOnStart,
        ...config?.loadOnStart,
      },
    }

    const localStorageHandler = new LocalStorageHandler()
    const apolloClientManager = new ApolloClientManager(client)
    const jobsManager = new JobsManager(
      localStorageHandler,
      apolloClientManager,
    )
    const marketplaceState = new MarketplaceState(
      finalConfig,
      localStorageHandler,
      apolloClientManager,
      jobsManager,
    )

    if (onStateUpdate) {
      marketplaceState.subscribeToNotifiedChanges(onStateUpdate)
    }

    this.auth = new AuthAPI(marketplaceState, jobsManager)
    this.task = new TaskAPI(marketplaceState, jobsManager)
  }
}

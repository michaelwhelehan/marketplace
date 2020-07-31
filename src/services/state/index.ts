import { ApolloClientManager } from '../data/ApolloClientManager'
import { User } from '../fragments/gqlTypes/User'
import { NamedObservable } from '../helpers'
import {
  LocalStorageEvents,
  LocalStorageHandler,
  LocalStorageItems,
} from '../helpers/LocalStorageHandler'
import { JobsManager } from '../jobs'
import { Config } from '../types'
import { StateItems } from './types'

export interface MarketplaceStateLoaded {
  user: boolean
  signInToken: boolean
}

const defaultMarketplaceStateLoaded = {
  signInToken: false,
  user: false,
}

export class MarketplaceState extends NamedObservable<StateItems> {
  user?: User | null

  signInToken?: string | null

  loaded: MarketplaceStateLoaded

  private apolloClientManager: ApolloClientManager

  private jobsManager: JobsManager

  private localStorageHandler: LocalStorageHandler

  constructor(
    config: Config,
    localStorageHandler: LocalStorageHandler,
    apolloClientManager: ApolloClientManager,
    jobsManager: JobsManager,
  ) {
    super()
    this.localStorageHandler = localStorageHandler
    this.apolloClientManager = apolloClientManager
    this.jobsManager = jobsManager

    this.loaded = defaultMarketplaceStateLoaded

    this.subscribeStateToChanges()
    this.initializeState(config)
  }

  /**
   * Subscribes to particular changes occuring in data sources like apollo cache or local storage.
   * Every update in data source will result in update of respective class member.
   */
  private subscribeStateToChanges = () => {
    this.localStorageHandler.subscribeToChange(
      LocalStorageItems.TOKEN,
      this.onSignInTokenUpdate,
    )
    this.localStorageHandler.subscribeToChange(
      LocalStorageEvents.CLEAR,
      this.onClearLocalStorage,
    )
    this.apolloClientManager.subscribeToUserChange(this.onUserUpdate)
  }

  /**
   * Initialize class members with cached or fetched data.
   */
  private initializeState = async (config: Config) => {
    if (config.loadOnStart.auth) {
      this.onSignInTokenUpdate(LocalStorageHandler.getSignInToken())
      await this.jobsManager.run('auth', 'provideUser', undefined)
    }
  }

  private onLoadedUpdate = (newLoaded: Partial<MarketplaceStateLoaded>) => {
    this.loaded = {
      ...this.loaded,
      ...newLoaded,
    }
    this.notifyChange(StateItems.LOADED, this.loaded)
  }

  private onClearLocalStorage = () => {
    this.onSignInTokenUpdate(null)
    this.onUserUpdate(null)
  }

  private onSignInTokenUpdate = (token: string | null) => {
    this.signInToken = token
    this.notifyChange(StateItems.SIGN_IN_TOKEN, this.signInToken)
    this.onLoadedUpdate({
      signInToken: true,
    })
  }

  private onUserUpdate = (user: User | null) => {
    this.user = user
    this.notifyChange(StateItems.USER, this.user)
    this.onLoadedUpdate({
      user: true,
    })
  }
}

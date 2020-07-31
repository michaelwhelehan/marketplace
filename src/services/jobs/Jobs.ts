import { ApolloClientManager } from '../data/ApolloClientManager'
import { LocalStorageHandler } from '../helpers/LocalStorageHandler'
import { AuthJobs } from './Auth'

export interface IJobs {
  auth: AuthJobs
}

export class Jobs implements IJobs {
  auth: AuthJobs

  constructor(
    localStorageHandler: LocalStorageHandler,
    apolloClientManager: ApolloClientManager,
  ) {
    this.auth = new AuthJobs(localStorageHandler, apolloClientManager)
  }
}

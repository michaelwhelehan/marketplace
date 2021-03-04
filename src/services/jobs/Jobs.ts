import { ApolloClientManager } from '../data/ApolloClientManager'
import { LocalStorageHandler } from '../helpers/LocalStorageHandler'
import { AuthJobs } from './Auth'
import { TaskJobs } from './Task'

export interface IJobs {
  auth: AuthJobs
  task: TaskJobs
}

export class Jobs implements IJobs {
  auth: AuthJobs
  task: TaskJobs

  constructor(
    localStorageHandler: LocalStorageHandler,
    apolloClientManager: ApolloClientManager,
  ) {
    this.auth = new AuthJobs(localStorageHandler, apolloClientManager)
    this.task = new TaskJobs(localStorageHandler)
  }
}

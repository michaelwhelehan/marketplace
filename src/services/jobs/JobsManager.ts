import { ApolloClientManager } from '../data/ApolloClientManager'
import { LocalStorageHandler } from '../helpers/LocalStorageHandler'
import { IJobs, Jobs } from './Jobs'
import { JobFunctionParameters } from './types'

export class JobsManager {
  private queue: Array<{
    jobGroup: string
    jobName: string
  }>

  private jobs: IJobs

  private localStorageHandler: LocalStorageHandler

  constructor(
    localStorageHandler: LocalStorageHandler,
    apolloClientManager: ApolloClientManager,
  ) {
    this.queue = new Array<{
      jobGroup: string
      jobName: string
    }>()
    this.localStorageHandler = localStorageHandler

    this.jobs = new Jobs(this.localStorageHandler, apolloClientManager)
  }

  /**
   * Executes job immediately and returns result or error.
   * @param jobGroup Job group name referencing to the class with job functions.
   * @param jobName Jobs within group/class.
   * @param params Object passed as the first argument to the job function.
   */
  run<G extends keyof IJobs, J extends keyof IJobs[G], P extends IJobs[G][J]>(
    jobGroup: G,
    jobName: J,
    params: JobFunctionParameters<G, J, P>[0],
  ) {
    const func = this.jobs[jobGroup][jobName]

    if (typeof func === 'function') {
      return func(params)
    }

    return undefined
  }
}

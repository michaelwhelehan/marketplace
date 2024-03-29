import { ApolloClientManager } from '../../data/ApolloClientManager'
import { LocalStorageHandler } from '../../helpers/LocalStorageHandler'
import { DataErrorAuthTypes } from '../../api/Auth/types'

import { JobRunResponse } from '../types'

export type PromiseAuthJobRunResponse = Promise<
  JobRunResponse<DataErrorAuthTypes>
>

export class AuthJobs {
  private apolloClientManager: ApolloClientManager

  private localStorageHandler: LocalStorageHandler

  constructor(
    localStorageHandler: LocalStorageHandler,
    apolloClientManager: ApolloClientManager,
  ) {
    this.apolloClientManager = apolloClientManager
    this.localStorageHandler = localStorageHandler
  }

  provideUser = async (): PromiseAuthJobRunResponse => {
    const { data, error } = await this.apolloClientManager.getUser()

    if (error) {
      return {
        dataError: {
          error,
          type: DataErrorAuthTypes.GET_USER,
        },
      }
    }

    return {
      data,
    }
  }

  signIn = async ({
    email,
    password,
  }: {
    email: string
    password: string
  }): PromiseAuthJobRunResponse => {
    const { data, error } = await this.apolloClientManager.signIn(
      email,
      password,
    )

    if (error) {
      return {
        dataError: {
          error,
          type: DataErrorAuthTypes.SIGN_IN,
        },
      }
    }

    this.localStorageHandler.setSignInToken(data?.token || null)

    return {
      data,
    }
  }

  signOut = async (): PromiseAuthJobRunResponse => {
    this.localStorageHandler.clear()

    await this.apolloClientManager.signOut()

    return {}
  }
}

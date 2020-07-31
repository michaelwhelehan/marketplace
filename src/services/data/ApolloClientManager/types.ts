import { ApolloError } from '@apollo/client'

export interface ApolloErrorWithUserInput extends ApolloError {
  extraInfo: {
    userInputErrors?: any[]
  }
}

export interface IApolloClientManagerResponse<T> {
  data?: T
  error?: ApolloErrorWithUserInput
}

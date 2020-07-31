import { ObservableQuery, ApolloLink, ApolloCache } from '@apollo/client'

export type QueryShape = (...args: any) => any

export type MapFn<T extends QueryShape, TResult> = (
  data: QueryData<T>,
) => TResult

export type WatchMapFn<T extends QueryShape, TResult> = (
  data: WatchQueryData<T>,
) => TResult

export type InferOptions<T> = T extends (_: any, o: infer O) => any ? O : never

export type QueryData<T extends (...args: any) => any> = ReturnType<
  T
> extends Promise<infer R>
  ? R extends { [key: string]: any }
    ? R['data']
    : null
  : never

export type WatchQueryData<T extends (...args: any) => any> = ReturnType<
  T
> extends ObservableQuery<infer R>
  ? R
  : never

export interface Config {
  /**
   * Url of the Marketplace GraphQL API.
   */
  apiUrl: string
  /**
   * Determines data which have to be queried on start.
   */
  loadOnStart: {
    auth: boolean
  }
}

export type DefaultConfig = Pick<Config, 'loadOnStart'>

export type ConfigInput = Omit<Config, keyof DefaultConfig> &
  Partial<DefaultConfig>

export interface ApolloConfigInput {
  /**
   * Custom cache to be used by Apollo client. By default preconfigured cache is created automatically.
   */
  cache?: ApolloCache<any>
  /**
   * Determines if the cache has to be persisted in local storage. True by default.
   */
  persistCache?: boolean
  /**
   * Custom list of links to be used by Apollo client. By default preconfigured links are created automatically.
   */
  links?: ApolloLink[]
}

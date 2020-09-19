import { IJobs } from './Jobs'

export interface JobErrorResponse<T> {
  error?: any
  type?: T
}

export interface JobRunResponse<D, F = undefined> {
  data?: any
  dataError?: JobErrorResponse<D>
}

export type JobFunctionParameters<
  G extends keyof IJobs,
  J extends keyof IJobs[G],
  T extends IJobs[G][J]
> = T extends (...args: infer P) => any ? P : never

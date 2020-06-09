import { Currency } from './currency'
import { UserType } from './user'
import { TaskType } from './task'

export type OfferType = {
  created: Date
  creator: UserType
  amount: number
  currency: Currency
  coverLetter: string
  task: TaskType
}

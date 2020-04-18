import { Currency } from './currency'
import { UserType } from './user'

export type TaskType = {
  creator: UserType
  title: string
  budget: number
  currency: Currency
  location: string
  dueDate: Date
  details: string
}

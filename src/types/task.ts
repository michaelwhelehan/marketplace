import { Currency } from './currency'
import { UserType } from './user'

export type TaskType = {
  id: string
  creator: UserType
  title: string
  slug: string
  budget: number
  currency: Currency
  location: string
  dueDate: Date
  details: string
}

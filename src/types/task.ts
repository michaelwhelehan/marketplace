import { Currency } from './currency'
import { UserType } from './user'

export type TaskStatusType = 'open' | 'in-progress' | 'complete'

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
  status?: TaskStatusType
  numOffers: number
}

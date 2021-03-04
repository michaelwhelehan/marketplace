import { Currency } from './currency'
import { UserType } from './user'

export enum TaskStatus {
  ASSIGNED = 'ASSIGNED',
  CANCELLED = 'CANCELLED',
  COMPLETE = 'COMPLETE',
  DELIVERED = 'DELIVERED',
  DRAFT = 'DRAFT',
  OPEN = 'OPEN',
}

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
  status?: TaskStatus
  numOffers: number
}

export enum TaskStatusFilter {
  ASSIGNED = 'ASSIGNED',
  CANCELLED = 'CANCELLED',
  COMPLETE = 'COMPLETE',
  DELIVERED = 'DELIVERED',
  DRAFT = 'DRAFT',
  OPEN = 'OPEN',
}

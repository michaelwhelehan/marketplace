import { UserType } from './user'
import { TaskType } from './task'

export type ReviewType = {
  id: string
  created: Date
  reviewer: UserType
  task: TaskType
  rating: number
  body: string
}

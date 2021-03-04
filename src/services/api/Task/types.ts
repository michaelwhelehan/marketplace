export interface Task {
  id: string
  title: string
  category?: string
  details: string
  locationType?: string
  location?: string
  dueDate?: Date
  budgetType?: string
  budgetAmount?: number
  budgetDuration?: number
}

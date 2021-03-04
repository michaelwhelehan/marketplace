export interface SetTaskCreatingInput {
  taskId: string
  title: string
  category?: string
  details: string
}

export interface UpdateTaskCreatingInput {
  locationType?: string
  location?: string
  dueDate?: Date
  budgetType?: string
  budgetAmount?: number
  budgetDuration?: number
}

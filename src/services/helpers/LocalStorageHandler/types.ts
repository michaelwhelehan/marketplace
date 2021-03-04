export enum LocalStorageItems {
  TOKEN = 'token',
  TASK = 'task',
}

export enum LocalStorageEvents {
  CLEAR = 'clear',
}

export interface TaskModel {
  id?: string
  title?: string
  category?: string
  details?: string
  locationType?: string
  location?: string
  dueDate?: Date
  budgetType?: string
  budgetAmount?: number
  budgetDuration?: number
}

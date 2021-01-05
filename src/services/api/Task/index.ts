import { ErrorListener, TaskModel } from '../../helpers'
import { JobsManager } from '../../jobs'
import { MarketplaceState, MarketplaceStateLoaded } from '../../state'
import { StateItems } from '../../state/types'
import { Task } from './types'

export class TaskAPI extends ErrorListener {
  loaded: boolean
  /**
   * Task object that is currently being created.
   */
  task?: Task | null

  private marketplaceState: MarketplaceState

  private jobsManager: JobsManager

  constructor(marketplaceState: MarketplaceState, jobsManager: JobsManager) {
    super()
    this.marketplaceState = marketplaceState
    this.jobsManager = jobsManager

    this.loaded = false

    this.marketplaceState.subscribeToChange(
      StateItems.TASK,
      (task: TaskModel) => {
        const {
          id,
          title,
          category,
          details,
          locationType,
          location,
          dueDate,
          budgetType,
          budgetAmount,
          budgetDuration,
        } = task || {}
        this.task = {
          id,
          title,
          category,
          details,
          locationType,
          location,
          dueDate,
          budgetType,
          budgetAmount,
          budgetDuration,
        }
      },
    )
    this.marketplaceState.subscribeToChange(
      StateItems.LOADED,
      (loaded: MarketplaceStateLoaded) => {
        this.loaded = loaded.task
      },
    )
  }

  setTaskCreating = (task: Task): void => {
    this.jobsManager.run('task', 'setTaskCreating', {
      taskId: task.id,
      title: task.title,
      category: task.category,
      details: task.details,
    })
  }

  updateTaskCreating = (task: Partial<Task>): void => {
    this.jobsManager.run('task', 'updateTaskCreating', task)
  }

  clearTaskCreating = (): void => {
    this.jobsManager.run('task', 'clearTaskCreating', undefined)
  }
}

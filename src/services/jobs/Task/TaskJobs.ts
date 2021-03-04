import { LocalStorageHandler } from '../../helpers/LocalStorageHandler'
import { SetTaskCreatingInput, UpdateTaskCreatingInput } from './types'

export class TaskJobs {
  private localStorageHandler: LocalStorageHandler

  constructor(localStorageHandler: LocalStorageHandler) {
    this.localStorageHandler = localStorageHandler
  }

  provideTask = () => {
    const task = LocalStorageHandler.getTask()
    this.localStorageHandler.setTask(task)
  }

  setTaskCreating = ({
    taskId,
    title,
    category,
    details,
  }: SetTaskCreatingInput) => {
    this.localStorageHandler.setTask({
      id: taskId,
      title,
      category,
      details,
    })
  }

  updateTaskCreating = (updatedTask: UpdateTaskCreatingInput) => {
    const task = LocalStorageHandler.getTask()
    this.localStorageHandler.setTask({
      ...task,
      ...updatedTask,
    })
  }

  clearTaskCreating = () => {
    this.localStorageHandler.setTask({})
  }
}

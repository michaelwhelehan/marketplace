import { LocalStorageItems, TaskModel } from './types'
import LocalStorageHandlerProxy from './Proxy'

export class LocalStorageHandler extends LocalStorageHandlerProxy {
  static getSignInToken(): string | null {
    return LocalStorageHandlerProxy.retrieveItem(LocalStorageItems.TOKEN)
  }

  static getTask(): TaskModel | null {
    return LocalStorageHandlerProxy.retrieveObject(LocalStorageItems.TASK)
  }

  setSignInToken(token: string | null): void {
    this.saveItem(LocalStorageItems.TOKEN, token)
  }

  setTask(task: TaskModel | null): void {
    this.saveObject(LocalStorageItems.TASK, task)
  }

  clear(): void {
    this.clearStorage()
  }
}

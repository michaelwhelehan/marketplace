import { LocalStorageItems } from './types'
import LocalStorageHandlerProxy from './Proxy'

export class LocalStorageHandler extends LocalStorageHandlerProxy {
  static getSignInToken(): string | null {
    return LocalStorageHandlerProxy.retrieveItem(LocalStorageItems.TOKEN)
  }

  setSignInToken(token: string | null): void {
    this.saveItem(LocalStorageItems.TOKEN, token)
  }

  clear(): void {
    this.clearStorage()
  }
}

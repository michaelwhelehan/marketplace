import { NamedObservable } from '../NamedObservable'
import { LocalStorageItems, LocalStorageEvents } from './types'

/**
 * Sets or removes data from local storage in one of the specified data format.
 * If data is set to null, then it is removed from local storage.
 * If needed, it stringify data for persistance in local storage or parse such data to be retrieved in desired format.
 */
class LocalStorageHandlerProxy extends NamedObservable<
  LocalStorageItems | LocalStorageEvents
> {
  /**
   * Save string item to local storage.
   * @param name Unique key by which item is identified.
   * @param item String to be saved. If null, then item is completely removed from local storage.
   */
  protected saveItem(name: LocalStorageItems, item: string | null): void {
    if (item) {
      localStorage.setItem(name, item)
    } else {
      localStorage.removeItem(name)
    }
    this.notifyChange(name, item)
  }

  /**
   * Retrieve string item from local storage.
   * @param name Unique key by which item is identified.
   */
  protected static retrieveItem(name: LocalStorageItems): string | null {
    return localStorage.getItem(name)
  }

  /**
   * Stringify object and saves it to local storage.
   * @param name Unique key by which object is identified.
   * @param item Object to be saved. If null, then object is completely removed from local storage.
   */
  protected saveObject<T extends object>(
    name: LocalStorageItems,
    object: T | null,
  ): void {
    if (object) {
      localStorage.setItem(name, JSON.stringify(object))
    } else {
      localStorage.removeItem(name)
    }
    this.notifyChange(name, object)
  }

  /**
   * Retrieve item from local storage and parse it as object.
   * @param name Unique key by which object is identified.
   */
  protected static retrieveObject<T extends object>(
    name: LocalStorageItems,
  ): T | null {
    const item = localStorage.getItem(name)
    if (item) {
      return JSON.parse(item)
    }
    return null
  }

  protected clearStorage(): void {
    localStorage.clear()
    this.notifyChange(LocalStorageEvents.CLEAR, undefined)
  }
}

export default LocalStorageHandlerProxy

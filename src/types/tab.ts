export interface Tabs<T> {
  title: string
  active: boolean
  type: T
  hasUpdates?: boolean
}

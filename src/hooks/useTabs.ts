import { useState, useCallback, useEffect } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import usePrevious from './usePrevious'

export default function useTabs<T>({
  initialTab,
  navigateUrl = false,
}: {
  initialTab: T
  navigateUrl?: boolean
}) {
  const prevInitialTab = usePrevious(initialTab)
  const [currentTab, setTab] = useState<T>(initialTab)
  const match = useRouteMatch()
  const history = useHistory()

  const handleSetTab = useCallback(
    (tab: T) => {
      setTab(tab)
      if (navigateUrl) {
        history.push(`${match.url}/${tab}`)
      }
    },
    [setTab, history, match.url, navigateUrl],
  )

  useEffect(() => {
    if (initialTab !== prevInitialTab) {
      setTab(initialTab)
    }
  }, [initialTab, prevInitialTab])

  return {
    currentTab,
    updateTab: handleSetTab,
  }
}

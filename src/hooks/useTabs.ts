import { useState, useCallback } from 'react'

export default function useTabs<T>(initialTab: T) {
  const [currentTab, setTab] = useState<T>(initialTab)

  const handleSetTab = useCallback(
    (tab: T) => {
      setTab(tab)
    },
    [setTab],
  )

  return {
    currentTab,
    updateTab: handleSetTab,
  }
}

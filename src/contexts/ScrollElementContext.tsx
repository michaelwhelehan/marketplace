import React, { createContext, FC, useContext } from 'react'

export interface ScrollElementContextValue {
  scrollElement: any
}

const ScrollElementContext = createContext<ScrollElementContextValue>({
  scrollElement: null,
})

export const ScrollElementContextProvider: FC<ScrollElementContextValue> = ({
  scrollElement,
  children,
}) => {
  const scrollElementContext = {
    scrollElement,
  }

  return (
    <ScrollElementContext.Provider value={scrollElementContext}>
      {children}
    </ScrollElementContext.Provider>
  )
}

export const useScrollElement = () =>
  useContext(ScrollElementContext).scrollElement

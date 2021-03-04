import { useRef, useEffect, ForwardedRef } from 'react'

export default function useForwardedRef<T>(ref: ForwardedRef<T>) {
  const innerRef = useRef<T>()

  useEffect(() => {
    if (!ref) {
      return
    }

    if (typeof ref === 'function') {
      ref(innerRef.current)
    } else {
      ref.current = innerRef.current
    }
  })

  return innerRef
}

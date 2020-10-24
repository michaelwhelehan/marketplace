/// <reference types="react-scripts" />
 /* eslint-disable */
import 'react'

declare module 'react' {
  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    loading?: 'lazy' | 'eager' | 'auto'
    importance?: 'high' | 'low'
  }
}

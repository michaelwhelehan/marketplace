import { ApolloLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { ErrorResponse, onError } from '@apollo/client/link/error'

export const authEvent = new Event('auth')

export function getAuthToken(): string | null {
  try {
    return localStorage.getItem('token')
  } catch {
    return null
  }
}

export function setAuthToken(token: string) {
  localStorage.setItem('token', token)
  dispatchEvent(authEvent)
}

interface ResponseError extends ErrorResponse {
  networkError?: Error & {
    statusCode?: number
    bodyText?: string
  }
}

// possibly remove callback here and use event emitter
export const invalidTokenLinkWithTokenHandler = (
  tokenExpirationCallback: () => void,
): ApolloLink => {
  const link = onError((error: ResponseError) => {
    const isTokenExpired = error.graphQLErrors?.some(
      (gqlError) =>
        gqlError.extensions?.exception?.code === 'JSONWebTokenExpired',
    )
    if (
      isTokenExpired ||
      (error.networkError && error.networkError.statusCode === 401)
    ) {
      tokenExpirationCallback()
    }
  })
  return link
}

export const authLink = setContext((_, context) => {
  const authToken = getAuthToken()
  if (authToken) {
    return {
      ...context,
      headers: {
        ...context.headers,
        Authorization: authToken ? `JWT ${authToken}` : null,
      },
    }
  }
  return context
})

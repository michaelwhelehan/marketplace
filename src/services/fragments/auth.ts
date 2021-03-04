import { gql } from '@apollo/client'

export const userFragment = gql`
  fragment User on User {
    id
    email
    firstName
    lastName
    username
    avatarUrl
    jobTitle
    lastNotificationsSeenTimestamp
  }
`

export const publicUserBasicFragment = gql`
  fragment PublicUserBasic on User {
    id
    firstName
    lastName
    username
    avatarUrl
    jobTitle
  }
`

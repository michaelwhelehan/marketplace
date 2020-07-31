import { gql } from '@apollo/client'

export const userFragment = gql`
  fragment User on User {
    id
    email
    firstName
    lastName
    isStaff
  }
`

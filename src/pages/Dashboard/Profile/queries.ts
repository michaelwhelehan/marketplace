import { gql } from '@apollo/client'

import { UserProfileDetails } from './gqlTypes/UserProfileDetails'
import { useQuery } from '../../../core/queries'

export const userFragment = gql`
  fragment User on User {
    id
    email
    firstName
    lastName
    avatarUrl
  }
`

export const getUserProfileDetailsQuery = gql`
  ${userFragment}
  query UserProfileDetails {
    me {
      ...User
    }
  }
`

export const useGetUserProfileDetailsQuery = () => {
  return useQuery<UserProfileDetails, any>(getUserProfileDetailsQuery)
}

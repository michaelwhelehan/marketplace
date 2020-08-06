import { gql } from '@apollo/client'

import { UserProfileDetails } from './gqlTypes/UserProfileDetails'
import { useQuery } from '../../../core/queries'

export const userFragment = gql`
  fragment UserDetails on User {
    id
    email
    firstName
    lastName
    avatarUrl
    mobile
    jobTitle
    bio
  }
`

export const getUserProfileDetailsQuery = gql`
  ${userFragment}
  query UserProfileDetails {
    me {
      ...UserDetails
    }
  }
`

export const useGetUserProfileDetailsQuery = () => {
  return useQuery<UserProfileDetails, any>(getUserProfileDetailsQuery)
}

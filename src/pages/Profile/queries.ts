import { gql } from '@apollo/client'

import {
  PublicUserProfile,
  PublicUserProfileVariables,
} from './gqlTypes/PublicUserProfile'
import { userFragment } from '../Dashboard/Profile/queries'
import { useQuery } from '../../core/queries'

export const skillTagFragment = gql`
  fragment SkillTag on SkillTag {
    id
    name
  }
`

export const getPublicUserProfileQuery = gql`
  ${userFragment}
  query PublicUserProfile($username: String!) {
    publicUser(username: $username) {
      ...UserDetails
    }
  }
`

export const useGetPublicUserProfileQuery = (username: string) => {
  return useQuery<PublicUserProfile, PublicUserProfileVariables>(
    getPublicUserProfileQuery,
    { variables: { username } },
  )
}

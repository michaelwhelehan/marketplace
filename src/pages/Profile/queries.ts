import { gql } from '@apollo/client'

import {
  PublicUserProfile,
  PublicUserProfileVariables,
} from './gqlTypes/PublicUserProfile'
import { useQuery } from '../../core/queries'

export const publicUserFragment = gql`
  fragment PublicUserDetails on User {
    id
    username
    firstName
    lastName
    avatarUrl
    jobTitle
    bio
    skills {
      id
      name
    }
    languages {
      id
      level
      language {
        name
      }
    }
    educations {
      id
      school
      startYear
      endYear
      degree
      description
    }
    workExperiences {
      id
      title
      company
      location
      startDate
      endDate
      description
    }
    portfolios {
      id
      title
      description
      imageUrl
    }
  }
`

export const skillTagFragment = gql`
  fragment SkillTag on SkillTag {
    id
    name
  }
`

export const getPublicUserProfileQuery = gql`
  ${publicUserFragment}
  query PublicUserProfile($username: String!) {
    publicUser(username: $username) {
      ...PublicUserDetails
    }
  }
`

export const useGetPublicUserProfileQuery = (username: string) => {
  return useQuery<PublicUserProfile, PublicUserProfileVariables>(
    getPublicUserProfileQuery,
    { variables: { username } },
  )
}

import { gql } from '@apollo/client'

import { UserProfileDetails } from './gqlTypes/UserProfileDetails'
import { useQuery } from '../../../core/queries'

export const userFragment = gql`
  fragment UserDetails on User {
    id
    email
    username
    firstName
    lastName
    avatarUrl
    mobile
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

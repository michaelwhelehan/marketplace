import { gql } from '@apollo/client'

import { UserProfileDetails } from './gqlTypes/UserProfileDetails'
import { SkillTags } from './gqlTypes/SkillTags'
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

export const skillTagFragment = gql`
  fragment SkillTag on SkillTag {
    id
    name
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

export const getSkillTagsQuery = gql`
  ${skillTagFragment}
  query SkillTags {
    skillTags(first: 100) {
      edges {
        node {
          ...SkillTag
        }
      }
    }
  }
`

export const useGetUserProfileDetailsQuery = () => {
  return useQuery<UserProfileDetails, any>(getUserProfileDetailsQuery)
}

export const useGetSkillTagsQuery = () => {
  return useQuery<SkillTags, any>(getSkillTagsQuery)
}

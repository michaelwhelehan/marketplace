import { gql, useQuery } from '@apollo/client'

import { SkillTags } from './gqlTypes/SkillTags'

export const skillTagFragment = gql`
  fragment SkillTag on SkillTag {
    id
    name
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

export const useGetSkillTagsQuery = () => {
  return useQuery<SkillTags, any>(getSkillTagsQuery)
}

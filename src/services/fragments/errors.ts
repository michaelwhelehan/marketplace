import { gql } from '@apollo/client'

export const accountErrorFragment = gql`
  fragment AccountError on AccountError {
    code
    field
    message
  }
`

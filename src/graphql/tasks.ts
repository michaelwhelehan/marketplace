import { gql } from '@apollo/client'

export const typeDefs = gql`
  extend type Query {
    createTaskVisible: Boolean
    makeOfferVisible: Boolean
    rejectOfferVisible: Boolean
    hireVisible: Boolean
  }

  extend type User {
    name: String!
    profilePictureUrl: String
    onlineStatus: String!
    lastSeen: Date
  }
`

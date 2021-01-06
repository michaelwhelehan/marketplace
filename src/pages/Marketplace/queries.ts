import { gql } from '@apollo/client'

import { Tasks, TasksVariables } from './gqlTypes/Tasks'
import { useQuery } from '../../core/queries'
import { Offers, OffersVariables } from './gqlTypes/Offers'
import { publicUserBasicFragment } from '../../services/fragments/auth'

export const offerFragment = gql`
  ${publicUserBasicFragment}
  fragment Offer on Offer {
    id
    created
    offerStatus: status
    createdBy {
      ...PublicUserBasic
    }
    message
    amount {
      currency
      amount
    }
  }
`

export const taskFragment = gql`
  ${publicUserBasicFragment}
  fragment Task on Task {
    id
    owner {
      ...PublicUserBasic
    }
    title
    slug
    taskStatus: status
    budget {
      currency
      amount
    }
    details
    dueDate
    locationType
    location
    locationLatitude
    locationLongitude
    conversationId
    numOffers
  }
`

export const getOffersQuery = gql`
  ${offerFragment}
  query Offers($after: String, $pageSize: Int, $filter: OfferFilterInput) {
    offers(first: $pageSize, after: $after, filter: $filter) {
      totalCount
      edges {
        node {
          ...Offer
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`

export const getTasksQuery = gql`
  ${taskFragment}
  query Tasks($after: String, $pageSize: Int, $filter: TaskFilterInput) {
    tasks(first: $pageSize, after: $after, filter: $filter) {
      edges {
        node {
          ...Task
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`

export const publishTaskFragment = gql`
  fragment PublishTask on PublishTaskPayload {
    task {
      ...Task
    }
  }
`

export const editTaskFragment = gql`
  fragment EditTask on EditTaskPayload {
    task {
      ...Task
    }
  }
`

export const deleteTaskFragment = gql`
  fragment DeleteTask on DeleteTaskPayload {
    task {
      id
    }
  }
`

export const taskSubscription = gql`
  ${taskFragment}
  ${publishTaskFragment}
  ${editTaskFragment}
  ${deleteTaskFragment}
  subscription TaskSubscription {
    taskSubscription {
      marketplaceTask {
        __typename
        ...PublishTask
        ...EditTask
        ...DeleteTask
      }
    }
  }
`

export const useGetOffersQuery = (variables: OffersVariables) => {
  return useQuery<Offers, OffersVariables>(getOffersQuery, { variables })
}

export const useGetTasksQuery = (variables: TasksVariables) => {
  return useQuery<Tasks, TasksVariables>(getTasksQuery, { variables })
}

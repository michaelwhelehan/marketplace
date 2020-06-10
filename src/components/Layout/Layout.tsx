import React, { FC } from 'react'
import Header from '../Header/Header'
import CreateTask from '../CreateTask/CreateTask'
import { gql, useQuery } from '@apollo/client'
import MakeOffer from '../MakeOffer/MakeOffer'
import Hire from '../Hire/Hire'
import RejectOffer from '../RejectOffer/RejectOffer'

export const GET_CREATE_TASK_VISIBLE = gql`
  {
    createTaskVisible @client
  }
`

export const GET_MAKE_OFFER_VISIBLE = gql`
  {
    makeOfferVisible @client
  }
`

export const GET_REJECT_OFFER_VISIBLE = gql`
  {
    rejectOfferVisible @client
  }
`

export const GET_HIRE_VISIBLE = gql`
  {
    hireVisible @client
  }
`

const Layout: FC = ({ children }) => {
  const { data: taskData, client: taskClient } = useQuery(
    GET_CREATE_TASK_VISIBLE,
  )
  const { data: offerData, client: offerClient } = useQuery(
    GET_MAKE_OFFER_VISIBLE,
  )
  const { data: hireData, client: hireClient } = useQuery(GET_HIRE_VISIBLE)
  const { data: rejectOfferData, client: rejectOfferClient } = useQuery(
    GET_REJECT_OFFER_VISIBLE,
  )

  return (
    <>
      <Header />
      {children}
      {taskData?.createTaskVisible && (
        <CreateTask
          onClose={() =>
            taskClient.writeQuery({
              query: GET_CREATE_TASK_VISIBLE,
              data: { createTaskVisible: false },
            })
          }
        />
      )}
      {offerData?.makeOfferVisible && (
        <MakeOffer
          onClose={() =>
            offerClient.writeQuery({
              query: GET_MAKE_OFFER_VISIBLE,
              data: { makeOfferVisible: false },
            })
          }
        />
      )}
      {hireData?.hireVisible && (
        <Hire
          onClose={() =>
            hireClient.writeQuery({
              query: GET_HIRE_VISIBLE,
              data: { hireVisible: false },
            })
          }
        />
      )}
      {rejectOfferData?.rejectOfferVisible && (
        <RejectOffer
          onClose={() =>
            rejectOfferClient.writeQuery({
              query: GET_REJECT_OFFER_VISIBLE,
              data: { rejectOfferVisible: false },
            })
          }
        />
      )}
    </>
  )
}

export default Layout

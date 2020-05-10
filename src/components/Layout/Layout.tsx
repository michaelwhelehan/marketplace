import React, { FC } from 'react'
import Header from '../Header/Header'
import CreateTask from '../CreateTask/CreateTask'
import { gql, useQuery } from '@apollo/client'
import MakeOffer from '../MakeOffer/MakeOffer'

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

const Layout: FC = ({ children }) => {
  const { data: taskData, client: taskClient } = useQuery(
    GET_CREATE_TASK_VISIBLE,
  )
  const { data: offerData, client: offerClient } = useQuery(
    GET_MAKE_OFFER_VISIBLE,
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
    </>
  )
}

export default Layout

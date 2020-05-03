import React, { FC } from 'react'
import Header from '../Header/Header'
import CreateTask from '../CreateTask/CreateTask'
import { gql, useQuery } from '@apollo/client'

export const GET_CREATE_TASK_VISIBLE = gql`
  {
    createTaskVisible @client
  }
`

const Layout: FC = ({ children }) => {
  const { data, client } = useQuery(GET_CREATE_TASK_VISIBLE)
  return (
    <>
      <Header />
      {children}
      {data?.createTaskVisible && (
        <CreateTask
          onClose={() =>
            client.writeQuery({
              query: GET_CREATE_TASK_VISIBLE,
              data: { createTaskVisible: false },
            })
          }
        />
      )}
    </>
  )
}

export default Layout

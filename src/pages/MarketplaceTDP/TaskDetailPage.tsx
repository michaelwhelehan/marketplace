import React, { FC, useRef, useCallback } from 'react'
import styled from 'styled-components'
import TDPHeader from './sections/TDPHeader'
import TDPInfo from '../../uiComponents/molecules/TaskDetail/TDPInfo'
import TDPDetails from '../../uiComponents/molecules/TaskDetail/TDPDetails'
import TDPQuestions from './sections/TDPQuestions'
import { ScrollElementContextProvider } from '../../contexts/ScrollElementContext'
import { useParams } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'
import { TaskType } from '../../types/task'
import TDPAttachments from '../../uiComponents/molecules/TaskDetail/TDPAttachments'
import TDPOffers from './sections/TDPOffers'
import { GET_MAKE_OFFER_VISIBLE } from '../../components/Layout/Layout'
import LineBreak from '../../uiComponents/atoms/LineBreak'

interface TaskData {
  task: TaskType
}

interface TaskVars {
  slug: string
}

const Container = styled.div`
  height: calc(100vh - 64px - 56px - 2px);
  overflow-y: auto;
  overflow-x: hidden;
  background: #fff;

  &.slide-enter,
  &.slide-exit {
    position: absolute;
    transition: transform 500ms ease-out;
    width: 100%;
    z-index: 99;
  }

  &.slide-enter {
    transform: translateX(100%);
  }

  &.slide-enter.slide-enter-active {
    transform: translateX(0%);
  }

  &.slide-exit {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: translateX(0%);
  }

  &.slide-exit-active {
    transform: translateX(100%);
  }
`

export const GET_TASK = gql`
  query Task($slug: String!) {
    task(slug: $slug) @client {
      id
      creator {
        profilePictureUrl
        name
      }
      title
      slug
      budget
      currency {
        code
        iso
      }
      location
      dueDate
      details
      numOffers
    }
  }
`

const TaskDetailPage: FC = () => {
  const { taskSlug } = useParams()
  const { data, loading } = useQuery<TaskData, TaskVars>(GET_TASK, {
    variables: { slug: taskSlug },
  })
  const { client } = useQuery(GET_MAKE_OFFER_VISIBLE)
  const scrollElement = useRef(null)

  const handleMakeOfferClick = useCallback(() => {
    client.writeQuery({
      query: GET_MAKE_OFFER_VISIBLE,
      data: { makeOfferVisible: true },
    })
  }, [client])

  return (
    <Container ref={scrollElement}>
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          <TDPHeader task={data.task} onMakeOfferClick={handleMakeOfferClick} />
          <TDPInfo task={data.task} />
          <LineBreak />
          <TDPDetails details={data.task.details} />
          <TDPAttachments />
          <TDPOffers onMakeOfferClick={handleMakeOfferClick} />
          <ScrollElementContextProvider scrollElement={scrollElement}>
            <TDPQuestions />
          </ScrollElementContextProvider>
        </>
      )}
    </Container>
  )
}

export default TaskDetailPage

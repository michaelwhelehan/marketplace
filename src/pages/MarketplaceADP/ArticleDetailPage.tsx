import React, { FC, useRef } from 'react'
import styled from 'styled-components'
import ADPHeader from './sections/ADPHeader'
import ADPInfo from './sections/ADPInfo'
import ADPDetails from './sections/ADPDetails'
import ADPQuestions from './sections/ADPQuestions'
import { ScrollElementContextProvider } from '../../contexts/ScrollElementContext'
import { useParams } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'
import { TaskType } from '../../types/task'
import ADPAttachments from './sections/ADPAttachments'

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

const StyledHR = styled.hr`
  margin: 10px 20px;
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

const ArticleDetailPage: FC = () => {
  const { taskSlug } = useParams()
  const { data, loading } = useQuery<TaskData, TaskVars>(GET_TASK, {
    variables: { slug: taskSlug },
  })
  const scrollElement = useRef(null)

  return (
    <Container ref={scrollElement}>
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          <ADPHeader task={data.task} />
          <ADPInfo task={data.task} />
          <StyledHR />
          <ADPDetails details={data.task.details} />
          <ADPAttachments />
          <ScrollElementContextProvider scrollElement={scrollElement}>
            <ADPQuestions />
          </ScrollElementContextProvider>
        </>
      )}
    </Container>
  )
}

export default ArticleDetailPage

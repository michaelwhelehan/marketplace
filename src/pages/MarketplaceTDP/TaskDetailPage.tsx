import React, { FC, useRef, useCallback } from 'react'
import styled from 'styled-components'
import TDPHeader from './sections/TDPHeader'
import TDPInfo from '../../uiComponents/molecules/TaskDetail/TDPInfo'
import TDPDetails from '../../uiComponents/molecules/TaskDetail/TDPDetails'
import TDPQuestions from './sections/TDPQuestions'
import { ScrollElementContextProvider } from '../../contexts/ScrollElementContext'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import TDPAttachments from '../../uiComponents/molecules/TaskDetail/TDPAttachments'
import TDPOffers from './sections/TDPOffers'
import { GET_MAKE_OFFER_VISIBLE } from '../../components/Layout/Layout'
import LineBreak from '../../uiComponents/atoms/LineBreak'
import { useGetTaskQuery } from './queries'
import Loader from '../../uiComponents/atoms/Loader/Loader'

interface Params {
  taskSlug: string
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

const TaskDetailPage: FC = () => {
  const { taskSlug } = useParams<Params>()
  const { data, loading } = useGetTaskQuery({ slug: taskSlug })
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
        <Loader name="Dashboard" />
      ) : (
        <>
          <TDPHeader task={data.task} onMakeOfferClick={handleMakeOfferClick} />
          <TDPInfo task={data.task} />
          <LineBreak />
          <TDPDetails details={data.task.details} />
          <TDPAttachments />
          <TDPOffers onMakeOfferClick={handleMakeOfferClick} />
          <ScrollElementContextProvider scrollElement={scrollElement}>
            <TDPQuestions conversationId={data.task.conversationId} />
          </ScrollElementContextProvider>
        </>
      )}
    </Container>
  )
}

export default TaskDetailPage

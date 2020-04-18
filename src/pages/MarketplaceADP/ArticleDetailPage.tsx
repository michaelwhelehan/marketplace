import React, { FC } from 'react'
import styled from 'styled-components'
import faker from 'faker'
import { TaskType } from '../../types/task'
import ADPHeader from './sections/ADPHeader'
import ADPInfo from './sections/ADPInfo'
import profilePictureUrl from '../../assets/images/profile.png'
import ADPDetails from './sections/ADPDetails'
import ADPQuestions from './sections/ADPQuestions'

const Container = styled.div`
  height: calc(100vh - 64px - 56px - 2px);
  overflow-y: auto;
  overflow-x: hidden;
  background: #fff;

  &.slide-enter,
  &.slide-exit {
    transition: transform 500ms ease-out;
    position: absolute;
    width: 100%;
    z-index: 999;
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

const ArticleDetailPage: FC = () => {
  const task: TaskType = {
    creator: {
      name: 'Mike Wells',
      profilePictureUrl,
      onlineStatus: 'online',
      lastSeen: new Date(),
    },
    title: 'Need something done that I can afford',
    budget: 50,
    currency: { code: 'EUR', iso: '€' },
    location: 'Remote',
    dueDate: new Date(),
    details: faker.lorem.paragraph(10),
  }
  return (
    <Container>
      <ADPHeader task={task} />
      <ADPInfo task={task} />
      <StyledHR />
      <ADPDetails details={task.details} />
      <ADPQuestions />
    </Container>
  )
}

export default ArticleDetailPage

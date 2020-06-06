import React, { FC } from 'react'
import styled from 'styled-components'
import { white, borderColor } from '../../../../../styles/colors'
import { featherShadow } from '../../../../../styles/shadows'
import TDPInfo from '../../../../../uiComponents/molecules/TaskDetail/TDPInfo'
import TDPDetails from '../../../../../uiComponents/molecules/TaskDetail/TDPDetails'
import TDPAttachments from '../../../../../uiComponents/molecules/TaskDetail/TDPAttachments'
import { TaskType } from '../../../../../types/task'

const Container = styled.div`
  background-color: ${white};
  border: 1px solid ${borderColor};
  ${featherShadow};
  padding: 20px;
`

const StyledHR = styled.hr`
  margin: 10px 20px;
`

interface Props {}

const TaskDetailsMain: FC<Props> = () => {
  const task: TaskType = {
    budget: 249,
    creator: {
      profilePictureUrl:
        'https://s3.amazonaws.com/uifaces/faces/twitter/magugzbrand2d/128.jpg',
      name: 'Ali Franecki PhD',
      onlineStatus: 'online',
      lastSeen: new Date(),
    },
    currency: { code: 'ZAR', iso: 'R' },
    details:
      'Fugit velit aut tempora. Iste consequatur et debitis itaque necessitatibus illo nihil ut perspiciatis. Consequatur itaque non. Enim veniam iure dicta debitis ipsam saepe sit commodi. Praesentium ipsa labore iste ipsa nemo nemo ullam id. Nisi dolorum numquam distinctio voluptatem veritatis.',
    dueDate: new Date(),
    id: '20f7edab-746c-4443-91f1-b30ab4fea473',
    location: 'Remote',
    numOffers: 2,
    slug: 'try-to-navigate-the-sas-application-maybe-it-will',
    title: 'Try to navigate the SAS application, maybe it will',
  }
  const details =
    'Fugit velit aut tempora. Iste consequatur et debitis itaque necessitatibus illo nihil ut perspiciatis. Consequatur itaque non. Enim veniam iure dicta debitis ipsam saepe sit commodi. Praesentium ipsa labore iste ipsa nemo nemo ullam id. Nisi dolorum numquam distinctio voluptatem veritatis.'

  return (
    <Container>
      <TDPInfo task={task} editable />
      <StyledHR />
      <TDPDetails details={details} />
      <TDPAttachments />
    </Container>
  )
}

export default TaskDetailsMain

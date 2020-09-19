import React, { FC } from 'react'
import TDPInfo from '../../../../../uiComponents/molecules/TaskDetail/TDPInfo'
import TDPDetails from '../../../../../uiComponents/molecules/TaskDetail/TDPDetails'
import TDPAttachments from '../../../../../uiComponents/molecules/TaskDetail/TDPAttachments'
import { TaskType } from '../../../../../types/task'
import LineBreak from '../../../../../uiComponents/atoms/LineBreak'
import { DashboardPanelContainer } from '../../../Panels/DashboardPanel'

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
    <DashboardPanelContainer padded>
      {/* <TDPInfo task={task} editable /> */}
      <LineBreak />
      <TDPDetails details={details} />
      <TDPAttachments />
    </DashboardPanelContainer>
  )
}

export default TaskDetailsMain

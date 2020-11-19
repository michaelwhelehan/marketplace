import React, { FC } from 'react'
import styled from 'styled-components'
import { DashboardPanelContainer } from '../../Dashboard/Panels/DashboardPanel'
import { SkillHeading } from './Skills'
import ReviewSummary from '../../../uiComponents/molecules/ReviewSummary'
import useTabs from '../../../hooks/useTabs'
import Tab from '../../../uiComponents/atoms/Tab'
import { Tabs } from '../../../types/tab'
import DashboardTabPanel from '../../Dashboard/Panels/DashboardTabPanel'
import faker from 'faker'
import { OnlineStatusType } from '../../../types/user'
import Review from '../../../uiComponents/molecules/Review'
import { ReviewType } from '../../../types/review'

const Container = styled(DashboardPanelContainer)`
  ${SkillHeading}:not(:first-child) {
    margin-top: 20px;
  }
`

type TabType = 'freelancer' | 'employer'

interface Props {}

const ReviewPanel: FC<Props> = () => {
  const { currentTab, updateTab } = useTabs<TabType>('freelancer')
  const tabs: Tabs<TabType>[] = [
    {
      title: 'As Freelancer',
      active: currentTab === 'freelancer',
      type: 'freelancer',
    },
    {
      title: 'As Employer',
      active: currentTab === 'employer',
      type: 'employer',
    },
  ]

  const reviews: ReviewType[] = [
    {
      id: faker.random.uuid(),
      created: faker.date.past(),
      reviewer: {
        profilePictureUrl: faker.image.imageUrl(),
        name: `${faker.name.firstName()} ${faker.name.lastName().charAt(0)}.`,
        onlineStatus: 'online' as OnlineStatusType,
        lastSeen: new Date(),
        jobTitle: 'Web Developer',
        rating: 4.8,
        numRatings: 10,
      },
      rating: 5,
      body: faker.lorem.paragraph(1),
      task: {
        id: '20f7edab-746c-4443-91f1-b30ab4fea473',
        creator: {
          name: 'Ali Franecki PhD',
          profilePictureUrl:
            'https://s3.amazonaws.com/uifaces/faces/twitter/magugzbrand2d/128.jpg',
          onlineStatus: 'online',
          lastSeen: faker.date.past(),
        },
        title: 'Try to navigate the SAS application, maybe it will',
        slug: 'try-to-navigate-the-sas-application-maybe-it-will',
        budget: 249,
        currency: { iso: '$', code: 'USD' },
        location: 'Remote',
        dueDate: faker.date.future(),
        details:
          'Fugit velit aut tempora. Iste consequatur et debitis itaque necessitatibus illo nihil ut perspiciatis. Consequatur itaque non. Enim veniam iure dicta debitis ipsam saepe sit commodi. Praesentium ipsa labore iste ipsa nemo nemo ullam id. Nisi dolorum numquam distinctio voluptatem veritatis.',
        numOffers: 2,
      },
    },
    {
      id: faker.random.uuid(),
      created: faker.date.past(),
      reviewer: {
        profilePictureUrl: faker.image.imageUrl(),
        name: `${faker.name.firstName()} ${faker.name.lastName().charAt(0)}.`,
        onlineStatus: 'online' as OnlineStatusType,
        lastSeen: new Date(),
        jobTitle: 'Web Developer',
        rating: 4.8,
        numRatings: 10,
      },
      rating: 5,
      body: faker.lorem.paragraph(1),
      task: {
        id: '20f7edab-746c-4443-91f1-b30ab4fea473',
        creator: {
          name: 'Ali Franecki PhD',
          profilePictureUrl:
            'https://s3.amazonaws.com/uifaces/faces/twitter/magugzbrand2d/128.jpg',
          onlineStatus: 'online',
          lastSeen: faker.date.past(),
        },
        title: 'Try to navigate the SAS application, maybe it will',
        slug: 'try-to-navigate-the-sas-application-maybe-it-will',
        budget: 249,
        currency: { iso: '$', code: 'USD' },
        location: 'Remote',
        dueDate: faker.date.future(),
        details:
          'Fugit velit aut tempora. Iste consequatur et debitis itaque necessitatibus illo nihil ut perspiciatis. Consequatur itaque non. Enim veniam iure dicta debitis ipsam saepe sit commodi. Praesentium ipsa labore iste ipsa nemo nemo ullam id. Nisi dolorum numquam distinctio voluptatem veritatis.',
        numOffers: 2,
      },
    },
    {
      id: faker.random.uuid(),
      created: faker.date.past(),
      reviewer: {
        profilePictureUrl: faker.image.imageUrl(),
        name: `${faker.name.firstName()} ${faker.name.lastName().charAt(0)}.`,
        onlineStatus: 'online' as OnlineStatusType,
        lastSeen: new Date(),
        jobTitle: 'Web Developer',
        rating: 4.8,
        numRatings: 10,
      },
      rating: 5,
      body: faker.lorem.paragraph(1),
      task: {
        id: '20f7edab-746c-4443-91f1-b30ab4fea473',
        creator: {
          name: 'Ali Franecki PhD',
          profilePictureUrl:
            'https://s3.amazonaws.com/uifaces/faces/twitter/magugzbrand2d/128.jpg',
          onlineStatus: 'online',
          lastSeen: faker.date.past(),
        },
        title: 'Try to navigate the SAS application, maybe it will',
        slug: 'try-to-navigate-the-sas-application-maybe-it-will',
        budget: 249,
        currency: { iso: '$', code: 'USD' },
        location: 'Remote',
        dueDate: faker.date.future(),
        details:
          'Fugit velit aut tempora. Iste consequatur et debitis itaque necessitatibus illo nihil ut perspiciatis. Consequatur itaque non. Enim veniam iure dicta debitis ipsam saepe sit commodi. Praesentium ipsa labore iste ipsa nemo nemo ullam id. Nisi dolorum numquam distinctio voluptatem veritatis.',
        numOffers: 2,
      },
    },
    {
      id: faker.random.uuid(),
      created: faker.date.past(),
      reviewer: {
        profilePictureUrl: faker.image.imageUrl(),
        name: `${faker.name.firstName()} ${faker.name.lastName().charAt(0)}.`,
        onlineStatus: 'online' as OnlineStatusType,
        lastSeen: new Date(),
        jobTitle: 'Web Developer',
        rating: 4.8,
        numRatings: 10,
      },
      rating: 5,
      body: faker.lorem.paragraph(1),
      task: {
        id: '20f7edab-746c-4443-91f1-b30ab4fea473',
        creator: {
          name: 'Ali Franecki PhD',
          profilePictureUrl:
            'https://s3.amazonaws.com/uifaces/faces/twitter/magugzbrand2d/128.jpg',
          onlineStatus: 'online',
          lastSeen: faker.date.past(),
        },
        title: 'Try to navigate the SAS application, maybe it will',
        slug: 'try-to-navigate-the-sas-application-maybe-it-will',
        budget: 249,
        currency: { iso: '$', code: 'USD' },
        location: 'Remote',
        dueDate: faker.date.future(),
        details:
          'Fugit velit aut tempora. Iste consequatur et debitis itaque necessitatibus illo nihil ut perspiciatis. Consequatur itaque non. Enim veniam iure dicta debitis ipsam saepe sit commodi. Praesentium ipsa labore iste ipsa nemo nemo ullam id. Nisi dolorum numquam distinctio voluptatem veritatis.',
        numOffers: 2,
      },
    },
  ]

  return (
    <Container padded>
      <SkillHeading>Reviews</SkillHeading>
      <ReviewSummary rating={5} numRatings={10} />
      <DashboardTabPanel>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            title={tab.title}
            active={tab.active}
            onClick={() => updateTab(tab.type)}
            underline
          />
        ))}
      </DashboardTabPanel>
      {reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </Container>
  )
}

export default ReviewPanel

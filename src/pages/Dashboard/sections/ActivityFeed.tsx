import React, { FC } from 'react'
import DashboardPanel from '../Panels/DashboardPanel'
import styled from 'styled-components'
import { OfferType } from '../../../types/offer'
import { OnlineStatusType } from '../../../types/user'
import faker from 'faker'
import HireCard from '../../../uiComponents/molecules/HireCard'

const Container = styled.div`
  padding: 20px;
`

const ActivityFeed: FC = () => {
  const offers: OfferType[] = [
    {
      created: faker.date.recent(),
      creator: {
        profilePictureUrl: faker.image.avatar(),
        name: `${faker.name.firstName()} ${faker.name.lastName().charAt(0)}.`,
        onlineStatus: 'online' as OnlineStatusType,
        lastSeen: new Date(),
        jobTitle: 'Web Developer',
        rating: 4.8,
        numRatings: 10,
      },
      currency: { iso: 'R', code: 'ZAR' },
      amount: 500,
      coverLetter: faker.lorem.paragraph(2),
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
        currency: { code: 'ZAR', iso: 'R' },
        location: 'Remote',
        dueDate: faker.date.future(),
        details:
          'Fugit velit aut tempora. Iste consequatur et debitis itaque necessitatibus illo nihil ut perspiciatis. Consequatur itaque non. Enim veniam iure dicta debitis ipsam saepe sit commodi. Praesentium ipsa labore iste ipsa nemo nemo ullam id. Nisi dolorum numquam distinctio voluptatem veritatis.',
        numOffers: 2,
      },
    },
  ]
  return (
    <DashboardPanel title="Activity Feed">
      <Container>
        {offers.map((offer, index) => (
          <HireCard
            key={index}
            offer={offer}
            action={{
              title: 'Hire',
              onClick: () => console.log('click'),
            }}
          />
        ))}
      </Container>
    </DashboardPanel>
  )
}

export default ActivityFeed

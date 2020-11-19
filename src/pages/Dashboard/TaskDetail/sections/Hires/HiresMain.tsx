import React, { FC } from 'react'
import styled from 'styled-components'
import OfferCard, {
  OfferCardSelector,
} from '../../../../../uiComponents/molecules/OfferCard'
import faker from 'faker'
import { OnlineStatusType } from '../../../../../types/user'
import { OfferType } from '../../../../../types/offer'

const Container = styled.div`
  ${OfferCardSelector}:not(:first-child) {
    margin-top: 15px;
  }
`

interface Props {}

const HiresMain: FC<Props> = () => {
  const offers: OfferType[] = [
    {
      created: faker.date.past(),
      creator: {
        profilePictureUrl: faker.image.imageUrl(),
        name: `${faker.name.firstName()} ${faker.name.lastName().charAt(0)}.`,
        onlineStatus: 'online' as OnlineStatusType,
        lastSeen: new Date(),
        jobTitle: 'Web Developer',
        rating: 4.8,
        numRatings: 10,
      },
      currency: { iso: '$', code: 'USD' },
      amount: 500,
      coverLetter: faker.lorem.paragraph(10),
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
    <Container>
      {offers.map((offer, index) => (
        <OfferCard
          key={index}
          offer={offer}
          action={{
            title: 'Pay Now',
            onClick: () => {
              console.log('click')
            },
          }}
        />
      ))}
    </Container>
  )
}

export default HiresMain

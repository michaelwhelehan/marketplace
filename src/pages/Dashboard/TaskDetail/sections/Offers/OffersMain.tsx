import React, { FC, useCallback } from 'react'
import styled from 'styled-components'
import OfferCard, {
  OfferCardSelector,
} from '../../../../../uiComponents/molecules/OfferCard'
import faker from 'faker'
import { OnlineStatusType } from '../../../../../types/user'
import { OfferType } from '../../../../../types/offer'
import { GET_HIRE_VISIBLE } from '../../../../../components/Layout/Layout'
import { useQuery } from '@apollo/client'
import SelectField from '../../../../../uiComponents/atoms/SelectField'
import { ParagraphS } from '../../../../../uiComponents/atoms/Paragraphs'
import { fwBold } from '../../../../../styles/typography'

const Container = styled.div`
  ${OfferCardSelector}:not(:first-child) {
    margin-top: 15px;
  }
`

const InnerFilterContainerStart = styled.div`
  display: flex;

  > * {
    margin-right: 10px;
    flex: 1;
  }
`

const InnerFilterContainerEnd = styled.div`
  display: flex;
  align-items: center;

  > *:last-child {
    flex: 1;
  }
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${InnerFilterContainerStart} {
    width: 60%;
  }

  ${InnerFilterContainerEnd} {
    width: 25%;
  }
`

const SortByTitle = styled(ParagraphS)`
  ${fwBold};
  margin-right: 10px;
`

interface Props {}

const OffersMain: FC<Props> = () => {
  const { client } = useQuery(GET_HIRE_VISIBLE)

  const handleHireClick = useCallback(() => {
    client.writeQuery({
      query: GET_HIRE_VISIBLE,
      data: { hireVisible: true },
    })
  }, [client])

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
      <FilterContainer>
        <InnerFilterContainerStart>
          <SelectField
            placeholder="Bid Amount"
            options={[{ label: 'Project is spam or fraud', value: 'spam' }]}
          />
          <SelectField
            placeholder="Reviews"
            options={[{ label: 'Project is spam or fraud', value: 'spam' }]}
          />
          <SelectField
            placeholder="Rating"
            options={[{ label: 'Project is spam or fraud', value: 'spam' }]}
          />
        </InnerFilterContainerStart>
        <InnerFilterContainerEnd>
          <SortByTitle>Sort by:</SortByTitle>
          <SelectField
            placeholder="Best Rank"
            options={[{ label: 'Project is spam or fraud', value: 'spam' }]}
          />
        </InnerFilterContainerEnd>
      </FilterContainer>
      {offers.map((offer, index) => (
        <OfferCard
          key={index}
          offer={offer}
          action={{
            title: 'Hire',
            onClick: handleHireClick,
          }}
        />
      ))}
    </Container>
  )
}

export default OffersMain

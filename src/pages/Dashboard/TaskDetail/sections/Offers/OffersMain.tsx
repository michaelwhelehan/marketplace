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

const Container = styled.div`
  ${OfferCardSelector}:not(:first-child) {
    margin-top: 15px;
  }
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
      coverLetter: faker.lorem.paragraph(10),
    },
    {
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
      coverLetter: faker.lorem.paragraph(10),
    },
    {
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
      coverLetter: faker.lorem.paragraph(10),
    },
    {
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
      coverLetter: faker.lorem.paragraph(10),
    },
  ]
  return (
    <Container>
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

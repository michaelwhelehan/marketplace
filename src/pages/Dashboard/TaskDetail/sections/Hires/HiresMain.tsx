import React, { FC } from 'react'
import styled from 'styled-components'
import OfferCard, { OfferCardSelector } from '../Offers/OfferCard'

const Container = styled.div`
  ${OfferCardSelector}:not(:first-child) {
    margin-top: 15px;
  }
`

interface Props {}

const HiresMain: FC<Props> = () => {
  return (
    <Container>
      {/* {offers.map((offer, index) => (
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
      ))} */}
    </Container>
  )
}

export default HiresMain

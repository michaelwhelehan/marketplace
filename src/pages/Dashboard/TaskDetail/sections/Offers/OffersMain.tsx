import React, { FC } from 'react'
import styled from 'styled-components'
import OfferCard, { OfferCardSelector } from './OfferCard'

const Container = styled.div`
  ${OfferCardSelector}:not(:first-child) {
    margin-top: 10px;
  }
`

interface Props {}

const OffersMain: FC<Props> = () => {
  return (
    <Container>
      <OfferCard />
      <OfferCard />
      <OfferCard />
      <OfferCard />
    </Container>
  )
}

export default OffersMain

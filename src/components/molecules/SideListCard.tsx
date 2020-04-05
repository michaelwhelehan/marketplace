import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CARD_PADDING = 10

const StyledCardOuter = styled.div`
  padding: ${CARD_PADDING}px ${CARD_PADDING * 2}px;
  height: 100%;
`

const StyledCardInner = styled.div`
  border: 1px solid #bebebe;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 10px;
  height: 100%;
  background: white;
`

const SideListCard: FC = ({ children }) => {
  return (
    <Link to="/lol">
      <StyledCardOuter>
        <StyledCardInner>{children}</StyledCardInner>
      </StyledCardOuter>
    </Link>
  )
}

export default SideListCard

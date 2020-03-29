import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CARD_PADDING = 10

const StyledCardOuter = styled.div<{ height: number }>`
  padding: ${CARD_PADDING}px ${CARD_PADDING * 2}px;
  height: ${props => props.height}px;
`

const StyledCardInner = styled.div<{ height: number }>`
  border: 1px solid #bebebe;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 10px;
  height: calc(${props => props.height}px - (${CARD_PADDING}px * 2));
  background: white;
`

interface Props {
  height: number
}

const SideListCard: FC<Props> = ({ height, children }) => {
  return (
    <Link to="/lol">
      <StyledCardOuter height={height}>
        <StyledCardInner height={height}>{children}</StyledCardInner>
      </StyledCardOuter>
    </Link>
  )
}

export default SideListCard

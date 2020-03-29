import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CARD_PADDING = 20
const CARD_SHADOW = 2

const StyledCardOuter = styled.div<{ height: number }>`
  padding: ${CARD_PADDING}px;
  height: calc(${props => props.height}px - (${CARD_PADDING}px * 2));
`

const StyledCardInner = styled.div<{ height: number }>`
  border: 1px solid #bebebe;
  box-shadow: ${CARD_SHADOW}px ${CARD_SHADOW}px ${CARD_SHADOW}px 0px
    rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 10px;
  height: calc(
    ${props => props.height}px - (${CARD_PADDING}px * 2) -
      (${CARD_SHADOW}px * 2)
  );
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

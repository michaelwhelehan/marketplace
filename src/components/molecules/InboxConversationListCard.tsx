import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledCard = styled.div<{ height: number }>`
  border-bottom: 1px solid #bebebe;
  padding: 10px;
  height: ${props => props.height}px;
  background: white;
`

interface Props {
  height: number
  name: string
}

const InboxConversationListCard: FC<Props> = ({ height, name }) => {
  return (
    <Link to="/lol">
      <StyledCard height={height}>{name}</StyledCard>
    </Link>
  )
}

export default InboxConversationListCard

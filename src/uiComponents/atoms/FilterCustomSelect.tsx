import React, { FC } from 'react'
import styled from 'styled-components'
import { MdExpandMore } from 'react-icons/md'
import { primaryColor } from '../../styles/colors'

const StyledFilterSelect = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  color: ${primaryColor};
  cursor: pointer;
`

const StyledMdExpandMore = styled(MdExpandMore)`
  font-size: 24px;
  margin-left: 5px;
`

interface Props {
  name: string
}

const FilterCustomSelect: FC<Props> = ({ name }) => {
  return (
    <StyledFilterSelect>
      {name} <StyledMdExpandMore />
    </StyledFilterSelect>
  )
}

export default FilterCustomSelect

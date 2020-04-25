import React, { FC } from 'react'
import styled from 'styled-components'
import { MdTune } from 'react-icons/md'
import { primaryColor } from '../../styles/colors'

const StyledFilterSelect = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  color: ${primaryColor};
  cursor: pointer;
  position: relative;
`

const StyledMdTune = styled(MdTune)`
  font-size: 24px;
  margin-right: 5px;
`

const FilterDropdownContainer = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  z-index: 999;
  width: 500px;
  height: 500px;
  background: white;
`

interface Props {
  name: string
}

const FilterDropdown: FC<Props> = ({ name }) => {
  return (
    <StyledFilterSelect>
      <StyledMdTune />
      {name}
      <FilterDropdownContainer></FilterDropdownContainer>
    </StyledFilterSelect>
  )
}

export default FilterDropdown

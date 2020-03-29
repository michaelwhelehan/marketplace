import React, { FC } from 'react'
import styled from 'styled-components'
import BaseContainer from '../atoms/Container'
import FilterCustomSelect from '../atoms/FilterCustomSelect'
import { borderColor, white } from '../../styles/colors'
import { FILTER_HEADER_HEIGHT } from '../../constants/sizes'

const StyledHeader = styled.header`
  height: ${FILTER_HEADER_HEIGHT}px;
  border-bottom: 1px solid ${borderColor};
  background-color: ${white};
`

const StyledContainer = styled(BaseContainer)`
  display: flex;
  align-items: center;
`

const FilterSelectContainer = styled.div`
  margin-right: 20px;
`

const FilterHeader: FC = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <FilterSelectContainer>
          <FilterCustomSelect name="Hamburg & remote" />
        </FilterSelectContainer>
        <FilterSelectContainer>
          <FilterCustomSelect name="Any price" />
        </FilterSelectContainer>
        <FilterSelectContainer>
          <FilterCustomSelect name="Task type" />
        </FilterSelectContainer>
      </StyledContainer>
    </StyledHeader>
  )
}

export default FilterHeader

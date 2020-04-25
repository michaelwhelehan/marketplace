import React, { FC } from 'react'
import styled from 'styled-components'
import BaseContainer from '../atoms/Container'
import Button from '../atoms/Button'
import { borderColor, white } from '../../styles/colors'
import { FILTER_HEADER_HEIGHT } from '../../constants/sizes'
import SearchField from './SearchField'

const StyledHeader = styled.header`
  height: ${FILTER_HEADER_HEIGHT}px;
  border-bottom: 1px solid ${borderColor};
  background-color: ${white};
`

const StyledContainer = styled(BaseContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const FilterStart = styled.div``

const FilterEnd = styled.div``

const FilterHeader: FC = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <FilterStart>
          <Button>Create Task</Button>
        </FilterStart>
        <FilterEnd>
          <SearchField
            placeholder="Search for a task"
            value=""
            onChange={() => console.log()}
          />
        </FilterEnd>
      </StyledContainer>
    </StyledHeader>
  )
}

export default FilterHeader

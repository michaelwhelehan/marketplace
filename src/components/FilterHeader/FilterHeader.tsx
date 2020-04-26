import React, { FC } from 'react'
import styled from 'styled-components'
import BaseContainer from '../../uiComponents/atoms/Container'
import Button from '../../uiComponents/atoms/Button'
import { borderColor, white } from '../../styles/colors'
import { FILTER_HEADER_HEIGHT } from '../../constants/sizes'
import SearchField from '../../uiComponents/molecules/SearchField'
import FilterDropdown from '../../uiComponents/molecules/FilterDropdown'

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

const FilterStart = styled.div`
  display: flex;
`

const FilterEnd = styled.div``

const StyledButton = styled(Button)`
  margin-right: 20px;
`

const FilterHeader: FC = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <FilterStart>
          <StyledButton>Create Task</StyledButton>
          <FilterDropdown name="Filters" />
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

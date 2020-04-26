import React, { FC, useState } from 'react'
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
  const [searchTerm, setSearchTerm] = useState('')
  const [filtersOpen, setFiltersOpen] = useState(false)
  return (
    <StyledHeader>
      <StyledContainer>
        <FilterStart>
          <StyledButton>Create Task</StyledButton>
          <FilterDropdown
            name="Filters"
            dropdownOpen={filtersOpen}
            onToggle={(_, open) =>
              setFiltersOpen(prev => open ?? (open || !prev))
            }
          />
        </FilterStart>
        <FilterEnd>
          <SearchField
            placeholder="Search for a task"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </FilterEnd>
      </StyledContainer>
    </StyledHeader>
  )
}

export default FilterHeader

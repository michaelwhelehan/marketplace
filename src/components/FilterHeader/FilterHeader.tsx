import React, { FC, useState } from 'react'
import styled from 'styled-components'
import BaseContainer from '../../uiComponents/atoms/Container'
import Button from '../../uiComponents/atoms/Button'
import { borderColor, white } from '../../styles/colors'
import { FILTER_HEADER_HEIGHT } from '../../constants/sizes'
import TextFieldIcon from '../../uiComponents/molecules/TextFieldIcon'
import FilterDropdown from './FilterDropdown'
import { useQuery } from '@apollo/client'
import { GET_CREATE_TASK_VISIBLE } from '../Layout/Layout'
import { featherShadow } from '../../styles/shadows'
import { toXL } from '../../constants/breakpoints'

const StyledHeader = styled.header`
  height: ${FILTER_HEADER_HEIGHT}px;
  border-bottom: 1px solid ${borderColor};
  background-color: ${white};
  ${featherShadow};
  position: relative;
  z-index: 997;

  @media (${toXL}) {
    padding: 0 20px;
  }
`

const StyledContainer = styled(BaseContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (${toXL}) {
    padding: 0 20px;
  }
`

const FilterStart = styled.div`
  display: flex;
`

const FilterEnd = styled.div`
  width: 280px;
`

const StyledButton = styled(Button)`
  margin-right: 20px;
`

const FilterHeader: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [filtersOpen, setFiltersOpen] = useState<boolean>(false)
  const { client } = useQuery(GET_CREATE_TASK_VISIBLE)

  return (
    <StyledHeader>
      <StyledContainer>
        <FilterStart>
          <StyledButton
            onClick={() =>
              client.writeQuery({
                query: GET_CREATE_TASK_VISIBLE,
                data: { createTaskVisible: true },
              })
            }
          >
            Create Task
          </StyledButton>
          <FilterDropdown
            name="Filters"
            dropdownOpen={filtersOpen}
            onToggle={(_, open) =>
              setFiltersOpen((prev) => open ?? (open || !prev))
            }
          />
        </FilterStart>
        <FilterEnd>
          <TextFieldIcon
            iconName="MdSearch"
            placeholder="Search for a task"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            fullWidth
          />
        </FilterEnd>
      </StyledContainer>
    </StyledHeader>
  )
}

export default FilterHeader

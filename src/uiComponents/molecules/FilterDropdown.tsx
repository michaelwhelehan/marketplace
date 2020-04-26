import React, { FC, MouseEvent } from 'react'
import styled from 'styled-components'
import { MdTune } from 'react-icons/md'
import Button from '../atoms/Button'
import { primaryColor } from '../../styles/colors'
import { ParagraphS } from '../atoms/Paragraphs'
import { fwBold } from '../../styles/typography'
import DropDown from '../atoms/DropDown'

const FilterDropdownContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const StyledMdTune = styled(MdTune)`
  font-size: 24px;
  margin-right: 5px;
`

const FilterDropdownWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: ${primaryColor};
  cursor: pointer;
`

const StyledCancel = styled(ParagraphS)`
  ${fwBold};
  position: absolute;
  cursor: pointer;
  bottom: 8px;
  right: left;
`

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 0;
  right: 0;
`

interface Props {
  name: string
  dropdownOpen: boolean
  onToggle: (event: MouseEvent, open?: boolean) => void
}

const FilterDropdown: FC<Props> = ({ name, dropdownOpen, onToggle }) => {
  return (
    <FilterDropdownContainer>
      <FilterDropdownWrapper onClick={onToggle}>
        <StyledMdTune />
        {name}
      </FilterDropdownWrapper>
      {dropdownOpen && (
        <DropDown
          renderFooter={() => (
            <>
              <StyledCancel onClick={e => onToggle(e, false)}>
                Cancel
              </StyledCancel>
              <StyledButton>Apply</StyledButton>
            </>
          )}
        >
          Filters
        </DropDown>
      )}
    </FilterDropdownContainer>
  )
}

export default FilterDropdown

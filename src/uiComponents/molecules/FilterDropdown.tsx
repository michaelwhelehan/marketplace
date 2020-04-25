import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { MdTune } from 'react-icons/md'
import Button from '../atoms/Button'
import { primaryColor, white, borderColorDark } from '../../styles/colors'
import { ParagraphS } from '../atoms/Paragraphs'
import { fwBold } from '../../styles/typography'

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

const StyledFilterDropdown = styled.div`
  position: absolute;
  top: 45px;
  left: 0;
  z-index: 998;
  border: 1px solid ${borderColorDark};
  border-radius: 4px;
  width: 350px;
  height: 400px;
  background: ${white};
  padding: 20px;

  &:before,
  :after {
    bottom: 100%;
    left: 24px;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:before {
    border-color: transparent transparent ${borderColorDark};
    border-width: 9px;
    margin-left: -9px;
  }

  &:after {
    border-color: transparent transparent ${white};
    border-width: 8px;
    margin-left: -8px;
  }
`

const StyledFilterDropdownWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
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
}

const FilterDropdown: FC<Props> = ({ name }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  return (
    <FilterDropdownContainer>
      <FilterDropdownWrapper onClick={() => setDropdownOpen(!dropdownOpen)}>
        <StyledMdTune />
        {name}
      </FilterDropdownWrapper>
      {dropdownOpen && (
        <StyledFilterDropdown>
          <StyledFilterDropdownWrapper>
            <StyledCancel onClick={() => setDropdownOpen(false)}>
              Cancel
            </StyledCancel>
            <StyledButton>Apply</StyledButton>
          </StyledFilterDropdownWrapper>
        </StyledFilterDropdown>
      )}
    </FilterDropdownContainer>
  )
}

export default FilterDropdown

import React, { FC, MouseEvent } from 'react'
import styled from 'styled-components'
import { MdTune } from 'react-icons/md'
import Button from '../../uiComponents/atoms/Button'
import { primaryColor, transparentCurtain } from '../../styles/colors'
import { ParagraphS } from '../../uiComponents/atoms/Paragraphs'
import { fwBold } from '../../styles/typography'
import DropDown from '../../uiComponents/atoms/DropDown'
import { MAIN_HEADER_HEIGHT, FILTER_HEADER_HEIGHT } from '../../constants/sizes'
import useFilterForm from '../FilterForm/useFilterForm'
import useUrlQueries from '../../hooks/useUrlQueries'
import { percentToValue } from '../../utils/helpers'

const FilterCurtain = styled.div`
  position: fixed;
  top: calc(${MAIN_HEADER_HEIGHT}px + ${FILTER_HEADER_HEIGHT}px);
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0;
  background-color: ${transparentCurtain};
  z-index: 1;
  overflow-x: hidden;
`

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

const DropdownFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledCancel = styled(ParagraphS)`
  ${fwBold};
  cursor: pointer;
`

interface Props {
  name: string
  dropdownOpen: boolean
  onToggle: (event: MouseEvent, open?: boolean) => void
}

const FilterDropdown: FC<Props> = ({ name, dropdownOpen, onToggle }) => {
  const { renderedFilterForm, onFilterFormSubmit } = useFilterForm()
  const { updateQueries } = useUrlQueries({
    allowedParams: ['budget_gte', 'budget_lte'],
  })

  return (
    <>
      {dropdownOpen && <FilterCurtain />}
      <FilterDropdownContainer>
        <FilterDropdownWrapper onClick={onToggle}>
          <StyledMdTune />
          {name}
        </FilterDropdownWrapper>
        {dropdownOpen && (
          <DropDown
            overflowContent={false}
            renderFooter={() => (
              <DropdownFooter>
                <StyledCancel onClick={(e) => onToggle(e, false)}>
                  Cancel
                </StyledCancel>
                <Button
                  onClick={onFilterFormSubmit((data) => {
                    updateQueries({
                      budget_gte: percentToValue(data.budget[0], 20000),
                      budget_lte: percentToValue(data.budget[1], 20000),
                    })
                    onToggle(null, false)
                  })}
                >
                  Apply
                </Button>
              </DropdownFooter>
            )}
          >
            {renderedFilterForm}
          </DropDown>
        )}
      </FilterDropdownContainer>
    </>
  )
}

export default FilterDropdown

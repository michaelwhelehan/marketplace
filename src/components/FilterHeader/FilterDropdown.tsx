import React, { FC, MouseEvent } from 'react'
import styled from 'styled-components'
import { MdTune } from 'react-icons/md'
import Button from '../../uiComponents/atoms/Button'
import { primaryColor, transparentCurtain } from '../../styles/colors'
import { ParagraphS } from '../../uiComponents/atoms/Paragraphs'
import { fwBold } from '../../styles/typography'
import DropDown from '../../uiComponents/atoms/DropDown'
import FormField from '../../uiComponents/molecules/FormField'
import TextFieldIcon from '../../uiComponents/molecules/TextFieldIcon'
import { MAIN_HEADER_HEIGHT, FILTER_HEADER_HEIGHT } from '../../constants/sizes'
import SliderField from '../../uiComponents/atoms/SliderField'
import RadioField from '../../uiComponents/atoms/RadioField'

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

const WhereWrapper = styled.div`
  display: flex;

  > * {
    margin-right: 10px;
  }
`

interface Props {
  name: string
  dropdownOpen: boolean
  onToggle: (event: MouseEvent, open?: boolean) => void
}

const FilterDropdown: FC<Props> = ({ name, dropdownOpen, onToggle }) => {
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
            renderFooter={() => (
              <>
                <StyledCancel onClick={e => onToggle(e, false)}>
                  Cancel
                </StyledCancel>
                <StyledButton onClick={e => onToggle(e, false)}>
                  Apply
                </StyledButton>
              </>
            )}
          >
            <FormField label="Where">
              <WhereWrapper>
                <RadioField name="where" label="In Person" value="in-person" />
                <RadioField name="where" label="Online" value="online" />
                <RadioField name="where" label="All" value="all" />
              </WhereWrapper>
            </FormField>
            <FormField label="Suburb" spacingTop>
              <TextFieldIcon
                iconName="MdPlace"
                placeholder="Enter a surburb"
                fullWidth
              />
            </FormField>
            <FormField label="Distance" spacingTop spacingBottom>
              <SliderField value={30} range={100} unit="km" />
            </FormField>
            <FormField label="Task Price" spacingTop spacingBottom>
              <SliderField value={[5, 80]} range={20000} unit="R" />
            </FormField>
          </DropDown>
        )}
      </FilterDropdownContainer>
    </>
  )
}

export default FilterDropdown

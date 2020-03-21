import React, { FC } from 'react'
import styled from 'styled-components'
import BaseContainer from '../atoms/Container'
import FilterCustomSelect from '../atoms/FilterCustomSelect'

const StyledHeader = styled.header`
  height: 56px;
  border-bottom: 1px solid #eee;
`

const StyledContainer = styled(BaseContainer)`
  display: flex;
  align-items: center;
`

const FilterSelectContainer = styled.div`
  flex-basis: 200px;
`

const SubHeader: FC = () => {
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

export default SubHeader

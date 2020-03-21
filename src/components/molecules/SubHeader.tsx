import React, { FC } from 'react'

import styled from 'styled-components'
import BaseContainer from '../atoms/Container'

const StyledHeader = styled.header`
  height: 56px;
  border-bottom: 1px solid #eee;
`

const StyledContainer = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const SubHeader: FC = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <p>&nbsp;</p>
      </StyledContainer>
    </StyledHeader>
  )
}

export default SubHeader

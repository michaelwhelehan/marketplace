import React, { FC } from 'react'
import styled from 'styled-components'
import BaseContainer from '../atoms/Container'
import {
  borderColor,
  offWhite,
  white,
  primaryFontColor,
} from '../../styles/colors'
import { Link } from 'react-router-dom'
import Icon from '../atoms/Icon'
import { MAIN_HEADER_HEIGHT } from '../../constants/sizes'

const INBOX_HEADER_HEIGHT = 100

const StyledContainer = styled(BaseContainer)`
  border-left: 1px solid ${borderColor};
  border-right: 1px solid ${borderColor};
  height: calc(100vh - ${MAIN_HEADER_HEIGHT}px);
  display: flex;
`

const LeftSideContainer = styled.article`
  flex-basis: 300px;
  padding: 20px;
  border-right: 1px solid ${borderColor};
  background-color: ${white};
`

const MainContainer = styled.article`
  flex: 1;
  background-color: ${white};
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`

const TopInnerContainer = styled.article`
  background-color: ${white};
  border-bottom: 1px solid ${borderColor};
  width: 100%;
  height: ${INBOX_HEADER_HEIGHT}px;
`

const LeftInnerContainer = styled.article`
  flex: 1;
  padding: 20px;
  background-color: ${white};
  height: calc(100vh - ${MAIN_HEADER_HEIGHT}px - ${INBOX_HEADER_HEIGHT}px);
`

const RightInnerContainer = styled.article`
  flex-basis: 300px;
  padding: 20px;
  border-left: 1px solid ${borderColor};
  background-color: ${white};
`

const Inbox: FC = () => {
  return (
    <>
      <StyledContainer>
        <LeftSideContainer />
        <MainContainer>
          <TopInnerContainer />
          <LeftInnerContainer />
          <RightInnerContainer />
        </MainContainer>
      </StyledContainer>
    </>
  )
}

export default Inbox

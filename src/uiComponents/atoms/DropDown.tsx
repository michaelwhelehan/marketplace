import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { white, borderColorDark } from '../../styles/colors'

type PositionType = 'start' | 'end'

const StyledDropdown = styled.div<{
  position: PositionType
  autoHeight: boolean
}>`
  position: absolute;
  top: 40px;
  ${({ position }) => {
    if (position === 'start') {
      return css`
        left: 0;
      `
    }
    return css`
      right: 0;
    `
  }}
  z-index: 998;
  border: 1px solid ${borderColorDark};
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 350px;
  min-height: 400px;
  max-height: 90vh;
  background: ${white};
  padding: 20px;
  display: flex;
  flex-direction: column;

  &:before,
  :after {
    bottom: 100%;
    ${({ position }) => {
      if (position === 'start') {
        return css`
          left: 24px;
        `
      }
      return css`
        right: 24px;
      `
    }}
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
    ${({ position }) => {
      if (position === 'start') {
        return css`
          margin-left: -9px;
        `
      }
      return css`
        margin-right: -9px;
      `
    }}
  }

  &:after {
    border-color: transparent transparent ${white};
    border-width: 8px;
    ${({ position }) => {
      if (position === 'start') {
        return css`
          margin-left: -8px;
        `
      }
      return css`
        margin-right: -8px;
      `
    }}
  }
`

const StyledDropdownWrapper = styled.div<{ overflowContent: boolean }>`
  flex: 1;
  ${({ overflowContent }) =>
    overflowContent &&
    css`
      overflow-y: auto;
    `};
`

const StyledDropdownFooter = styled.div`
  flex-shrink: 0;
`

interface Props {
  renderFooter?: () => JSX.Element
  position?: PositionType
  autoHeight?: boolean
  overflowContent?: boolean
}

const DropDown: FC<Props> = ({
  children,
  renderFooter,
  autoHeight,
  overflowContent = true,
  position = 'start',
}) => {
  return (
    <StyledDropdown position={position} autoHeight={autoHeight}>
      <StyledDropdownWrapper overflowContent={overflowContent}>
        {children}
      </StyledDropdownWrapper>
      {renderFooter ? (
        <StyledDropdownFooter>{renderFooter()}</StyledDropdownFooter>
      ) : null}
    </StyledDropdown>
  )
}

export default DropDown

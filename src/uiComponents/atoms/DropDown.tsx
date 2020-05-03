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
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 350px;
  height: ${({ autoHeight }) => (autoHeight ? 'auto' : '400px')};
  background: ${white};
  padding: 20px;

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

const StyledDropdownWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`

interface Props {
  renderFooter?: () => JSX.Element
  position?: PositionType
  autoHeight?: boolean
}

const DropDown: FC<Props> = ({
  children,
  renderFooter,
  autoHeight,
  position = 'start',
}) => {
  return (
    <StyledDropdown position={position} autoHeight={autoHeight}>
      <StyledDropdownWrapper>
        {children}
        {renderFooter ? <footer>{renderFooter()}</footer> : null}
      </StyledDropdownWrapper>
    </StyledDropdown>
  )
}

export default DropDown

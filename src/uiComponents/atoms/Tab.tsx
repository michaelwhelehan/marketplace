import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { fwBold } from '../../styles/typography'
import {
  primaryFontColor,
  primaryColor,
  borderColorDark,
} from '../../styles/colors'

const underLineCss = css`
  position: absolute;
  content: '';
  height: 3px;
  bottom: 0;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 100%;
  transition: 0.3s ease-in-out;
`

const StyledTab = styled.div<{ active?: boolean; underline?: boolean }>`
  position: relative;
  padding: 20px;
  cursor: pointer;
  ${fwBold};
  color: ${primaryFontColor};

  ${({ active, underline }) =>
    active &&
    css`
      color: ${primaryColor};

      ${underline &&
        `:after {
        ${underLineCss};
        background-color: ${primaryColor};
      }`}
    `}

  ${({ active, underline }) =>
    !active &&
    css`
      &:hover {
        ${underline &&
          `:after {
          ${underLineCss};
        background-color: ${borderColorDark};
        }`}
      }
    `}
`

interface Props {
  title: string
  onClick: () => void
  active?: boolean
  underline?: boolean
}

const Tab: FC<Props> = ({
  title,
  onClick,
  active = false,
  underline = false,
}) => {
  return (
    <StyledTab onClick={onClick} active={active} underline={underline}>
      {title}
    </StyledTab>
  )
}

export default Tab

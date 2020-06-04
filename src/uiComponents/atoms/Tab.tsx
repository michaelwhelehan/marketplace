import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { fwBold } from '../../styles/typography'
import { primaryFontColor, primaryColor } from '../../styles/colors'

const StyledTab = styled.div<{ active?: boolean; spacingRight?: boolean }>`
  position: relative;
  cursor: pointer;
  ${fwBold};
  color: ${primaryFontColor};

  ${({ spacingRight }) =>
    spacingRight &&
    css`
      margin-right: 20px;
    `}

  ${({ active }) =>
    active &&
    css`
      color: ${primaryColor};

      &:after {
        position: absolute;
        content: '';
        height: 3px;
        bottom: -22px;
        margin: 0 auto;
        left: 0;
        right: 0;
        background-color: ${primaryColor};
      }
    `}
`

interface Props {
  title: string
  active?: boolean
  spacingRight?: boolean
}

const Tab: FC<Props> = ({ title, active = false, spacingRight = false }) => {
  return (
    <StyledTab active={active} spacingRight={spacingRight}>
      {title}
    </StyledTab>
  )
}

export default Tab

import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { fwBold } from '../../styles/typography'
import { primaryFontColor, primaryColor } from '../../styles/colors'

const StyledTab = styled.div<{ active?: boolean; underline?: boolean }>`
  position: relative;
  padding: 20px 0;
  margin: 0 20px;
  cursor: pointer;
  ${fwBold};
  color: ${primaryFontColor};

  ${({ active, underline }) =>
    active &&
    css`
      color: ${primaryColor};

      ${underline && `border-bottom: 3px solid ${primaryColor};`}
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

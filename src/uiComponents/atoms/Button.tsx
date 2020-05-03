import styled, { css } from 'styled-components'
import { darken } from 'polished'
import { primaryColor, white } from '../../styles/colors'
import { fsS, fsXS } from '../../styles/typography'

interface StyledButtonProps {
  fullWidth?: boolean
  large?: boolean
  styleType?: string
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${({ styleType = 'primary' }) => {
    switch (styleType) {
      case 'primary':
        return primaryColor
      case 'primary-outline':
        return white
    }
  }};
  color: ${({ styleType = 'primary' }) => {
    switch (styleType) {
      case 'primary':
        return white
      case 'primary-outline':
        return primaryColor
    }
  }};
  cursor: pointer;
  border-radius: 3px;
  font-weight: bold;
  border: 1px solid ${primaryColor};
  font-size: ${({ large }) => (large ? `${fsS}px` : `${fsXS}px`)};
  padding: ${({ large }) => (large ? '15px 30px' : '10px 20px')};
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
  transition: 0.5s all ease-out;
  &:hover {
    background-color: ${({ styleType = 'primary' }) => {
      switch (styleType) {
        case 'primary':
          return darken(0.2, primaryColor)
        case 'primary-outline':
          return darken(0.2, white)
      }
    }};
  }
`

export default StyledButton

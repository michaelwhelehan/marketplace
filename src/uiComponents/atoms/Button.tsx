import styled, { css } from 'styled-components'
import { darken } from 'polished'
import { primaryColor, white, red } from '../../styles/colors'
import { fsS, fsXS } from '../../styles/typography'

export type ButtonStyleType = 'primary' | 'primary-outline' | 'error'

interface ButtonProps {
  fullWidth?: boolean
  large?: boolean
  styleType?: ButtonStyleType
}

const Button = styled.button<ButtonProps>`
  background-color: ${({ styleType = 'primary' }) => {
    switch (styleType) {
      case 'primary':
        return primaryColor
      case 'primary-outline':
        return white
      case 'error':
        return red
    }
  }};
  color: ${({ styleType = 'primary' }) => {
    switch (styleType) {
      case 'primary':
        return white
      case 'primary-outline':
        return primaryColor
      case 'error':
        return white
    }
  }};
  border: 1px solid ${primaryColor};
  border-color: ${({ styleType = 'primary' }) => {
    switch (styleType) {
      case 'primary':
        return white
      case 'primary-outline':
        return primaryColor
      case 'error':
        return white
    }
  }};
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;
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
        case 'error':
          return darken(0.2, red)
      }
    }};
  }
`

export default Button

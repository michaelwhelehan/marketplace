import styled, { css } from 'styled-components'
import { darken } from 'polished'
import { primaryColor, white } from '../../styles/colors'
import { fsS, fsM } from '../../styles/typography'

interface StyledButtonProps {
  fullWidth?: boolean
  large?: boolean
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${primaryColor};
  cursor: pointer;
  border-radius: 3px;
  color: ${white};
  font-weight: bold;
  border: ${primaryColor};
  font-size: ${({ large }) => (large ? `${fsS}px` : `${fsM}px`)};
  padding: ${({ large }) => (large ? '15px 30px' : '10px 20px')};
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
  transition: 0.5s all ease-out;
  &:hover {
    background-color: ${darken(0.2, primaryColor)};
  }
`

export default StyledButton

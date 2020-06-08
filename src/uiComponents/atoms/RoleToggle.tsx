import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { white, borderColorDark, darkGrey } from '../../styles/colors'

const Container = styled.div`
  display: flex;
  padding: 2px;
  border: 1px solid ${borderColorDark};
  border-radius: 20px;
`

const Toggle = styled.div<{ active?: boolean }>`
  padding: 10px 20px;
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      background-color: ${darkGrey};
      color: ${white};
      border-radius: 20px;
    `}
`

interface Props {}

const RoleToggle: FC<Props> = () => {
  return (
    <Container>
      <Toggle active>Employer</Toggle>
      <Toggle>Freelancer</Toggle>
    </Container>
  )
}

export default RoleToggle

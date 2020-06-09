import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { red, white } from '../../styles/colors'

export type PositionType = 'topEnd' | 'middleEnd' | 'bottomEnd'

interface Props {
  numUpdates?: number
  position?: PositionType
}

const Indicator = styled.span<{ position?: PositionType }>`
  position: absolute;
  right: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${red};
  border: 2px solid ${white};

  ${({ position }) => {
    if (position === 'topEnd') {
      return css`
        top: 0;
      `
    }

    if (position === 'middleEnd') {
      return css`
        top: 42%;
      `
    }

    if (position === 'bottomEnd') {
      return css`
        bottom: 0;
      `
    }
  }}
`

const UpdateIndicator: FC<Props> = ({ numUpdates, position = 'topEnd' }) => {
  return <Indicator position={position} />
}

export default UpdateIndicator

import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { red } from '../../styles/colors'

export type PositionType = 'topEnd' | 'middleEnd' | 'bottomEnd'

interface Props {
  numUpdates?: number
  position?: PositionType
}

const Indicator = styled.span<{ position?: PositionType }>`
  position: absolute;
  right: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${red};

  ${({ position }) => {
    if (position === 'topEnd') {
      return css`
        top: 0;
      `
    }

    if (position === 'middleEnd') {
      return css`
        top: 45%;
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

import React, { FC } from 'react'
import styled, { css } from 'styled-components'

const LoaderContainer = styled.div<{ padded?: boolean }>`
  ${({ padded }) =>
    padded &&
    css`
      padding: 20px;
    `}
`

interface Props {
  name: string
  padded?: boolean
}

const Loader: FC<Props> = ({ name, padded = false }) => {
  let Loader = require('react-content-loader')[name]
  if (!Loader) {
    Loader = require(`./custom/${name}`).default
  }

  if (!Loader) {
    throw new Error('Unknown loader')
  }

  return (
    <LoaderContainer padded={padded}>
      <Loader />
    </LoaderContainer>
  )
}

export default Loader

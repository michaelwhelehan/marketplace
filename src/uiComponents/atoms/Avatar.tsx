import React, { FC } from 'react'
import styled from 'styled-components'
import { OnlineStatusType } from '../../types/user'
import StatusIndicator from './StatusIndicator'

interface Props {
  src: string
  size: number
  onlineStatus?: OnlineStatusType
}

const StyledAvatar = styled.figure`
  position: relative;
  display: inline-block;
`

const StyledImage = styled.img<Props>`
  border-radius: 50%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`

const StyledStatusIndicator = styled(StatusIndicator)`
  position: absolute;
  bottom: 1px;
  right: 1px;
`

const Avatar: FC<Props> = ({ src, size, onlineStatus }) => {
  return (
    <StyledAvatar>
      <StyledImage src={src} size={size} />
      {onlineStatus ? (
        <StyledStatusIndicator onlineStatus={onlineStatus} />
      ) : null}
    </StyledAvatar>
  )
}

export default Avatar

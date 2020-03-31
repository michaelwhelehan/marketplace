import React, { FC } from 'react'
import styled from 'styled-components'
import { OnlineStatusType } from '../../types/user'

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

const StatusIndicator = styled.span<{ onlineStatus: OnlineStatusType }>`
  position: absolute;
  width: 16px;
  height: 16px;
  border: 3px solid white;
  border-radius: 50%;
  background-color: green;
  bottom: 1px;
  right: 1px;
`

const Avatar: FC<Props> = ({ src, size, onlineStatus }) => {
  return (
    <StyledAvatar>
      <StyledImage src={src} size={size} />
      {onlineStatus ? <StatusIndicator onlineStatus={onlineStatus} /> : null}
    </StyledAvatar>
  )
}

export default Avatar

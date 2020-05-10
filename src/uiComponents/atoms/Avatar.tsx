import React, { FC } from 'react'
import styled from 'styled-components'
import { OnlineStatusType } from '../../types/user'
import StatusIndicator from './StatusIndicator'
import { borderColorDark } from '../../styles/colors'

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
  border: 1px solid ${borderColorDark};
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`

const StyledStatusIndicator = styled(StatusIndicator)`
  position: absolute;
  bottom: 1px;
  right: 1px;
`

const Avatar: FC<Props> = ({ src, size, onlineStatus, ...props }) => {
  return (
    <StyledAvatar {...props}>
      <StyledImage src={src} size={size} loading="lazy" importance="low" />
      {onlineStatus ? (
        <StyledStatusIndicator onlineStatus={onlineStatus} />
      ) : null}
    </StyledAvatar>
  )
}

export default Avatar

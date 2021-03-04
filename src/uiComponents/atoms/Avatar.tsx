import React, { FC } from 'react'
import styled from 'styled-components'
import { OnlineStatusType } from '../../types/user'
import StatusIndicator from './StatusIndicator'
import { borderColorDark } from '../../styles/colors'
import defaultAvatar from '../../assets/images/default-avatar.png'

interface Props {
  src?: string
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
  object-fit: cover;
`

const StyledStatusIndicator = styled(StatusIndicator)`
  position: absolute;
  bottom: 1px;
  right: 1px;
`

const Avatar: FC<Props> = ({ src, size, onlineStatus, ...props }) => {
  if (!src) {
    src = defaultAvatar
  }
  return (
    <StyledAvatar {...props}>
      <StyledImage
        src={src}
        size={size}
        loading="lazy"
        importance="low"
        crossOrigin={src.indexOf("lorem") > -1 ? null : "anonymous"}
      />
      {onlineStatus ? (
        <StyledStatusIndicator onlineStatus={onlineStatus} />
      ) : null}
    </StyledAvatar>
  )
}

export default Avatar

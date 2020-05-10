import React, { FC } from 'react'
import styled from 'styled-components'
import { OnlineStatusType } from '../../types/user'

interface Props {
  onlineStatus: OnlineStatusType
}

const Indicator = styled.span<{ onlineStatus: OnlineStatusType }>`
  width: 16px;
  height: 16px;
  border: 3px solid white;
  border-radius: 50%;
  background-color: green;
`

const StatusIndicator: FC<Props> = ({ onlineStatus, ...props }) => {
  return <Indicator onlineStatus={onlineStatus} {...props} />
}

export default StatusIndicator

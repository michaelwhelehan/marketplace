import React, { FC } from 'react'
import { TaskStatus } from '../../types/task'
import styled, { css } from 'styled-components'
import { fwBold, fsXS } from '../../styles/typography'
import { primaryFontColor, primaryColor } from '../../styles/colors'
import { lighten } from 'polished'

const StatusIndicator = styled.div<{ status: TaskStatus }>`
  border-radius: 16px;
  ${fwBold};
  font-size: ${fsXS}px;
  padding: 10px;
  text-transform: uppercase;
  color ${primaryFontColor};

  ${({ status }) => {
    if (status === 'OPEN') {
      return css`
        color: ${primaryColor};
        background-color: ${lighten(0.4, primaryColor)};
      `
    }
  }}}
`

interface Props {
  status: TaskStatus
}

const TaskStatusIndicator: FC<Props> = ({ status }) => {
  function renderStatus() {
    switch (status) {
      case 'OPEN':
        return 'Open'
      case 'ASSIGNED':
        return 'In Progress'
      case 'COMPLETE':
        return 'Complete'
      default:
        return ''
    }
  }

  return <StatusIndicator status={status}>{renderStatus()}</StatusIndicator>
}

export default TaskStatusIndicator

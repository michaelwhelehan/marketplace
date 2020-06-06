import React, { FC } from 'react'
import { TaskStatusType } from '../../types/task'
import styled, { css } from 'styled-components'
import { fwBold, fsXS } from '../../styles/typography'
import { primaryFontColor, primaryColor } from '../../styles/colors'
import { lighten } from 'polished'

const StatusIndicator = styled.div<{ status: TaskStatusType }>`
  border-radius: 16px;
  ${fwBold};
  font-size: ${fsXS}px;
  padding: 10px;
  text-transform: uppercase;
  color ${primaryFontColor};

  ${({ status }) => {
    if (status === 'open') {
      return css`
        color: ${primaryColor};
        background-color: ${lighten(0.4, primaryColor)};
      `
    }
  }}}
`

interface Props {
  status: TaskStatusType
}

const TaskStatusIndicator: FC<Props> = ({ status }) => {
  function renderStatus() {
    switch (status) {
      case 'open':
        return 'Open'
      case 'in-progress':
        return 'In Progress'
      case 'complete':
        return 'Complete'
      default:
        return ''
    }
  }

  return <StatusIndicator status={status}>{renderStatus()}</StatusIndicator>
}

export default TaskStatusIndicator

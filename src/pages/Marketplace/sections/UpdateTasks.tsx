import React, { FC } from 'react'
import styled from 'styled-components'
import { borderColor } from '../../../styles/colors'
import Button from '../../../uiComponents/atoms/Button'

const UpdateTaskContainer = styled.div`
  position: absolute;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid ${borderColor};
  z-index: 996;
  padding: 10px;
  text-align: center;
`

interface Props {
  numNewTasks: number
  onLoadNewTasks: () => void
}

const UpdateTasks: FC<Props> = ({ numNewTasks, onLoadNewTasks }) => {
  return (
    <UpdateTaskContainer>
      <Button onClick={onLoadNewTasks}>
        {numNewTasks} NEW JOB{numNewTasks > 1 ? 'S' : ''}
      </Button>
    </UpdateTaskContainer>
  )
}

export default UpdateTasks

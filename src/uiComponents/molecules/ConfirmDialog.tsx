import React, { FC, MouseEvent } from 'react'
import styled from 'styled-components'
import Modal from './Modal'
import Button from '../atoms/Button'

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  > ${Button}:first-child {
    margin-right: 10px;
  }
`

interface Props {
  title: string
  onConfirm: (event: MouseEvent) => void
  onClose: (event: MouseEvent) => void
}

const ConfirmDialog: FC<Props> = ({ title, onConfirm, onClose }) => {
  return (
    <Modal title={title} onClose={onClose} autoHeight>
      <ButtonContainer>
        <Button onClick={onConfirm}>Confirm</Button>
        <Button styleType="primary-outline" onClick={onClose}>
          Cancel
        </Button>
      </ButtonContainer>
    </Modal>
  )
}

export default ConfirmDialog

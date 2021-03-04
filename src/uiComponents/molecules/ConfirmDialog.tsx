import React, { FC, MouseEvent } from 'react'
import styled from 'styled-components'
import Modal from './Modal'
import Button from '../atoms/Button'

const BodyParagraph = styled.p`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  > ${Button}:first-child {
    margin-right: 10px;
  }
`

interface Props {
  title: string
  body?: string
  onConfirm: (event: MouseEvent) => void
  onClose: (event: MouseEvent) => void
}

const ConfirmDialog: FC<Props> = ({ title, body, onConfirm, onClose }) => {
  return (
    <Modal title={title} onClose={onClose} autoHeight>
      {body ? <BodyParagraph>{body}</BodyParagraph> : null}
      <ButtonContainer>
        <Button styleType="primary-outline" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={onConfirm}>Confirm</Button>
      </ButtonContainer>
    </Modal>
  )
}

export default ConfirmDialog

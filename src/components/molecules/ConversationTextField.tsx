import React, { FC } from 'react'
import TextField from '../atoms/TextField'

interface Props {
  memberName: string
}

const ConversationTextField: FC<Props> = ({ memberName }) => {
  return (
    <TextField placeholder={`Write a message to ${memberName}`} fullWidth />
  )
}

export default ConversationTextField

import React, { FC } from 'react'
import TextField from '../../atoms/TextField'

export interface ConversationTextFieldProps {
  memberName: string
  onMessageCreated: (message: String) => void
}

const ConversationTextField: FC<ConversationTextFieldProps> = ({
  memberName,
  onMessageCreated,
}) => {
  return (
    <TextField
      placeholder={`Write a message to ${memberName}`}
      fullWidth
      onEnter={onMessageCreated}
    />
  )
}

export default ConversationTextField

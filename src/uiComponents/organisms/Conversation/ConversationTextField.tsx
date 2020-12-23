import React, { FC, useState, useCallback } from 'react'
import TextField from '../../atoms/TextField'

export interface ConversationTextFieldProps {
  memberName: string
  onMessageCreated: (message: string) => void
}

const ConversationTextField: FC<ConversationTextFieldProps> = ({
  memberName,
  onMessageCreated,
}) => {
  const [value, setValue] = useState<string>('')
  const handleKeyPress = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        onMessageCreated(value)
        setValue('')
      }
    },
    [onMessageCreated, value],
  )

  return (
    <TextField
      placeholder={`Write a message to ${memberName}`}
      fullWidth
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      onKeyDown={handleKeyPress}
    />
  )
}

export default ConversationTextField

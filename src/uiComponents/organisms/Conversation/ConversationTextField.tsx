import React, { FC, useState, useCallback } from 'react'
import styled from 'styled-components'
import { borderColor, primaryFontColor } from '../../../styles/colors'
import { ConversationPositionType } from '../../../types/conversation'
import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'
import TextAreaField from '../../atoms/TextAreaField'
import TextField from '../../atoms/TextField'

const TextFieldContainer = styled.div``

const TextFieldBelow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${borderColor};
`

const StartIcons = styled.div`
  display: flex;

  > span:first-child {
    margin-right: 5px;
  }
`

export interface ConversationTextFieldProps {
  textFieldPlaceholder: string
  position: ConversationPositionType
  onMessageCreated: (message: string) => void
}

const ConversationTextField: FC<ConversationTextFieldProps> = ({
  textFieldPlaceholder,
  position,
  onMessageCreated,
}) => {
  const [value, setValue] = useState<string>('')

  const handleSendMessage = useCallback(() => {
    if (value) {
      onMessageCreated(value)
      setValue('')
    }
  }, [onMessageCreated, value])

  const handleKeyPress = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        handleSendMessage()
      }
    },
    [handleSendMessage],
  )

  return (
    <TextFieldContainer>
      {position === 'topDown' ? (
        <TextAreaField
          placeholder={textFieldPlaceholder}
          short
          fullWidth
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
      ) : (
        <TextField
          placeholder={textFieldPlaceholder}
          fullWidth
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          onKeyDown={handleKeyPress}
        />
      )}
      <TextFieldBelow>
        <StartIcons>
          <span>
            <Icon name="MdInsertEmoticon" size={25} color={primaryFontColor} />
          </span>
          <span>
            <Icon name="MdAttachFile" size={25} color={primaryFontColor} />
          </span>
        </StartIcons>
        <Button onClick={handleSendMessage}>Send</Button>
      </TextFieldBelow>
    </TextFieldContainer>
  )
}

export default ConversationTextField

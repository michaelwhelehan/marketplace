import React, { FC, useCallback, MutableRefObject, Dispatch } from 'react'
import { EditorState, convertToRaw } from 'draft-js'
import styled from 'styled-components'
import { borderColor, primaryFontColor } from '../../../styles/colors'
import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'
import RichTextField, { emojiPlugin } from '../../atoms/RichTextField'
import Editor from '@draft-js-plugins/editor/lib/Editor'

const TextFieldContainer = styled.div`
  padding: 10px;
  border: 2px solid ${borderColor};
  border-radius: 4px;
`

const TextFieldBelow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`

const StartIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > span:first-child {
    margin-right: 5px;
  }
`

const EmojiContainer = styled.span`
  display: flex;

  button {
    padding: 0;
    border: none;
    height: auto;
    width: auto;
    line-height: 10px;
    font-size: 35px;
    border-radius: 0;

    &:hover,
    :focus {
      background: none;
    }
  }
`

export interface ConversationTextFieldProps {
  editorRef: MutableRefObject<Editor>
  editorValue: EditorState
  setEditorValue: Dispatch<EditorState>
  textFieldPlaceholder: string
  onMessageCreated: (message: string) => void
}

const ConversationTextField: FC<ConversationTextFieldProps> = ({
  editorRef,
  editorValue,
  setEditorValue,
  textFieldPlaceholder,
  onMessageCreated,
}) => {
  const handleSendMessage = useCallback(() => {
    if (editorValue) {
      onMessageCreated(convertToRaw(editorValue.getCurrentContent()))
    }
  }, [onMessageCreated, editorValue])

  // const handleKeyPress = useCallback(
  //   (e) => {
  //     if (e.keyCode === 13) {
  //       handleSendMessage()
  //     }
  //   },
  //   [handleSendMessage],
  // )

  return (
    <TextFieldContainer>
      <RichTextField
        ref={editorRef}
        placeholder={textFieldPlaceholder}
        mentionsEnabled
        emojisEnabled
        value={editorValue}
        onChange={(editorState) => setEditorValue(editorState)}
      />
      <TextFieldBelow>
        <StartIcons>
          <EmojiContainer>
            <emojiPlugin.EmojiSelect />
          </EmojiContainer>
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

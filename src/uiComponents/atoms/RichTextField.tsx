import React, { FC, MutableRefObject } from 'react'
import { Editor, EditorState, RawDraftContentState } from 'react-draft-wysiwyg'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

interface StyledProps {
  fullWidth?: boolean
  paddingStart?: number
  hasError?: boolean
}

export interface TextProps extends StyledProps {
  placeholder?: string
  type?: string
  autoFocus?: boolean
  defaultValue?: RawDraftContentState
  name?: string
  hasError?: boolean
  ref?: any
  readOnly?: boolean
  short?: boolean
}

export interface TextFieldProps extends TextProps {
  onChange?: (editorState: EditorState) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const RichTextField: FC<TextFieldProps> = React.forwardRef<
  Editor,
  TextFieldProps
>(({ onChange, onKeyDown, defaultValue, ...props }, ref) => {
  return (
    <Editor
      editorRef={(editorRef: Editor) =>
        ((ref as MutableRefObject<Editor>).current = editorRef)
      }
      initialContentState={defaultValue}
      onEditorStateChange={onChange}
      {...props}
    />
  )
})

export default RichTextField

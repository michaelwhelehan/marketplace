import {
  Component,
  forwardRef,
  FC,
  useMemo,
  useState,
  useCallback,
} from 'react'
import { EditorState } from 'draft-js'
import Editor from '@draft-js-plugins/editor'
import createMentionPlugin, {
  defaultSuggestionsFilter,
  MentionData,
} from '@draft-js-plugins/mention'
import createEmojiPlugin from '@draft-js-plugins/emoji'
import styled from 'styled-components'

import '@draft-js-plugins/mention/lib/plugin.css'
import '@draft-js-plugins/emoji/lib/plugin.css'
import { primaryFontColor } from '../../styles/colors'

export const emojiPlugin = createEmojiPlugin({
  useNativeArt: true,
})

const EditorContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  cursor: text;

  .public-DraftEditorPlaceholder-root {
    position: absolute;
    pointer-events: none;
    color: ${primaryFontColor};
  }

  .public-DraftEditor-content {
    min-height: 20px;
    max-height: 150px;
    overflow: auto;
  }
`

interface StyledProps {
  fullWidth?: boolean
  paddingStart?: number
  hasError?: boolean
}

export interface RichTextFieldProps {
  mentionsEnabled?: boolean
  emojisEnabled?: boolean
  placeholder?: string
  ref?: any
  name?: string
  value?: EditorState
  onChange?: (editorState: EditorState) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const mentions: MentionData[] = [
  {
    id: 'mwhelehan',
    name: 'Michael Whelehan',
    avatar:
      'https://s3.eu-central-1.amazonaws.com/staging.taskdropper.com/media/avatars/mike.png',
  },
  {
    id: 'markbryson',
    name: 'Mark Bryson',
    avatar:
      'https://s3.eu-central-1.amazonaws.com/staging.taskdropper.com/media/avatars/342c965b-60de-4363-a8ae-c29ed55ea9f9.png',
  },
]

class ErrorBoundary extends Component {
  componentDidCatch(error, errorInfo) {
    this.forceUpdate()
  }

  render() {
    return this.props.children
  }
}

const RichTextField: FC<RichTextFieldProps> = forwardRef<
  Editor,
  RichTextFieldProps
>(
  (
    {
      onChange,
      value,
      mentionsEnabled = false,
      emojisEnabled = false,
      ...props
    },
    ref,
  ) => {
    const { MentionSuggestions, EmojiSuggestions, plugins } = useMemo(() => {
      const mentionPlugin = createMentionPlugin()
      const { MentionSuggestions } = mentionPlugin
      const { EmojiSuggestions } = emojiPlugin
      const plugins = [
        mentionsEnabled && mentionPlugin,
        emojisEnabled && emojiPlugin,
      ].filter(Boolean)
      return { plugins, MentionSuggestions, EmojiSuggestions }
    }, [mentionsEnabled, emojisEnabled])
    const [showMentions, setShowMentions] = useState<boolean>(false)
    const [suggestions, setSuggestions] = useState<MentionData[]>(mentions)

    const handleShowMentions = useCallback((show: boolean) => {
      setShowMentions(show)
    }, [])

    const handleMentionsSearchChange = useCallback(
      ({ value }: { value: string }) => {
        setSuggestions(defaultSuggestionsFilter(value, mentions))
      },
      [],
    )

    return (
      <EditorContainer>
        <ErrorBoundary>
          <Editor
            editorRef={ref}
            editorKey="editor"
            editorState={value}
            onChange={onChange}
            plugins={plugins}
            {...props}
          />
        </ErrorBoundary>
        {mentionsEnabled && (
          <MentionSuggestions
            open={showMentions}
            onOpenChange={handleShowMentions}
            suggestions={suggestions}
            onSearchChange={handleMentionsSearchChange}
            onAddMention={() => {
              // get the mention object selected
            }}
          />
        )}
        {emojisEnabled && <EmojiSuggestions />}
      </EditorContainer>
    )
  },
)

export default RichTextField

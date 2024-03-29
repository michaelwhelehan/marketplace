import React, {
  FC,
  useEffect,
  useState,
  MutableRefObject,
  Dispatch,
  useCallback,
} from 'react'
import styled from 'styled-components'
import {
  EditorState,
  convertFromRaw,
  convertToRaw,
  RawDraftContentState,
} from 'draft-js'
import { convertToHTML } from 'draft-convert'
import {
  borderColor,
  darkGrey,
  featherGrey,
  primaryColor,
  primaryFontColor,
} from '../../../styles/colors'
import Avatar from '../../atoms/Avatar'
import { differenceSeconds, fromNow } from '../../../utils/date'
import { fsXXS, fsXXXS, fwBold } from '../../../styles/typography'
import UserName from '../../atoms/UserName'
import { ConversationMessage as ConversationMessageType } from '../../../components/Conversation/gqlTypes/ConversationMessage'
import { lighten } from 'polished'
import { Conversation_conversation } from '../../../components/Conversation/gqlTypes/Conversation'
import Icon from '../../atoms/Icon'
import DropDown from '../../atoms/DropDown'
import Button from '../../atoms/Button'
import { CellMeasurerCache, List } from 'react-virtualized'
import usePrevious from '../../../hooks/usePrevious'
import useConfirmDialog from '../../../hooks/useConfirmDialog'
import RichTextField from '../../atoms/RichTextField'
import { useResizeDetector } from 'react-resize-detector'

const MessageContainerOuter = styled.div`
  height: 100%;
  padding-top: 15px;
  padding-right: 20px;
  padding-bottom: 15px;
`

const MessageContainer = styled.div`
  height: 100%;
  display: flex;
`

const MessageMemberAvatar = styled.div`
  width: 60px;
  padding-right: 10px;
`

const MessageContent = styled.div`
  flex: 1;
`

const MessageMember = styled.div`
  display: flex;
  padding-bottom: 5px;
`

const MessageTimestamp = styled.span`
  padding-left: 10px;
  padding-top: 2px;
  font-size: ${fsXXS}px;
  color: ${primaryFontColor};
`

const MessageReply = styled.span`
  padding-left: 10px;
  padding-top: 2px;
  ${fwBold};
  font-size: ${fsXXS}px;
  color: ${primaryColor};
  cursor: pointer;
`

const MessageMore = styled.span`
  cursor: pointer;
  position: relative;
  margin-top: -4px;
  padding-left: 10px;

  &:hover {
    > svg {
      fill: ${darkGrey};
    }
  }
`

const MessageMoreOption = styled.p`
  ${fwBold};
  padding: 10px;

  &:hover {
    background: ${featherGrey};
    border-radius: 4px;
  }
`

const PosterBadge = styled.span`
  height: 100%;
  margin-left: 10px;
  border-radius: 16px;
  ${fwBold};
  font-size: ${fsXXXS}px;
  padding: 5px;
  text-transform: uppercase;
  color: ${primaryColor};
  background-color: ${lighten(0.4, primaryColor)};
`

const MessageText = styled.div`
  line-height: 22px;
`

const UserMentionLink = styled.a`
  text-decoration: none;
  color: ${primaryColor};
  ${fwBold};

  &:hover {
    text-decoration: underline;
  }
`

const TextFieldContainer = styled.div`
  padding: 10px;
  border: 2px solid ${borderColor};
  border-radius: 4px;
`

const ButtonContainer = styled.div`
  display: flex;
  padding-top: 10px;

  & > button:first-child,
  span:first-child {
    margin-right: 5px;
  }
`

function isTaskPoster(
  messageSentById: string,
  conversationOwnerId: string,
): boolean {
  return messageSentById === conversationOwnerId
}

function isMessageAuthor(
  messageSentById: string,
  currentUserId: string,
): boolean {
  return messageSentById === currentUserId
}

export type ConversationMessageDeleteType = ({
  messageId,
}: {
  messageId: string
}) => void

interface ConversationMessageDisplayProps {
  currentUserId: string
  conversation: Conversation_conversation
  message: ConversationMessageType
  setIsEditing: Dispatch<boolean>
  onConversationMessageDelete: ConversationMessageDeleteType
  onReplyClick: () => void
}

const ConversationMessageDisplay: FC<ConversationMessageDisplayProps> = ({
  message,
  conversation,
  currentUserId,
  setIsEditing,
  onConversationMessageDelete,
  onReplyClick,
}) => {
  const [showMoreOpen, setShowMoreOpen] = useState<boolean>(false)
  const currentUserIsMessageAuthor = isMessageAuthor(
    message.sentBy.id,
    currentUserId,
  )
  const showTaskPosterBadge =
    conversation.category === 'TASK' &&
    isTaskPoster(message.sentBy.id, conversation.task.ownerId)

  const handleDelete = async () => {
    onConversationMessageDelete({ messageId: message.id })
  }

  const { renderedDialog, setShowConfirmDialog } = useConfirmDialog({
    title: 'Delete message',
    body: 'Are you sure you wish to delete this message?',
    onConfirm: handleDelete,
  })

  return (
    <MessageContainerOuter>
      <MessageContainer>
        <MessageMemberAvatar>
          <Avatar
            src={message.sentBy.avatarUrl}
            size={50}
            onlineStatus="online"
          />
        </MessageMemberAvatar>
        <MessageContent>
          <MessageMember>
            <UserName as="span">
              {message.sentBy.firstName} {message.sentBy.lastName}
            </UserName>
            {showTaskPosterBadge && <PosterBadge>Poster</PosterBadge>}
            <MessageTimestamp>{fromNow(message.created)}</MessageTimestamp>
            {differenceSeconds(message.modified, message.created) > 0 && (
              <MessageTimestamp>edited</MessageTimestamp>
            )}
            <MessageReply onClick={onReplyClick}>Reply</MessageReply>
            <MessageMore
              onClick={() =>
                setShowMoreOpen(
                  (prevShowMoreOpen: boolean) => !prevShowMoreOpen,
                )
              }
            >
              <Icon name="MdMoreHoriz" size={25} color={primaryFontColor} />
              {showMoreOpen && (
                <DropDown autoHeight position="start">
                  {currentUserIsMessageAuthor ? (
                    <>
                      <MessageMoreOption onClick={() => setIsEditing(true)}>
                        Edit
                      </MessageMoreOption>
                      <MessageMoreOption
                        onClick={() => setShowConfirmDialog(true)}
                      >
                        Delete
                      </MessageMoreOption>
                    </>
                  ) : (
                    <MessageMoreOption>Report this message</MessageMoreOption>
                  )}
                </DropDown>
              )}
            </MessageMore>
          </MessageMember>
          {message.messageType === 'TEXT' && (
            <MessageText
              dangerouslySetInnerHTML={{
                __html: convertToHTML({
                  entityToHTML: (entity: any, originalText: string) => {
                    if (entity.type === 'mention') {
                      return (
                        <UserMentionLink
                          target="_blank"
                          rel="noreferrer"
                          href={`/profile/${entity.data.mention.id}`}
                        >
                          {originalText}
                        </UserMentionLink>
                      )
                    }
                    return originalText
                  },
                })(convertFromRaw(message.rawBody)),
              }}
            />
          )}
          {message.messageType === 'MEDIA' && (
            <img width={640} height={480} src={message.url} alt="" />
          )}
        </MessageContent>
        {renderedDialog}
      </MessageContainer>
    </MessageContainerOuter>
  )
}

export type ConversationMessageEditType = ({
  messageId,
  body,
}: {
  messageId: string
  body: RawDraftContentState
}) => void

interface ConversationMessageEditProps {
  message: ConversationMessageType
  setIsEditing: Dispatch<boolean>
  onConversationMessageEdit: ConversationMessageEditType
  recomputeListSize: () => void
}

const ConversationMessageEdit: FC<ConversationMessageEditProps> = ({
  message,
  setIsEditing,
  onConversationMessageEdit,
  recomputeListSize,
}) => {
  const { height, ref } = useResizeDetector()
  const lastHeight = usePrevious(height)

  const [editorValue, setEditorValue] = useState<EditorState>(
    EditorState.moveFocusToEnd(
      EditorState.push(
        EditorState.createEmpty(),
        convertFromRaw(message.rawBody),
      ),
    ),
  )

  useEffect(() => {
    if (height !== lastHeight) {
      recomputeListSize()
    }
  }, [height, lastHeight, recomputeListSize])

  return (
    <MessageContainerOuter>
      <MessageContainer>
        <MessageMemberAvatar>
          <Avatar
            src={message.sentBy.avatarUrl}
            size={50}
            onlineStatus="online"
          />
        </MessageMemberAvatar>
        <MessageContent>
          <form
            onSubmit={(e: any) => {
              e.preventDefault()
              onConversationMessageEdit({
                messageId: message.id,
                body: convertToRaw(editorValue.getCurrentContent()),
              })
              setIsEditing(false)
            }}
          >
            {message.messageType === 'TEXT' && (
              <TextFieldContainer ref={ref as any}>
                <RichTextField
                  value={editorValue}
                  onChange={(editorState) => setEditorValue(editorState)}
                  mentionsEnabled
                  placeholder="Edit your message"
                />
              </TextFieldContainer>
            )}
            {message.messageType === 'MEDIA' && (
              <img width={640} height={480} src={message.url} alt="" />
            )}
            <ButtonContainer>
              <Button
                as="span"
                styleType="primary-outline"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
              <Button>Update</Button>
            </ButtonContainer>
          </form>
        </MessageContent>
      </MessageContainer>
    </MessageContainerOuter>
  )
}

interface Props {
  listRef: MutableRefObject<List>
  cacheRef: MutableRefObject<CellMeasurerCache>
  index: number
  currentUserId: string
  conversation: Conversation_conversation
  message: ConversationMessageType
  onConversationMessageEdit: ({
    messageId,
    body,
  }: {
    messageId: string
    body: RawDraftContentState
  }) => void
  onConversationMessageDelete: ({ messageId }: { messageId: string }) => void
  onReplyClick: () => void
}

const ConversationMessage: FC<Props> = ({
  listRef,
  cacheRef,
  index,
  currentUserId,
  conversation,
  message,
  onConversationMessageEdit,
  onConversationMessageDelete,
  onReplyClick,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const wasEditing = usePrevious(isEditing)

  const recomputeListSize = useCallback(() => {
    cacheRef.current.clear(index, 0)
    listRef.current.recomputeGridSize({ rowIndex: index, columnIndex: 0 })
  }, [cacheRef, index, listRef])

  useEffect(() => {
    if (wasEditing !== undefined && wasEditing !== isEditing) {
      recomputeListSize()
    }
  }, [isEditing, wasEditing, recomputeListSize])

  useEffect(() => {
    if (differenceSeconds(message.modified, message.created) > 0) {
      recomputeListSize()
    }
  }, [message.created, message.modified, recomputeListSize])

  return isEditing ? (
    <ConversationMessageEdit
      message={message}
      setIsEditing={setIsEditing}
      onConversationMessageEdit={onConversationMessageEdit}
      recomputeListSize={recomputeListSize}
    />
  ) : (
    <ConversationMessageDisplay
      onReplyClick={onReplyClick}
      message={message}
      conversation={conversation}
      currentUserId={currentUserId}
      setIsEditing={setIsEditing}
      onConversationMessageDelete={onConversationMessageDelete}
    />
  )
}

export default ConversationMessage

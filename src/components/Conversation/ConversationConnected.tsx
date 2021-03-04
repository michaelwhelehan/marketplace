import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import Conversation from '../../uiComponents/organisms/Conversation/Conversation'
import {
  ConversationPositionType,
  ConversationScrollType,
  ConversationCategory,
} from '../../types/conversation'
import { useGetConversationQuery } from './queries'
import {
  useConversationMessageCreateMutation,
  useConversationMessageDeleteMutation,
  useConversationMessageUpdateMutation,
} from './mutations'
import { useAuth } from '../../services'
import { substractMinutes } from '../../utils/date'
import useConversationSubscribeMore from './useConversationSubscribeMore'
import { useHistory } from 'react-router-dom'
import { EditorState, ContentState, Modifier } from 'draft-js'
import { MentionData } from '@draft-js-plugins/mention'
import Editor from '@draft-js-plugins/editor/lib/Editor'
import { ConversationMemberProfile_publicUser } from './gqlTypes/ConversationMemberProfile'

function addMention(
  editorState: EditorState,
  mention: MentionData,
  entityMutability: 'SEGMENTED' | 'IMMUTABLE' | 'MUTABLE',
): EditorState {
  const contentStateWithEntity = editorState
    .getCurrentContent()
    .createEntity('mention', entityMutability, {
      mention,
    })
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey()

  const currentSelectionState = editorState.getSelection()

  let textWithEntity = Modifier.insertText(
    editorState.getCurrentContent(),
    currentSelectionState,
    mention.name,
    null,
    entityKey,
  )

  textWithEntity = Modifier.insertText(
    textWithEntity,
    textWithEntity.getSelectionAfter(),
    ' ',
  )

  const newEditorState = EditorState.push(
    editorState,
    textWithEntity,
    'insert-fragment',
  )
  return EditorState.moveFocusToEnd(newEditorState)
}

interface Props {
  conversationCategory: ConversationCategory
  conversationId?: string
  conversationMemberUsername?: string
  conversationMember?: ConversationMemberProfile_publicUser
  position: ConversationPositionType
  scrollType: ConversationScrollType
  textFieldPlaceholder?: string
  setCount?: (count: number) => void
}

const ConversationConnected: FC<Props> = ({
  conversationCategory,
  conversationId,
  conversationMemberUsername,
  conversationMember,
  position,
  scrollType,
  setCount,
  textFieldPlaceholder = 'Send a message',
}) => {
  const editorRef = useRef<Editor>()
  const [editorValue, setEditorValue] = useState<EditorState>(
    EditorState.createEmpty(),
  )
  const history = useHistory()
  const { user } = useAuth()
  const {
    data,
    loading,
    loadMore,
    subscribeMore,
    refetch,
  } = useGetConversationQuery({
    variables: {
      category: conversationCategory,
      id: conversationId,
      username: conversationMemberUsername,
      pageSize: 100,
    },
    subscriptionVariables: {
      category: conversationCategory,
      conversationId,
      username: conversationMemberUsername,
    },
  })
  const conversation = data?.conversation
  const hasData = conversation?.conversationFeed?.edges?.length > 0
  const createConversationMessage = useConversationMessageCreateMutation({
    conversationId: conversationId || conversation?.id,
    position,
  })
  const updateConversationMessage = useConversationMessageUpdateMutation()
  const deleteConversationMessage = useConversationMessageDeleteMutation({
    conversationId,
  })

  useEffect(() => {
    if (setCount && data?.conversation?.conversationFeed?.totalCount) {
      setCount(data?.conversation?.conversationFeed?.totalCount)
    }
  }, [data?.conversation?.conversationFeed?.totalCount, setCount])

  useConversationSubscribeMore({ subscribeMore, position })

  const handleReplyClick = useCallback(() => {
    const editorState = EditorState.push(
      editorValue,
      ContentState.createFromText(''),
    )
    const mention = addMention(
      editorState,
      {
        name: 'Matthew Russell',
        link: 'https://twitter.com/mrussell247',
        avatar:
          'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg',
        id: '123',
      },
      'SEGMENTED',
    )
    setEditorValue(mention)
  }, [editorValue])

  return (
    <Conversation
      position={position}
      scrollType={scrollType}
      messagesLoading={loading && !hasData}
      currentUserId={user?.id}
      conversation={conversation}
      member={conversationMember}
      textFieldPlaceholder={textFieldPlaceholder}
      messagesLoadAmount={100}
      editorRef={editorRef}
      editorValue={editorValue}
      setEditorValue={setEditorValue}
      onReplyClick={handleReplyClick}
      onMessageCreated={async (message) => {
        if (!user) {
          history.push('/login')
          return
        }

        setEditorValue(EditorState.createEmpty())
        await createConversationMessage({
          variables: {
            input: {
              member: conversationMember?.id,
              conversation: conversation.id,
              messageType: 'text',
              rawBody: message,
            },
          },
          optimisticResponse: {
            conversationMessageCreate: {
              __typename: 'ConversationMessageCreate',
              conversationMessage: {
                __typename: 'ConversationMessage',
                id: Math.round(Math.random() * -1000000).toString(),
                sentBy: user,
                rawBody: message,
                messageType: 'TEXT' as any,
                created: new Date(),
                modified: new Date(),
                url: null,
              },
            },
          },
        })
        if (!conversation) {
          refetch()
        }
      }}
      onConversationMessageEdit={({ messageId, body }) => {
        updateConversationMessage({
          variables: { id: messageId, input: { rawBody: body } },
          optimisticResponse: {
            conversationMessageUpdate: {
              __typename: 'ConversationMessageUpdate',
              conversationMessage: {
                __typename: 'ConversationMessage',
                id: messageId,
                sentBy: user,
                rawBody: body,
                messageType: 'TEXT' as any,
                created: substractMinutes(new Date(), 5),
                modified: new Date(),
                url: null,
              },
            },
          },
        })
      }}
      onConversationMessageDelete={({ messageId }) => {
        deleteConversationMessage({
          variables: { id: messageId },
          optimisticResponse: {
            conversationMessageDelete: {
              __typename: 'ConversationMessageDelete',
              conversationMessage: {
                __typename: 'ConversationMessage',
                id: messageId,
              },
            },
          },
        })
      }}
      onLoadMoreMessages={async () => {
        if (data?.conversation?.conversationFeed?.pageInfo?.hasNextPage) {
          loadMore(
            (prev, next) => ({
              ...prev,
              conversationFeed: {
                ...prev.conversation.conversationFeed,
                edges: [
                  ...prev.conversation.conversationFeed.edges,
                  ...next.conversation.conversationFeed.edges,
                ],
                pageInfo: next.conversation.conversationFeed.pageInfo,
              },
            }),
            {
              after: data.conversation.conversationFeed.pageInfo?.endCursor,
            },
          )
        }
      }}
    />
  )
}

export default ConversationConnected

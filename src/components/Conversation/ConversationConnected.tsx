import React, { FC, useEffect } from 'react'
import Conversation from '../../uiComponents/organisms/Conversation/Conversation'
import {
  ConversationPositionType,
  ConversationScrollType,
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

interface Props {
  conversationId: string
  position: ConversationPositionType
  scrollType: ConversationScrollType
  textFieldPlaceholder?: string
  setCount?: (count: number) => void
}

const ConversationConnected: FC<Props> = ({
  conversationId,
  position,
  scrollType,
  setCount,
  textFieldPlaceholder = 'Send a message',
}) => {
  const history = useHistory()
  const { user } = useAuth()
  const { data, loading, loadMore, subscribeMore } = useGetConversationQuery({
    variables: {
      id: conversationId,
      pageSize: 100,
    },
    subscriptionVariables: { conversationId },
  })
  const createConversationMessage = useConversationMessageCreateMutation({
    conversationId,
    position,
  })
  const updateConversationMessage = useConversationMessageUpdateMutation()
  const deleteConversationMessage = useConversationMessageDeleteMutation({
    conversationId,
  })
  const hasData = data?.conversation?.conversationFeed?.edges?.length > 0

  useEffect(() => {
    if (setCount && data?.conversation?.conversationFeed?.totalCount) {
      setCount(data?.conversation?.conversationFeed?.totalCount)
    }
  }, [data?.conversation?.conversationFeed?.totalCount, setCount])

  useConversationSubscribeMore({ subscribeMore, position })

  return (
    <Conversation
      position={position}
      scrollType={scrollType}
      messagesLoading={loading && !hasData}
      currentUserId={user?.id}
      conversation={data?.conversation}
      textFieldPlaceholder={textFieldPlaceholder}
      messagesLoadAmount={100}
      onMessageCreated={(message) => {
        if (!user) {
          history.push('/login')
          return
        }

        createConversationMessage({
          variables: { conversationId, messageType: 'text', body: message },
          optimisticResponse: {
            conversationMessageCreate: {
              __typename: 'ConversationMessageCreate',
              conversationMessage: {
                __typename: 'ConversationMessage',
                id: Math.round(Math.random() * -1000000).toString(),
                sentBy: user,
                body: message,
                messageType: 'TEXT' as any,
                created: new Date(),
                modified: new Date(),
                url: null,
              },
            },
          },
        })
      }}
      onConversationMessageEdit={({ messageId, body }) => {
        updateConversationMessage({
          variables: { id: messageId, body },
          optimisticResponse: {
            conversationMessageUpdate: {
              __typename: 'ConversationMessageUpdate',
              conversationMessage: {
                __typename: 'ConversationMessage',
                id: messageId,
                sentBy: user,
                body,
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

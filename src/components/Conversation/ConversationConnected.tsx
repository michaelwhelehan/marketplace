import React, { FC, useEffect, useState } from 'react'
import Conversation from '../../uiComponents/organisms/Conversation/Conversation'
import {
  ConversationPositionType,
  ConversationScrollType,
} from '../../types/conversation'
import {
  useGetConversationQuery,
  conversationMessageCreatedSubscription,
} from './queries'
import { useConversationMessageCreateMutation } from './mutations'
import {
  Conversation_conversation_conversationFeed_edges,
  Conversation_conversation_conversationFeed_edges_node,
} from './gqlTypes/Conversation'
import { EditConversationMessage_conversationMessage } from './gqlTypes/EditConversationMessage'

interface Props {
  conversationId: string
  position: ConversationPositionType
  scrollType: ConversationScrollType
  setCount?: (count: number) => void
}

const ConversationConnected: FC<Props> = ({
  conversationId,
  position,
  scrollType,
  setCount,
}) => {
  const [subscribed, setSubscribed] = useState<boolean>(false)
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
  const hasData = data?.conversation?.conversationFeed?.edges?.length > 0

  useEffect(() => {
    if (data?.conversation?.conversationFeed?.totalCount) {
      setCount(data?.conversation?.conversationFeed?.totalCount)
    }
  }, [data?.conversation?.conversationFeed?.totalCount, setCount])

  useEffect(() => {
    if (subscribeMore && !subscribed) {
      subscribeMore(conversationMessageCreatedSubscription, (prev, next) => {
        const type = next.conversationSubscription.__typename
        const prevConversationFeed = prev.conversation.conversationFeed
        switch (type) {
          case 'CreateConversationMessagePayload':
            const edges: Conversation_conversation_conversationFeed_edges[] =
              position === 'topDown'
                ? [
                    {
                      __typename: 'ConversationMessageCountableEdge',
                      node: next.conversationSubscription
                        .conversationMessage as Conversation_conversation_conversationFeed_edges_node,
                    },
                    ...prevConversationFeed.edges,
                  ]
                : [
                    ...prevConversationFeed.edges,
                    {
                      __typename: 'ConversationMessageCountableEdge',
                      node: next.conversationSubscription
                        .conversationMessage as Conversation_conversation_conversationFeed_edges_node,
                    },
                  ]
            return {
              ...prev,
              conversation: {
                ...prev.conversation,
                conversationFeed: {
                  ...prevConversationFeed,
                  totalCount: prevConversationFeed.totalCount + 1,
                  edges,
                },
              },
            }
          case 'DeleteConversationMessagePayload':
            return {
              ...prev,
              conversation: {
                ...prev.conversation,
                conversationFeed: {
                  ...prevConversationFeed,
                  totalCount: prevConversationFeed.totalCount - 1,
                  edges: prevConversationFeed.edges.filter(
                    (edge) =>
                      edge.node.id !==
                      next.conversationSubscription.conversationMessage.id,
                  ),
                },
              },
            }
        }
      })
      setSubscribed(true)
    }
  }, [subscribeMore, subscribed, position])

  return (
    <Conversation
      position={position}
      scrollType={scrollType}
      messagesLoading={loading && !hasData}
      messageList={data?.conversation?.conversationFeed?.edges}
      messagesLoadAmount={100}
      memberName="Michael W"
      onMessageCreated={(message) => {
        createConversationMessage({
          variables: { conversationId, messageType: 'text', body: message },
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

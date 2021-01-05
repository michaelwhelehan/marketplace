import { DocumentNode } from 'graphql'
import { useState, useEffect } from 'react'

import { ConversationPositionType } from '../../types/conversation'
import { addEdge } from '../../utils/graphql'
import {
  Conversation,
  Conversation_conversation_conversationFeed_edges,
  Conversation_conversation_conversationFeed_edges_node,
} from './gqlTypes/Conversation'
import { ConversationSubscription } from './gqlTypes/ConversationSubscription'
import { conversationMessageSubscription } from './queries'

export default function useConversationSubscribeMore({
  subscribeMore,
  position,
}: {
  subscribeMore: (
    document: DocumentNode,
    mergeFunc: (
      previousResults: Conversation,
      subscriptionData: ConversationSubscription,
    ) => Conversation,
  ) => () => void
  position: ConversationPositionType
}) {
  const [subscribed, setSubscribed] = useState<boolean>(false)

  useEffect(() => {
    if (subscribeMore && !subscribed) {
      subscribeMore(conversationMessageSubscription, (prev, next) => {
        const type =
          next.conversationSubscription.conversationMessage.__typename
        const prevConversationFeed = prev.conversation.conversationFeed
        switch (type) {
          case 'CreateConversationMessagePayload':
            if (
              prev.conversation.conversationFeed.edges.some(
                ({ node }) =>
                  node.id ===
                  next.conversationSubscription.conversationMessage.message.id,
              )
            ) {
              return prev
            }

            return {
              ...prev,
              conversation: {
                ...prev.conversation,
                conversationFeed: {
                  ...prevConversationFeed,
                  totalCount: prevConversationFeed.totalCount + 1,
                  edges: addEdge({
                    position: position === 'topDown' ? 'start' : 'end',
                    prevEdges: prevConversationFeed.edges,
                    nextEdge: {
                      __typename: 'ConversationMessageCountableEdge',
                      node: next.conversationSubscription.conversationMessage
                        .message as Conversation_conversation_conversationFeed_edges_node,
                    },
                  }),
                },
              },
            }
          case 'DeleteConversationMessagePayload':
            if (
              !prev.conversation.conversationFeed.edges.some(
                ({ node }) =>
                  node.id ===
                  next.conversationSubscription.conversationMessage.message.id,
              )
            ) {
              return prev
            }

            return {
              ...prev,
              conversation: {
                ...prev.conversation,
                conversationFeed: {
                  ...prevConversationFeed,
                  totalCount: prevConversationFeed.totalCount - 1,
                  edges: prevConversationFeed.edges.filter(
                    (edge: Conversation_conversation_conversationFeed_edges) =>
                      edge.node.id !==
                      next.conversationSubscription.conversationMessage.message
                        .id,
                  ),
                },
              },
            }
        }
      })
      setSubscribed(true)
    }
  }, [subscribeMore, subscribed, position])
}

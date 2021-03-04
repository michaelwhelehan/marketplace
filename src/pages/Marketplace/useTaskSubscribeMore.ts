import { useApolloClient } from '@apollo/client'
import { DocumentNode } from 'graphql'
import { useState, useEffect, useCallback } from 'react'

import { addEdge } from '../../utils/graphql'
import { Task } from './gqlTypes/Task'
import {
  Tasks,
  Tasks_tasks,
  Tasks_tasks_edges,
  Tasks_tasks_edges_node,
} from './gqlTypes/Tasks'
import { TaskSubscription } from './gqlTypes/TaskSubscription'
import { taskFragment, taskSubscription } from './queries'

export default function useTaskSubscribeMore({
  subscribeMore,
}: {
  subscribeMore: (
    document: DocumentNode,
    mergeFunc: (
      previousResults: Tasks,
      subscriptionData: TaskSubscription,
    ) => Tasks,
  ) => () => void
}) {
  const client = useApolloClient()
  const [subscribed, setSubscribed] = useState<boolean>(false)
  const [newTasks, setNewTasks] = useState<Tasks>({ tasks: null })

  const handleLoadNewTasks = useCallback(() => {
    if (newTasks.tasks?.edges?.length > 0) {
      client.cache.modify({
        fields: {
          tasks(prevTasks) {
            const newTaskRefs = newTasks.tasks.edges.map(({ node }) =>
              client.cache.writeFragment<Task>({
                data: node,
                fragment: taskFragment,
              }),
            )

            const data: Tasks_tasks = {
              ...prevTasks,
              edges: addEdge({
                position: 'start',
                prevEdges: prevTasks.edges,
                nextEdge: newTaskRefs.map((newTaskRef) => ({
                  __typename: 'TaskCountableEdge',
                  node: newTaskRef,
                })),
              }),
            }
            return data
          },
        },
      })
      setNewTasks({ tasks: null })
    }
  }, [newTasks.tasks?.edges, client.cache])

  useEffect(() => {
    if (subscribeMore && !subscribed) {
      subscribeMore(taskSubscription, (prev, next) => {
        const type = next.taskSubscription.marketplaceTask.__typename
        switch (type) {
          case 'PublishTaskPayload':
            if (
              newTasks.tasks?.edges.some(
                ({ node }) =>
                  node.id === next.taskSubscription.marketplaceTask.task.id,
              )
            ) {
              return prev
            }

            setNewTasks((prevTasks) => ({
              ...prevTasks,
              tasks: {
                ...prevTasks.tasks,
                edges: addEdge({
                  position: 'start',
                  prevEdges: prevTasks.tasks?.edges ?? [],
                  nextEdge: {
                    __typename: 'TaskCountableEdge',
                    node: next.taskSubscription.marketplaceTask
                      .task as Tasks_tasks_edges_node,
                  },
                }),
              },
            }))

            return prev
          case 'DeleteTaskPayload':
            if (
              !prev.tasks.edges.some(
                ({ node }) =>
                  node.id === next.taskSubscription.marketplaceTask.task.id,
              )
            ) {
              return prev
            }

            return {
              ...prev,
              tasks: {
                ...prev.tasks,
                edges: prev.tasks.edges.filter(
                  (edge: Tasks_tasks_edges) =>
                    edge.node.id !==
                    next.taskSubscription.marketplaceTask.task.id,
                ),
              },
            }
        }
      })
      setSubscribed(true)
    }
  }, [subscribeMore, subscribed, newTasks.tasks?.edges])

  return {
    numNewTasks: newTasks.tasks?.edges.length ?? 0,
    onLoadNewTasks: handleLoadNewTasks,
  }
}

import React, { FC } from 'react'
import TextField from '../../atoms/TextField'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

const CREATE_CONVERSATION_MESSAGE = gql`
  mutation CreateConversationMessage($channelId: ID!, $message: String!) {
    createConversationMessage(channelId: $channelId, message: $message) @client
  }
`

interface Props {
  memberName: string
}

const ConversationTextField: FC<Props> = ({ memberName }) => {
  const [createConversationMessage] = useMutation(CREATE_CONVERSATION_MESSAGE)
  return (
    <TextField
      placeholder={`Write a message to ${memberName}`}
      fullWidth
      onEnter={value => {
        createConversationMessage({
          variables: { channelId: '1', message: value },
        })
      }}
    />
  )
}

export default ConversationTextField

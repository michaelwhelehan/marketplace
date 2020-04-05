import React, { FC } from 'react'
import styled from 'styled-components'
import InfiniteList from '../molecules/InfiniteList'
import ConversationMessage from '../molecules/ConversationMessage'
import faker from 'faker'

const StyledConversationMessageList = styled.div`
  height: 100%;
`

const now = new Date()
now.setHours(0, 0, 0, 0)

const list = [
  {
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
    },
    message: {
      text: 'first',
      timestamp: now,
    },
  },
  {
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
    },
    message: {
      text: faker.lorem.paragraph(5),
      timestamp: new Date(),
    },
  },
  {
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
    },
    message: {
      text: faker.lorem.paragraph(5),
      timestamp: new Date(),
    },
  },
  {
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
    },
    message: {
      text: faker.lorem.paragraph(5),
      timestamp: new Date(),
    },
  },
  {
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
    },
    message: {
      text: faker.lorem.paragraph(5),
      timestamp: new Date(),
    },
  },
  {
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
    },
    message: {
      text: faker.lorem.paragraph(5),
      timestamp: new Date(),
    },
  },
  {
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
    },
    message: {
      text: faker.lorem.paragraph(5),
      timestamp: new Date(),
    },
  },
  {
    member: {
      name: 'Mike Wells',
      profilePictureUrl: '',
      onlineStatus: 'online',
    },
    message: {
      text: faker.lorem.paragraph(5),
      timestamp: new Date(),
    },
  },
]

list.sort(
  (a, b) => b.message.timestamp.getTime() - a.message.timestamp.getTime(),
)

const ConversationMessageList: FC = () => {
  return (
    <StyledConversationMessageList>
      <InfiniteList
        initialData={list}
        renderListItem={listItem => <ConversationMessage {...listItem} />}
        loadMore={lastListItem => {
          let promiseResolver
          setTimeout(() => {
            promiseResolver([
              {
                member: {
                  name: 'Mike Wells',
                  profilePictureUrl: '',
                  onlineStatus: 'online',
                },
                message: {
                  text: faker.lorem.paragraph(5),
                  timestamp: new Date(),
                },
              },
              {
                member: {
                  name: 'Mike Wells',
                  profilePictureUrl: '',
                  onlineStatus: 'online',
                },
                message: {
                  text: faker.lorem.paragraph(5),
                  timestamp: new Date(),
                },
              },
            ])
          }, 2000 + Math.round(Math.random() * 3000))
          return new Promise(resolve => {
            promiseResolver = resolve
          })
        }}
        rowHeight={80}
        heightCalculation="dynamic"
        direction="reverse"
      />
    </StyledConversationMessageList>
  )
}

export default ConversationMessageList

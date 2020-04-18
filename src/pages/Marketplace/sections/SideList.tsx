import React, { FC } from 'react'
import styled from 'styled-components'
import SideListCard from './SideListCard'
import InfiniteList from '../../../uiComponents/molecules/InfiniteList'
import profilePictureUrl from '../../../assets/images/profile.png'

const StyledSideList = styled.div`
  background: #f5f5f5;
  height: 100%;
`

const list = [
  {
    creator: {
      name: 'Mike Wells',
      profilePictureUrl,
      onlineStatus: 'online',
      lastSeen: new Date(),
    },
    title: 'Need something done that I can afford',
    budget: 50,
    currency: { code: 'EUR', iso: '€' },
    location: 'Remote',
    dueDate: new Date(),
    details: '',
  },
  {
    creator: {
      name: 'Mike Wells',
      profilePictureUrl,
      onlineStatus: 'online',
      lastSeen: new Date(),
    },
    title: 'Need something done that I can afford',
    budget: 50,
    currency: { code: 'EUR', iso: '€' },
    location: 'Remote',
    dueDate: new Date(),
    details: '',
  },
  {
    creator: {
      name: 'Mike Wells',
      profilePictureUrl,
      onlineStatus: 'online',
      lastSeen: new Date(),
    },
    title: 'Need something done that I can afford',
    budget: 50,
    currency: { code: 'EUR', iso: '€' },
    location: 'Remote',
    dueDate: new Date(),
    details: '',
  },
  {
    creator: {
      name: 'Mike Wells',
      profilePictureUrl,
      onlineStatus: 'online',
      lastSeen: new Date(),
    },
    title: 'Need something done that I can afford',
    budget: 50,
    currency: { code: 'EUR', iso: '€' },
    location: 'Remote',
    dueDate: new Date(),
    details: '',
  },
  {
    creator: {
      name: 'Mike Wells',
      profilePictureUrl,
      onlineStatus: 'online',
      lastSeen: new Date(),
    },
    title: 'Need something done that I can afford',
    budget: 50,
    currency: { code: 'EUR', iso: '€' },
    location: 'Remote',
    dueDate: new Date(),
    details: '',
  },
  {
    creator: {
      name: 'Mike Wells',
      profilePictureUrl,
      onlineStatus: 'online',
      lastSeen: new Date(),
    },
    title: 'Need something done that I can afford',
    budget: 50,
    currency: { code: 'EUR', iso: '€' },
    location: 'Remote',
    dueDate: new Date(),
    details: '',
  },
  {
    creator: {
      name: 'Mike Wells',
      profilePictureUrl,
      onlineStatus: 'online',
      lastSeen: new Date(),
    },
    title: 'Need something done that I can afford',
    budget: 50,
    currency: { code: 'EUR', iso: '€' },
    location: 'Remote',
    dueDate: new Date(),
    details: '',
  },
  {
    creator: {
      name: 'Mike Wells',
      profilePictureUrl,
      onlineStatus: 'online',
      lastSeen: new Date(),
    },
    title: 'Need something done that I can afford',
    budget: 50,
    currency: { code: 'EUR', iso: '€' },
    location: 'Remote',
    dueDate: new Date(),
    details: '',
  },
  {
    creator: {
      name: 'Mike Wells',
      profilePictureUrl,
      onlineStatus: 'online',
      lastSeen: new Date(),
    },
    title: 'Need something done that I can afford',
    budget: 50,
    currency: { code: 'EUR', iso: '€' },
    location: 'Remote',
    dueDate: new Date(),
    details: '',
  },
]

const ROW_HEIGHT = 170

const SideList: FC = () => {
  return (
    <StyledSideList>
      <InfiniteList
        list={list}
        renderListItem={listItem => <SideListCard task={listItem} />}
        onLoadMore={loadAmount => Promise.resolve()}
        rowHeight={ROW_HEIGHT}
      />
    </StyledSideList>
  )
}

export default SideList

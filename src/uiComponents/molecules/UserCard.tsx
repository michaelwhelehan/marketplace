import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { UserType } from '../../types/user'
import Avatar from '../atoms/Avatar'
import UserName from '../atoms/UserName'
import { ParagraphS } from '../atoms/Paragraphs'
import Rating from '../atoms/Rating'

export type DisplayType = 'stacked' | 'inline'

const JobTitle = styled(ParagraphS)``

const RatingContainer = styled.div`
  margin-top: 5px;
`

const UserDetails = styled.div<{ display: DisplayType }>`
  display: flex;
  align-items: center;

  ${({ display }) => {
    if (display === 'stacked') {
      return css`
        flex-direction: column;
        align-items: center;
      `
    }

    if (display === 'inline') {
      return css`
        margin-left: 10px;
        width: 200px;
        flex-wrap: wrap;

        ${JobTitle} {
          order: 100;
        }

        ${RatingContainer} {
          margin-left: 10px;
        }
      `
    }
  }}
`

const Container = styled.div<{ display: DisplayType }>`
  display: flex;
  align-items: center;

  ${({ display }) => {
    if (display === 'stacked') {
      return css`
        flex-direction: column;
      `
    }
  }}
`

interface Props {
  user: UserType
  display?: DisplayType
  avatarSize?: number
}

const UserCard: FC<Props> = ({
  user,
  display = 'stacked',
  avatarSize = 80,
}) => {
  return (
    <Container display={display}>
      <Avatar src={user.profilePictureUrl} size={avatarSize} />
      <UserDetails display={display}>
        <UserName style={{ marginTop: '5px' }}>{user.name}</UserName>
        <JobTitle style={{ marginTop: '5px' }}>
          {user.jobTitle ?? 'Freelancer'}
        </JobTitle>
        <RatingContainer>
          {user.rating && user.numRatings ? (
            <Rating rating={user.rating} numRatings={user.numRatings} />
          ) : (
            'New'
          )}
        </RatingContainer>
      </UserDetails>
    </Container>
  )
}

export default UserCard

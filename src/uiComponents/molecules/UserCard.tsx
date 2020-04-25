import React, { FC } from 'react'
import styled from 'styled-components'
import { UserType } from '../../types/user'
import Avatar from '../atoms/Avatar'
import UserName from '../atoms/UserName'
import { ParagraphS } from '../atoms/Paragraphs'
import Rating from '../atoms/Rating'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const RatingContainer = styled.div`
  margin-top: 5px;
`

interface Props {
  member: UserType
}

const UserCard: FC<Props> = ({ member }) => {
  return (
    <Container>
      <Avatar src={member.profilePictureUrl} size={80} />
      <UserName style={{ marginTop: '5px' }}>{member.name}</UserName>
      {member.jobTitle ? (
        <ParagraphS style={{ marginTop: '5px' }}>{member.jobTitle}</ParagraphS>
      ) : null}
      <RatingContainer>
        {member.rating && member.numRatings ? (
          <Rating rating={member.rating} numRatings={member.numRatings} />
        ) : (
          'New'
        )}
      </RatingContainer>
    </Container>
  )
}

export default UserCard

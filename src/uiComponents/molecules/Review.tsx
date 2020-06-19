import React, { FC } from 'react'
import styled from 'styled-components'
import { fsXS } from '../../styles/typography'
import { gold, primaryColor } from '../../styles/colors'
import Avatar from '../atoms/Avatar'
import { ReviewType } from '../../types/review'
import Icon from '../atoms/Icon'
import { ParagraphXS, ParagraphXXS } from '../atoms/Paragraphs'
import { fromNow } from '../../utils/date'
import { Link } from 'react-router-dom'

const ReviewContainer = styled.div`
  height: 100%;
  display: flex;
  margin-top: 20px;
`

const ReviewerAvatar = styled.div`
  width: 60px;
  padding-right: 10px;
`

const ReviewContent = styled.div`
  flex: 1;
`

const ReviewerLink = styled(Link)`
  font-size: ${fsXS}px;
  color: ${primaryColor};
  text-decoration: none;
`

const TaskLink = styled(Link)`
  display: block;
  color: ${primaryColor};
  text-decoration: none;
  margin: 5px 0;
`

interface Props {
  review: ReviewType
}

const Review: FC<Props> = ({ review }) => {
  return (
    <ReviewContainer>
      <ReviewerAvatar>
        <Avatar src={review.reviewer.profilePictureUrl} size={50} />
      </ReviewerAvatar>
      <ReviewContent>
        <div>
          {Array(review.rating)
            .fill(0)
            .map((_, index) => (
              <Icon key={index} name="MdStar" size={20} color={gold} />
            ))}
        </div>
        <ParagraphXXS>{fromNow(review.created)}</ParagraphXXS>
        <TaskLink to={`/${review.task.slug}`}>{review.task.title}</TaskLink>
        <ParagraphXS>
          <ReviewerLink to={`/${review.task.slug}`}>
            {review.reviewer.name}
          </ReviewerLink>{' '}
          said "{review.body}"
        </ParagraphXS>
      </ReviewContent>
    </ReviewContainer>
  )
}

export default Review

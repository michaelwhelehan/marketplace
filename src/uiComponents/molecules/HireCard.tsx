import React, { FC } from 'react'
import styled from 'styled-components'
import {
  primaryColor,
  black,
  borderColorDark,
  borderColor,
} from '../../styles/colors'
import { ParagraphS, ParagraphXS } from '../atoms/Paragraphs'
import Button from '../atoms/Button'
import { OfferType } from '../../types/offer'
import Avatar from '../atoms/Avatar'
import { Link } from 'react-router-dom'
import { featherShadow } from '../../styles/shadows'
import StatusIndicator from '../atoms/StatusIndicator'
import { fromNow } from '../../utils/date'

export const HireCardSelector = styled.div`
  display: flex;
`

const StartContainer = styled.div`
  width: 50px;
  margin-right: 10px;
`

const EndContainer = styled.div`
  flex: 1;
`

const StyledLink = styled(Link)`
  color: ${primaryColor};
  text-decoration: none;
`

const StyledStatusIndicator = styled(StatusIndicator)`
  display: inline-flex;
`

const HireTitle = styled(ParagraphS)`
  color: ${black};
  margin-bottom: 5px;
`

const InnerContainer = styled.div`
  margin-top: 10px;
  border: 1px solid ${borderColorDark};
  border-left: 5px solid ${primaryColor};
  padding: 20px;
  border-radius: 6px;
`

const ActionContainer = styled.div`
  margin-top: 10px;
  border: 1px solid ${borderColor};
  ${featherShadow};
  padding: 20px;
  border-radius: 6px;
`

const TopButtonContainer = styled.div`
  margin-top: 10px;

  ${Button} {
    display: flex;
    align-items: center;
    justify-content: center;

    ${StyledStatusIndicator} {
      margin-right: 5px;
    }
  }
`

const BottomButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;

  ${Button}:first-child {
    margin-right: 10px;
  }
`

interface Props {
  offer: OfferType
  onRejectClick: () => void
}

const HireCard: FC<Props> = ({ offer, onRejectClick }) => {
  return (
    <HireCardSelector>
      <StartContainer>
        <Avatar src={offer.creator.profilePictureUrl} size={50} />
      </StartContainer>
      <EndContainer>
        <HireTitle>
          <strong>{offer.creator.name}</strong> offered to hire you for{' '}
          <strong>
            {offer.currency.iso}
            {offer.amount} to complete in 3 days
          </strong>{' '}
          <StyledLink to={`/${offer.task.slug}`}>{offer.task.title}</StyledLink>
        </HireTitle>
        <ParagraphXS>{fromNow(offer.created)}</ParagraphXS>
        <InnerContainer>
          <ParagraphS>{offer.coverLetter}</ParagraphS>
          <TopButtonContainer>
            <Button styleType="primary-outline">
              <StyledStatusIndicator onlineStatus="online" /> Message
            </Button>
          </TopButtonContainer>
          <ActionContainer>
            <ParagraphS>
              You have <strong>1 day, 11 hours</strong> to accept the offer and
              begin work on this project.
            </ParagraphS>
            <BottomButtonContainer>
              <Button>Accept</Button>
              <Button styleType="primary-outline" onClick={onRejectClick}>
                Reject
              </Button>
            </BottomButtonContainer>
          </ActionContainer>
        </InnerContainer>
      </EndContainer>
    </HireCardSelector>
  )
}

export default HireCard

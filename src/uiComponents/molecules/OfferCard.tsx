import React, { FC } from 'react'
import styled from 'styled-components'
import {
  white,
  borderColor,
  primaryColor,
  primaryFontColor,
} from '../../styles/colors'
import { featherShadow } from '../../styles/shadows'
import { ParagraphS, ParagraphL, ParagraphXS } from '../atoms/Paragraphs'
import Button from '../atoms/Button'
import { fwBold } from '../../styles/typography'
import UserCard from './UserCard'
import Icon from '../atoms/Icon'
import { OfferType } from '../../types/offer'
import StatusIndicator from '../atoms/StatusIndicator'

export const OfferCardSelector = styled.div`
  background-color: ${white};
  border: 1px solid ${borderColor};
  ${featherShadow};
  padding: 20px;
  border-radius: 6px;
`

const TopWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

const BottomWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

const CoverLetter = styled(ParagraphS)`
  width: 60%;
  display: block;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  position: relative;

  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 !important;

  -webkit-line-clamp: 5;
  height: calc(1em * 1.2 * 5);
`

const ActionContainer = styled.div`
  width: 30%;
`

const RepliesWithin = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 5px;
  }
`

const IconContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
`

const StyledStatusIndicator = styled(StatusIndicator)`
  display: inline-flex;
`

const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;

  ${Button} {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    ${StyledStatusIndicator} {
      margin-right: 5px;
    }
  }

  ${Button}:first-child {
    margin-right: 10px;
  }
`

const Budget = styled(ParagraphL)`
  color: ${primaryColor};
  margin-left: 20px;
  ${fwBold};
`

interface Props {
  offer: OfferType
  action: {
    title: string
    onClick: () => void
  }
}

const OfferCard: FC<Props> = ({ offer, action }) => {
  return (
    <OfferCardSelector>
      <TopWrapper>
        <UserCard user={offer.creator} avatarSize={50} display="inline" />
        <div>
          <Budget>
            {offer.currency.iso}
            {offer.amount}
          </Budget>
          <IconContainer>
            <Icon name="MdDelete" size={24} color={primaryFontColor} />
            <Icon name="MdBookmark" size={24} color={primaryFontColor} />
          </IconContainer>
        </div>
      </TopWrapper>
      <BottomWrapper>
        <CoverLetter>{offer.coverLetter}</CoverLetter>
        <ActionContainer>
          <RepliesWithin>
            <Icon name="MdAccessTime" size={14} color={primaryFontColor} />
            <ParagraphXS>Replies within an hour</ParagraphXS>
          </RepliesWithin>
          <ButtonContainer>
            <Button styleType="primary-outline" fullWidth>
              <StyledStatusIndicator onlineStatus="online" />
              Message
            </Button>
            <Button fullWidth onClick={action.onClick}>
              {action.title}
            </Button>
          </ButtonContainer>
        </ActionContainer>
      </BottomWrapper>
    </OfferCardSelector>
  )
}

export default OfferCard

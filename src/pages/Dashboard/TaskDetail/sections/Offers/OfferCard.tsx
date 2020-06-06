import React, { FC } from 'react'
import styled from 'styled-components'
import {
  white,
  borderColor,
  primaryColor,
  primaryFontColor,
} from '../../../../../styles/colors'
import { featherShadow } from '../../../../../styles/shadows'
import UserCard from '../../../../../uiComponents/molecules/UserCard'
import Button from '../../../../../uiComponents/atoms/Button'
import { OnlineStatusType } from '../../../../../types/user'
import {
  ParagraphL,
  ParagraphXS,
  ParagraphS,
} from '../../../../../uiComponents/atoms/Paragraphs'
import { fwBold } from '../../../../../styles/typography'
import faker from 'faker'
import Icon from '../../../../../uiComponents/atoms/Icon'

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

const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;

  ${Button} {
    flex: 1;
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

interface Props {}

const OfferCard: FC<Props> = () => {
  const user = {
    profilePictureUrl: faker.image.avatar(),
    name: faker.name.findName(),
    onlineStatus: 'online' as OnlineStatusType,
    lastSeen: new Date(),
    jobTitle: 'Web Developer',
    rating: 4.8,
    numRatings: 10,
  }

  return (
    <OfferCardSelector>
      <TopWrapper>
        <UserCard user={user} avatarSize={50} display="inline" />
        <div>
          <Budget>R500</Budget>
          <IconContainer>
            <Icon name="MdDelete" size={24} color={primaryFontColor} />
            <Icon name="MdBookmark" size={24} color={primaryFontColor} />
          </IconContainer>
        </div>
      </TopWrapper>
      <BottomWrapper>
        <CoverLetter>{faker.lorem.paragraph(10)}</CoverLetter>
        <ActionContainer>
          <RepliesWithin>
            <Icon name="MdAccessTime" size={14} color={primaryFontColor} />
            <ParagraphXS>Replies within an hour</ParagraphXS>
          </RepliesWithin>
          <ButtonContainer>
            <Button styleType="primary-outline" fullWidth>
              Message
            </Button>
            <Button fullWidth>Hire</Button>
          </ButtonContainer>
        </ActionContainer>
      </BottomWrapper>
    </OfferCardSelector>
  )
}

export default OfferCard

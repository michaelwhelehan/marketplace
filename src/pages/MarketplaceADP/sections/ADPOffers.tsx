import React, { FC, MouseEvent } from 'react'
import styled from 'styled-components'
import { black, primaryColor, white } from '../../../styles/colors'
import { HeadingS } from '../../../uiComponents/atoms/Headings'
import faker from 'faker'
import Avatar from '../../../uiComponents/atoms/Avatar'
import Icon from '../../../uiComponents/atoms/Icon'

const Container = styled.article`
  padding: 20px;
  padding-top: 0;
`

const Title = styled(HeadingS)`
  color: ${black};
`

const OfferContainer = styled.div`
  margin-top: 10px;
  display: flex;
`

const OfferOuter = styled.div`
  cursor: pointer;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${primaryColor};
  width: 58px;
  height: 58px;
  position: relative;
`

const OfferInner = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 1px dashed ${white};
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledAvatar = styled(Avatar)`
  position: absolute;
  top: 4px;
  left: 4px;
`

interface Props {
  onMakeOfferClick: (event: MouseEvent) => void
}

const avatarSrc1 = faker.image.avatar()
const avatarSrc2 = faker.image.avatar()

const ADPOffers: FC<Props> = ({ onMakeOfferClick }) => {
  return (
    <Container>
      <Title>Offers (2)</Title>
      <OfferContainer>
        <OfferOuter>
          <StyledAvatar src={avatarSrc1} size={50} />
        </OfferOuter>
        <OfferOuter>
          <StyledAvatar src={avatarSrc2} size={50} />
        </OfferOuter>
        <OfferOuter onClick={onMakeOfferClick}>
          <OfferInner>
            <Icon name="MdAdd" size={35} color={white} />
          </OfferInner>
        </OfferOuter>
      </OfferContainer>
    </Container>
  )
}

export default ADPOffers

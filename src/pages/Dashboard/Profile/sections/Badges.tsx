import React, { FC } from 'react'
import styled from 'styled-components'
import FieldContainer from '../../../../uiComponents/molecules/FieldContainer'
import Icon from '../../../../uiComponents/atoms/Icon'
import Button from '../../../../uiComponents/atoms/Button'
import { lightGrey, primaryColor, black } from '../../../../styles/colors'
import {
  ParagraphS,
  ParagraphXS,
} from '../../../../uiComponents/atoms/Paragraphs'
import { fwBold } from '../../../../styles/typography'

const BadgesContainer = styled.div`
  padding: 20px;
`

const BadgeContainer = styled.div`
  display: flex;
`

const BadgeStart = styled.div`
  width: 50px;
  margin-right: 20px;
`

const BadgeMain = styled.div`
  flex: 1;
`

const BadgeEnd = styled.div``

const BadgeTitle = styled(ParagraphS)`
  ${fwBold};
`

const BadgeDescription = styled(ParagraphXS)`
  margin-top: 5px;
`

const IconWrapper = styled.div`
  display: flex;
  background-color: ${lightGrey};
  border-radius: 50%;
  padding: 10px;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
`

const BadgesTitle = styled(ParagraphS)`
  ${fwBold};
  color: ${black};
  margin-bottom: 10px;
`

const BadgesDescription = styled(ParagraphS)`
  margin-bottom: 40px;
`

interface BadgeProps {
  icon: string
  iconColor: string
  title: string
  description: string
}

const Badge: FC<BadgeProps> = ({ icon, iconColor, title, description }) => {
  return (
    <BadgeContainer>
      <BadgeStart>
        <IconWrapper>
          <Icon name={icon} size={30} color={iconColor} />
        </IconWrapper>
      </BadgeStart>
      <BadgeMain>
        <BadgeTitle>{title}</BadgeTitle>
        <BadgeDescription>{description}</BadgeDescription>
      </BadgeMain>
      <BadgeEnd>
        <Button styleType="primary-outline">Add</Button>
      </BadgeEnd>
    </BadgeContainer>
  )
}

const Badges: FC = () => {
  const badges = [
    {
      icon: 'MdCreditCard',
      iconColor: primaryColor,
      title: 'Payment Method',
      description:
        'Make payments with ease by having your payment method verified.',
    },
    {
      icon: 'MdStayCurrentPortrait',
      iconColor: primaryColor,
      title: 'Mobile',
      description:
        "Verified when you join, you'll receive instant task notifications.",
    },
    {
      icon: 'FaFacebook',
      iconColor: '#1877f2',
      title: 'Facebook',
      description:
        'Connect your Facebook profile to build your online social reputation.',
    },
    {
      icon: 'FaTwitter',
      iconColor: '#1da1f2',
      title: 'Twitter',
      description:
        'Connect your Twitter profile to build your online social reputation.',
    },
    {
      icon: 'FaLinkedin',
      iconColor: '#0077B5',
      title: 'LinkedIn',
      description:
        'Connect your LinkedIn profile to build your online social reputation.',
    },
  ]
  return (
    <BadgesContainer>
      <BadgesTitle>Badges</BadgesTitle>
      <BadgesDescription>
        Badges help members be sure who you are and what you can do! The more
        you collect, the more Job Posters and Taskers will trust in your
        abilities. Badges are issued when specific requirements are met. A green
        tick shows that the verification is currently active
      </BadgesDescription>
      <FieldContainer split spacingTop>
        {badges.map((badge, index) => (
          <Badge key={index} {...badge} />
        ))}
      </FieldContainer>
    </BadgesContainer>
  )
}

export default Badges

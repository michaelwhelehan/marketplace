import React, { FC } from 'react'
import styled from 'styled-components'
import {
  ParagraphM,
  ParagraphS,
  ParagraphXS,
} from '../../../../uiComponents/atoms/Paragraphs'
import { black, featherGrey } from '../../../../styles/colors'
import { fwBold } from '../../../../styles/typography'
import CheckboxField from '../../../../uiComponents/atoms/CheckboxField'
import { useForm } from 'react-hook-form'

const Container = styled.div`
  padding: 20px;
`

const Heading = styled(ParagraphM)`
  ${fwBold};
  color: ${black};
  margin-bottom: 10px;
`

const Description = styled(ParagraphS)`
  margin-bottom: 10px;
`

const NotificationSettingContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: ${featherGrey};
  border-radius: 4px;
`

const NotificationSettingTitle = styled(ParagraphS)`
  ${fwBold};
  text-transform: uppercase;
`

const NotificationSettingInnerContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`

const NotificationSettingStart = styled.div``

const NotificationSettingEnd = styled.div`
  display: flex;
`

const StyledCheckboxField = styled(CheckboxField)`
  margin-right: 20px;
`

interface NotificationSettingProps {
  register: any
  notificationKey: string
  title: string
  description: string
}

const NotificationSetting: FC<NotificationSettingProps> = ({
  register,
  notificationKey,
  title,
  description,
}) => {
  return (
    <NotificationSettingContainer>
      <NotificationSettingTitle>{title}</NotificationSettingTitle>
      <NotificationSettingInnerContainer>
        <NotificationSettingStart>
          <ParagraphXS>{description}</ParagraphXS>
        </NotificationSettingStart>
        <NotificationSettingEnd>
          <StyledCheckboxField
            name={`${notificationKey}.email`}
            label="Email"
            value="email"
            ref={register()}
          />
          <StyledCheckboxField
            name={`${notificationKey}.sms`}
            label="SMS"
            value="sms"
            ref={register()}
          />
        </NotificationSettingEnd>
      </NotificationSettingInnerContainer>
    </NotificationSettingContainer>
  )
}

const NotificationSettings: FC = () => {
  const { register, watch } = useForm()
  const watchAllFields = watch()

  console.log(watchAllFields)

  const notificationSettings = [
    {
      notificationKey: 'transactional',
      title: 'Transactional',
      description:
        'You will always receive important notifications about any payments, cancellations and your account.',
    },
    {
      notificationKey: 'taskUpdates',
      title: 'Task Updates',
      description:
        'Receive updates on any new comments, private messages, offers and reviews.	',
    },
    {
      notificationKey: 'taskReminders',
      title: 'Task Reminders',
      description:
        'Friendly reminders if you’ve forgotten to accept an offer, release a payment or leave a review.',
    },
    {
      notificationKey: 'taskRecommendations',
      title: 'Task Recommendations',
      description:
        'Receive recommendations and be inspired by tasks close to you.',
    },
    {
      notificationKey: 'updates',
      title: 'Updates & Newsletters',
      description:
        'Be the first to hear about new features and exciting updates.',
    },
  ]

  return (
    <Container>
      <Heading>Notification Settings</Heading>
      <Description>
        Your notifications can be updated at any time via the options below.
      </Description>
      {notificationSettings.map((notificationSetting, index) => (
        <NotificationSetting
          key={index}
          register={register}
          {...notificationSetting}
        />
      ))}
    </Container>
  )
}

export default NotificationSettings

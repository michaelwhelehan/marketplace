import React, { FC, MouseEvent, useCallback } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Modal from '../../uiComponents/molecules/Modal'
import Button from '../../uiComponents/atoms/Button'
import styled from 'styled-components'
import { HeadingS } from '../../uiComponents/atoms/Headings'
import { black } from '../../styles/colors'
import { OnlineStatusType } from '../../types/user'
import faker from 'faker'
import UserCard from '../../uiComponents/molecules/UserCard'
import LineBreak from '../../uiComponents/atoms/LineBreak'
import FieldContainer from '../../uiComponents/molecules/FieldContainer'
import FormField from '../../uiComponents/molecules/FormField'
import TextFieldIcon from '../../uiComponents/molecules/TextFieldIcon'
import DateField from '../../uiComponents/atoms/DateField'
import { ParagraphS } from '../../uiComponents/atoms/Paragraphs'
import CreditCardForm from '../PaymentMethods/CreditCardForm'
import TextAreaField from '../../uiComponents/atoms/TextAreaField'

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;

  > button:first-child {
    margin-right: 10px;
  }
`

const StyledHeading = styled(HeadingS)`
  color: ${black};
  margin-bottom: 20px;
`

const ButtonContainer = styled.div`
  margin-top: 10px;
`

interface CreateTaskProps {
  onClose: (event: MouseEvent) => void
}

interface HireFooterProps {
  name: string
  onHireClick: (event: MouseEvent) => void
}

const HireFooter: FC<HireFooterProps> = ({ onHireClick, name }) => (
  <FooterContainer>
    <Button onClick={onHireClick}>Hire {name}</Button>
  </FooterContainer>
)

const Hire: FC<CreateTaskProps> = ({ onClose }) => {
  const { register, watch, control, handleSubmit } = useForm({
    defaultValues: {
      where: 'in-person',
      budgetType: 'total',
    },
  })

  const handleHireSubmit = useCallback(data => {
    console.log(data)
  }, [])

  const user = {
    profilePictureUrl: faker.image.avatar(),
    name: `${faker.name.firstName()} ${faker.name.lastName().charAt(0)}.`,
    onlineStatus: 'online' as OnlineStatusType,
    lastSeen: new Date(),
    jobTitle: 'Web Developer',
    rating: 4.8,
    numRatings: 10,
  }

  return (
    <Modal
      title="Hire - Need some tasks done"
      overflowContent
      large
      onClose={onClose}
      renderFooter={() => (
        <HireFooter
          name={user.name}
          onHireClick={handleSubmit(handleHireSubmit)}
        />
      )}
    >
      <StyledHeading>Hiring</StyledHeading>
      <UserCard user={user} display="inline" avatarSize={50} />
      <LineBreak />
      <StyledHeading>Message</StyledHeading>
      <TextAreaField
        fullWidth
        placeholder="Write a message to the freelancer"
        short
      />
      <LineBreak />
      <StyledHeading>Terms</StyledHeading>
      <FieldContainer split>
        <FormField label="Total">
          <TextFieldIcon
            customIcon="R"
            name="amount"
            ref={register()}
            fullWidth
            placeholder="Enter an amount"
          />
        </FormField>
        <FormField label="Due date">
          <Controller
            as={DateField}
            name="dueDate"
            fullWidth
            control={control}
            placeholder="Select a date"
            onChange={day => {
              // React Select return object instead of value for selection
              return day[0]
            }}
          />
        </FormField>
      </FieldContainer>
      <LineBreak />
      <StyledHeading>Payment Method</StyledHeading>
      <ParagraphS>
        You currently have no payment methods setup. Please add one to continue.
      </ParagraphS>
      <CreditCardForm />
      <LineBreak />
      <ParagraphS>{faker.lorem.paragraph(5)}</ParagraphS>
    </Modal>
  )
}

export default Hire

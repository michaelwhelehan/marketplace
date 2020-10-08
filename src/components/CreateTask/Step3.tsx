import React, { FC } from 'react'
import TextField from '../../uiComponents/atoms/TextField'
import FormField from '../../uiComponents/molecules/FormField'
import RadioField from '../../uiComponents/atoms/RadioField'
import Button from '../../uiComponents/atoms/Button'
import styled from 'styled-components'
import { useFieldArray } from 'react-hook-form'
import Icon from '../../uiComponents/atoms/Icon'
import { primaryColor } from '../../styles/colors'
import TextFieldIcon from '../../uiComponents/molecules/TextFieldIcon'

interface Props {
  register: any
  control: any
  watch: any
}

type TitleType = {
  title: string
}

const InnerSectionContainer = styled.div`
  display: flex;
`

const StyledRadioField = styled(RadioField)`
  margin-right: 10px;
  margin-bottom: 10px;
`

const QuestionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const StyledButton = styled(Button)`
  display: inline-block;
`

const StyledIcon = styled(Icon)`
  cursor: pointer;
`

const Step3: FC<Props> & TitleType = ({ register, control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'question',
  })

  return (
    <form>
      <FormField
        label="What is your budget?"
        helpText="Please enter the price you are comfortable with to get your task done. Taskers will use this a guide for how much to offer."
        required
        renderHelpPopup={() => <>This is the help section</>}
      >
        <InnerSectionContainer>
          <StyledRadioField
            name="budgetType"
            value="total"
            label="Total"
            ref={register()}
          />

          <StyledRadioField
            name="budgetType"
            value="hourly"
            label="Hourly rate"
            ref={register()}
          />
        </InnerSectionContainer>
        <TextFieldIcon
          customIcon="$"
          name="amount"
          ref={register()}
          fullWidth
          placeholder="Enter an amount"
        />
      </FormField>
      <FormField label="Would you like to add screening questions?" spacingTop>
        {fields.map((item, index) => (
          <QuestionWrapper key={item.id}>
            <TextField
              name={`question[${index}]`}
              ref={register()}
              fullWidth
              placeholder="Type your question here"
            />
            <StyledIcon
              name="MdClose"
              size={25}
              color={primaryColor}
              spacingStart={5}
              onClick={() => remove(index)}
            />
          </QuestionWrapper>
        ))}
        <StyledButton
          as="a"
          styleType="primary-outline"
          onClick={() => append({})}
        >
          {fields.length === 0 ? 'Add question' : 'Add another'}
        </StyledButton>
      </FormField>
    </form>
  )
}

Step3.title = 'Budget & Screening'

export default Step3

import React, { FC } from 'react'
import FormField from '../../uiComponents/molecules/FormField'
import styled from 'styled-components'
import TextFieldIcon from '../../uiComponents/molecules/TextFieldIcon'
import TextAreaField from '../../uiComponents/atoms/TextAreaField'
import RadioField from '../../uiComponents/atoms/RadioField'

const InnerSectionContainer = styled.div`
  display: flex;
`

const StyledRadioField = styled(RadioField)`
  margin-right: 10px;
  margin-bottom: 10px;
`

interface Props {
  register: any
  control: any
  watch: any
}

type TitleType = {
  title: string
}

const Step1: FC<Props> & TitleType = ({ register }) => {
  return (
    <form>
      <FormField
        label="How much do you want to offer?"
        helpText="Please enter the price of the offer you want to make. The poster will then decide if they want to accept it or not."
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
          customIcon="R"
          name="amount"
          ref={register()}
          fullWidth
          placeholder="Enter an amount"
        />
      </FormField>
      <FormField label="Why should you be chosen?" required spacingTop>
        <TextAreaField
          name="details"
          ref={register()}
          fullWidth
          placeholder="Motivate why the poster should choose you to do this task."
        />
      </FormField>
    </form>
  )
}

Step1.title = 'Make an Offer'

export default Step1

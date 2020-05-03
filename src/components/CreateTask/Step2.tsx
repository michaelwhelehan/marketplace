import React, { FC } from 'react'
import TextField from '../../uiComponents/atoms/TextField'
import FormField from '../../uiComponents/molecules/FormField'
import DateField from '../../uiComponents/atoms/DateField'
import { Controller } from 'react-hook-form'
import RadioField from '../../uiComponents/atoms/RadioField'
import styled from 'styled-components'
import { ParagraphXS } from '../../uiComponents/atoms/Paragraphs'
import { borderColorDark, primaryFontColor } from '../../styles/colors'
import Icon from '../../uiComponents/atoms/Icon'

const SplitSection = styled.div`
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: 1fr 1fr;
`

const Section = styled.div`
  border-radius: 4px;
  border: 1px solid ${borderColorDark};
  padding: 10px;
`

const InnerSectionContainer = styled.div`
  display: flex;
`

const InnerSectionStart = styled.div`
  flex: 1;
`

const InnerSectionEnd = styled.div``

const WhereExplanation = styled(ParagraphXS)`
  margin-top: 10px;
`

interface Props {
  register: any
  control: any
  watch: any
}

type TitleType = {
  title: string
}

const Step2: FC<Props> & TitleType = ({ watch, register, control }) => {
  const watchWhere = watch('where', 'in-person')
  return (
    <form>
      <FormField label="Where do you need it done?" required>
        <SplitSection>
          <Section>
            <InnerSectionContainer>
              <InnerSectionStart>
                <RadioField
                  name="where"
                  value="in-person"
                  label="In Person"
                  ref={register()}
                />
              </InnerSectionStart>
              <InnerSectionEnd>
                <Icon
                  name="MdPersonPinCircle"
                  size={20}
                  color={primaryFontColor}
                />
              </InnerSectionEnd>
            </InnerSectionContainer>
            <WhereExplanation>
              Select this if you need the tasker there in person
            </WhereExplanation>
          </Section>
          <Section>
            <InnerSectionContainer>
              <InnerSectionStart>
                <RadioField
                  name="where"
                  value="online"
                  label="Online"
                  ref={register()}
                />
              </InnerSectionStart>
              <InnerSectionEnd>
                <Icon name="MdDesktopMac" size={20} color={primaryFontColor} />
              </InnerSectionEnd>
            </InnerSectionContainer>
            <WhereExplanation>
              Select this if the work can be completed online
            </WhereExplanation>
          </Section>
        </SplitSection>
      </FormField>
      {watchWhere === 'in-person' && (
        <FormField spacingTop>
          <TextField
            name="location"
            placeholder="Enter a suburb"
            ref={register()}
          />
        </FormField>
      )}
      <FormField label="When do you need it done?" spacingTop>
        <Controller
          as={DateField}
          name="dueDate"
          control={control}
          placeholder="Select a date"
          onChange={day => {
            // React Select return object instead of value for selection
            return day[0]
          }}
        />
      </FormField>
    </form>
  )
}

Step2.title = 'Say where and when'

export default Step2

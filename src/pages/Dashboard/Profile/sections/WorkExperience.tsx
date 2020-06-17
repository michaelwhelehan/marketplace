import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import { primaryColor } from '../../../../styles/colors'
import { useForm, Controller, useFieldArray } from 'react-hook-form'
import Icon from '../../../../uiComponents/atoms/Icon'
import FieldContainer from '../../../../uiComponents/molecules/FieldContainer'
import FormField from '../../../../uiComponents/molecules/FormField'
import TextField from '../../../../uiComponents/atoms/TextField'
import TextAreaField from '../../../../uiComponents/atoms/TextAreaField'
import SelectField from '../../../../uiComponents/atoms/SelectField'
import Button from '../../../../uiComponents/atoms/Button'

const StyledForm = styled.form`
  padding: 20px;
  width: 50%;
`

const ItemWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`

const StartContainer = styled.div`
  flex: 1;
`

const StyledIcon = styled(Icon)`
  cursor: pointer;
`

const StyledButton = styled(Button)`
  display: inline-block;
`

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`

const WorkExperience: FC = () => {
  const { register, control, handleSubmit } = useForm()

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'experience',
  })

  useEffect(() => {
    append({})
  }, [append])

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormField label="Add experience">
        {fields.map((item, index) => (
          <ItemWrapper key={item.id}>
            <StartContainer>
              <FieldContainer>
                <TextField
                  name={`experience[${index}].title`}
                  ref={register()}
                  placeholder="Title *"
                  fullWidth
                />
              </FieldContainer>
              <FieldContainer spacingTop>
                <TextField
                  name={`experience[${index}].company`}
                  ref={register()}
                  placeholder="Company *"
                  fullWidth
                />
              </FieldContainer>
              <FieldContainer spacingTop>
                <TextField
                  name={`experience[${index}].location`}
                  ref={register()}
                  placeholder="Location"
                  fullWidth
                />
              </FieldContainer>
              <FieldContainer split spacingTop>
                <Controller
                  as={SelectField}
                  name={`experience[${index}].startMonth`}
                  control={control}
                  placeholder="Start Month *"
                  options={[{ label: 'January', value: '1' }]}
                />
                <Controller
                  as={SelectField}
                  name={`experience[${index}].startYear`}
                  control={control}
                  placeholder="Start Year *"
                  options={[{ label: '2020', value: '2020' }]}
                />
              </FieldContainer>
              <FieldContainer split spacingTop>
                <Controller
                  as={SelectField}
                  name={`experience[${index}].endMonth`}
                  control={control}
                  placeholder="End Month"
                  options={[{ label: 'January', value: '1' }]}
                />
                <Controller
                  as={SelectField}
                  name={`experience[${index}].endYear`}
                  control={control}
                  placeholder="End Year"
                  options={[{ label: '2020', value: '2020' }]}
                />
              </FieldContainer>
              <FieldContainer spacingTop>
                <TextAreaField
                  name={`experience[${index}].description`}
                  ref={register()}
                  placeholder="Describe your experience"
                  fullWidth
                />
              </FieldContainer>
            </StartContainer>
            <StyledIcon
              name="MdClose"
              size={25}
              color={primaryColor}
              spacingStart={5}
              onClick={() => remove(index)}
            />
          </ItemWrapper>
        ))}
        <StyledButton
          as="a"
          styleType="primary-outline"
          onClick={() => append({})}
        >
          {fields.length === 0 ? 'Add experience' : 'Add another'}
        </StyledButton>
      </FormField>
      <ButtonContainer>
        <Button>Update Profile</Button>
      </ButtonContainer>
    </StyledForm>
  )
}

export default WorkExperience

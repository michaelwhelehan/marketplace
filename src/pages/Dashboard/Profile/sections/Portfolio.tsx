import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import { primaryColor } from '../../../../styles/colors'
import { useForm, useFieldArray } from 'react-hook-form'
import Icon from '../../../../uiComponents/atoms/Icon'
import FieldContainer from '../../../../uiComponents/molecules/FieldContainer'
import FormField from '../../../../uiComponents/molecules/FormField'
import TextField from '../../../../uiComponents/atoms/TextField'
import TextAreaField from '../../../../uiComponents/atoms/TextAreaField'
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

const Portfolio: FC = () => {
  const { register, control, handleSubmit } = useForm()

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'portfolio',
  })

  useEffect(() => {
    append({})
  }, [append])

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormField label="Add project">
        {fields.map((item, index) => (
          <ItemWrapper key={item.id}>
            <StartContainer>
              <FieldContainer>
                <TextField
                  name={`portfolio[${index}].title`}
                  ref={register()}
                  placeholder="Title *"
                  fullWidth
                />
              </FieldContainer>
              <FieldContainer spacingTop>
                <TextAreaField
                  name={`portfolio[${index}].description`}
                  ref={register()}
                  placeholder="Describe the project"
                  fullWidth
                />
              </FieldContainer>
              <FieldContainer>
                <ButtonContainer>
                  <StyledButton
                    as="a"
                    styleType="primary-outline"
                    onClick={() => {
                      console.log('upload files')
                    }}
                  >
                    Select File(s)
                  </StyledButton>
                </ButtonContainer>
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
          {fields.length === 0 ? 'Add project' : 'Add another'}
        </StyledButton>
      </FormField>
      <ButtonContainer>
        <Button>Update Profile</Button>
      </ButtonContainer>
    </StyledForm>
  )
}

export default Portfolio

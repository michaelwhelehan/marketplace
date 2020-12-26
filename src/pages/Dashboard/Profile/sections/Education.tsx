import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import { primaryColor } from '../../../../styles/colors'
import { useForm, Controller, useFieldArray, FieldError } from 'react-hook-form'
import Icon from '../../../../uiComponents/atoms/Icon'
import FieldContainer from '../../../../uiComponents/molecules/FieldContainer'
import FormField from '../../../../uiComponents/molecules/FormField'
import TextField from '../../../../uiComponents/atoms/TextField'
import TextAreaField from '../../../../uiComponents/atoms/TextAreaField'
import SelectField, {
  OptionType,
} from '../../../../uiComponents/atoms/SelectField'
import Button from '../../../../uiComponents/atoms/Button'
import { UserProfileDetails_me } from '../gqlTypes/UserProfileDetails'
import { useAccountUpdate } from '../../../../services'
import { useAlert } from 'react-alert'
import useConfirmDialog from '../../../../hooks/useConfirmDialog'
import { getYearOptions } from '../../../../utils/date'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

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

type FormValues = {
  education: [
    {
      degree: string
      school: string
      description: string
      startYear: OptionType
      endYear: OptionType
    },
  ]
}

const formSchema = {
  degree: yup.string().required('Degree is required'),
  school: yup.string().required('School is required'),
  startYear: yup
    .object()
    .shape({
      label: yup.string(),
      value: yup.string(),
    })
    .required('Start year is required'),
  endYear: yup
    .object()
    .shape({
      label: yup.string(),
      value: yup.string(),
    })
    .required('End year is required'),
}

const fieldsSchema = yup.object().shape({
  education: yup
    .array()
    .of(yup.object().shape(formSchema))
    .required('Must have fields')
    .min(1, 'Minimum of 1 field'),
})

interface Props {
  user: UserProfileDetails_me
}

const Education: FC<Props> = ({ user }) => {
  const [setAccountUpdate, { data, error }] = useAccountUpdate()
  const alert = useAlert()
  const { register, control, handleSubmit, setError, errors } = useForm<
    FormValues
  >({
    resolver: yupResolver(fieldsSchema),
    defaultValues: {
      education: user.educations.map((education) => {
        const { startYear, endYear, ...rest } = education
        return {
          startYear: { label: startYear, value: startYear },
          endYear: { label: endYear, value: endYear },
          ...rest,
        }
      }),
    },
  })
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'education',
    keyName: 'identifier',
  })

  useEffect(() => {
    if (user.educations.length === 0) {
      append({})
    }
  }, [append, user.educations.length])

  useEffect(() => {
    if (data && !error) {
      alert.show('Profile successfully updated.', {
        type: 'success',
      })
    } else if (error) {
      error.extraInfo.userInputErrors.forEach((err) =>
        setError(err.field, { type: 'manual', message: err.message }),
      )
    }
  }, [data, error])

  const onSubmit = (data) => {
    setAccountUpdate({
      input: {
        educations: data.education?.map((education) => {
          let { id, startYear, endYear, ...rest } = education
          startYear = startYear.value
          endYear = endYear.value
          return id
            ? { id, startYear, endYear, ...rest }
            : { startYear, endYear, ...rest }
        }),
      },
    })
  }

  const handleDelete = async (id: number) => {
    const {
      data: { errors },
    } = await setAccountUpdate({
      input: {
        deleteEducation: fields[id].id,
      },
    })
    if (errors.length === 0) {
      remove(id)
    }
  }

  const {
    renderedDialog,
    setShowConfirmDialog,
    setConfirmId,
  } = useConfirmDialog({
    title: 'Confirm delete education?',
    onConfirm: handleDelete,
  })

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormField label="Add education">
        {fields.map((item, index) => (
          <ItemWrapper key={item.identifier}>
            {console.log(item)}
            <StartContainer>
              <input
                type="hidden"
                name={`education[${index}].id`}
                ref={register()}
                defaultValue={item.id}
              />
              <FormField
                label="Degree"
                error={errors.education?.[index]?.degree}
                required
              >
                <TextField
                  name={`education[${index}].degree`}
                  ref={register()}
                  defaultValue={item.degree}
                  placeholder="Eg. Honor's in Financial Management"
                  fullWidth
                  hasError={Boolean(errors.education?.[index]?.degree)}
                />
              </FormField>
              <FormField
                label="School"
                error={errors.education?.[index]?.school}
                required
                spacingTop
              >
                <TextField
                  name={`education[${index}].school`}
                  ref={register()}
                  defaultValue={item.school}
                  placeholder="Eg. University of Cape Town"
                  fullWidth
                  hasError={Boolean(errors.education?.[index]?.school)}
                />
              </FormField>
              <FieldContainer split spacingTop>
                <FormField
                  label="Start Year"
                  error={errors.education?.[index]?.startYear as FieldError}
                  required
                >
                  <Controller
                    as={SelectField}
                    name={`education[${index}].startYear`}
                    control={control}
                    placeholder="Start Year"
                    options={getYearOptions(60)}
                    hasError={Boolean(errors.education?.[index]?.startYear)}
                  />
                </FormField>
                <FormField
                  label="End Year"
                  error={errors.education?.[index]?.endYear as FieldError}
                  required
                >
                  <Controller
                    as={SelectField}
                    name={`education[${index}].endYear`}
                    control={control}
                    placeholder="End Year"
                    options={getYearOptions(60)}
                  />
                </FormField>
              </FieldContainer>
              <FormField label="Description" spacingTop>
                <TextAreaField
                  name={`education[${index}].description`}
                  ref={register()}
                  defaultValue={item.description}
                  placeholder="Write a brief description of your education here"
                  fullWidth
                />
              </FormField>
            </StartContainer>
            <StyledIcon
              name="MdClose"
              size={25}
              color={primaryColor}
              spacingStart={5}
              onClick={() => {
                if (item.id) {
                  setConfirmId(index)
                  setShowConfirmDialog(true)
                } else {
                  remove(index)
                }
              }}
            />
          </ItemWrapper>
        ))}
        <StyledButton
          as="a"
          styleType="primary-outline"
          onClick={() => append({})}
        >
          {fields.length === 0 ? 'Add education' : 'Add another'}
        </StyledButton>
      </FormField>
      <ButtonContainer>
        <Button>Update Profile</Button>
      </ButtonContainer>
      {renderedDialog}
    </StyledForm>
  )
}

export default Education

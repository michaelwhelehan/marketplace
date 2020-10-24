import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import { primaryColor } from '../../../../styles/colors'
import {
  useForm,
  Controller,
  useFieldArray,
  FieldError,
} from 'react-hook-form'
import Icon from '../../../../uiComponents/atoms/Icon'
import FieldContainer from '../../../../uiComponents/molecules/FieldContainer'
import FormField from '../../../../uiComponents/molecules/FormField'
import TextField from '../../../../uiComponents/atoms/TextField'
import TextAreaField from '../../../../uiComponents/atoms/TextAreaField'
import SelectField, { OptionType } from '../../../../uiComponents/atoms/SelectField'
import Button from '../../../../uiComponents/atoms/Button'
import { useAccountUpdate } from '../../../../services'
import { useAlert } from 'react-alert'
import { UserProfileDetails_me } from '../gqlTypes/UserProfileDetails'
import useConfirmDialog from '../../../../hooks/useConfirmDialog'
import {
  getMonthOptions,
  getYearOptions,
  getMonthLabel,
} from '../../../../utils/date'
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
  experience: [
    {
      title: string
      description?: string
      company: string
      location: string
      startMonth: OptionType
      startYear: OptionType
      endMonth: OptionType
      endYear: OptionType
    },
  ]
}

const formSchema = {
  title: yup.string().required('Title is required'),
  company: yup.string().required('Company is required'),
  location: yup.string().required('Location is required'),
  startMonth: yup
    .object()
    .shape({
      label: yup.string(),
      value: yup.string(),
    })
    .required('Start month is required'),
  startYear: yup
    .object()
    .shape({
      label: yup.string(),
      value: yup.string(),
    })
    .required('Start year is required'),
  endMonth: yup
    .object()
    .shape({
      label: yup.string(),
      value: yup.string(),
    })
    .required('End month is required'),
  endYear: yup
    .object()
    .shape({
      label: yup.string(),
      value: yup.string(),
    })
    .required('End year is required'),
}

const fieldsSchema = yup.object().shape({
  experience: yup
    .array()
    .of(yup.object().shape(formSchema))
    .required('Must have fields')
    .min(1, 'Minimum of 1 field'),
})

interface Props {
  user: UserProfileDetails_me
}

const WorkExperience: FC<Props> = ({ user }) => {
  const [setAccountUpdate, { data, error }] = useAccountUpdate()
  const alert = useAlert()
  const { register, control, handleSubmit, setError, errors } = useForm<FormValues>({
    resolver: yupResolver(fieldsSchema),
    defaultValues: {
      experience: user.workExperiences.map((workExperience) => {
        const { startDate, endDate, ...rest } = workExperience
        return {
          startMonth: {
            label: getMonthLabel(startDate.split('-')[1]),
            value: startDate.split('-')[1],
          },
          startYear: {
            label: startDate.split('-')[0],
            value: startDate.split('-')[0],
          },
          endMonth: {
            label: getMonthLabel(endDate.split('-')[1]),
            value: endDate.split('-')[1],
          },
          endYear: {
            label: endDate.split('-')[0],
            value: endDate.split('-')[0],
          },
          ...rest,
        }
      }),
    },
  })
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'experience',
    keyName: 'identifier',
  })

  useEffect(() => {
    if (user.workExperiences.length === 0) {
      append({})
    }
  }, [append, user.workExperiences.length])

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
        workExperiences: data.experience?.map((experience) => {
          let {
            id,
            startMonth,
            startYear,
            endMonth,
            endYear,
            ...rest
          } = experience
          startMonth = startMonth.value
          startYear = startYear.value
          endMonth = endMonth.value
          endYear = endYear.value
          return id
            ? { id, startMonth, startYear, endMonth, endYear, ...rest }
            : { startMonth, startYear, endMonth, endYear, ...rest }
        }),
      },
    })
  }

  const handleDelete = async (id: number) => {
    const {
      data: { errors },
    } = await setAccountUpdate({
      input: {
        deleteWorkExperience: fields[id].id,
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
    title: 'Confirm delete portfolio?',
    onConfirm: handleDelete,
  })

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormField label="Add experience">
        {fields.map((item, index) => (
          <ItemWrapper key={item.id}>
            <StartContainer>
              <input
                type="hidden"
                name={`experience[${index}].id`}
                ref={register()}
                defaultValue={item.id}
              />
              <FormField
                label="Title"
                error={errors.experience?.[index]?.title}
                required
              >
                <TextField
                  name={`experience[${index}].title`}
                  ref={register()}
                  defaultValue={item.title}
                  placeholder="Eg. Senior Financial Analyst"
                  fullWidth
                  hasError={Boolean(errors.experience?.[index]?.title)}
                />
              </FormField>
              <FormField
                label="Company"
                error={errors.experience?.[index]?.company}
                required
                spacingTop
              >
                <TextField
                  name={`experience[${index}].company`}
                  ref={register()}
                  defaultValue={item.company}
                  placeholder="Eg. Lawrence Associates"
                  fullWidth
                  hasError={Boolean(errors.experience?.[index]?.company)}
                />
              </FormField>
              <FormField
                label="Location"
                error={errors.experience?.[index]?.location}
                required
                spacingTop
              >
                <TextField
                  name={`experience[${index}].location`}
                  ref={register()}
                  defaultValue={item.location}
                  placeholder="Eg. Cape Town"
                  fullWidth
                  hasError={Boolean(errors.experience?.[index]?.location)}
                />
              </FormField>
              <FieldContainer split spacingTop>
                <FormField
                  label="Start Month"
                  error={errors.experience?.[index]?.startMonth as FieldError}
                  required
                >
                  <Controller
                    as={SelectField}
                    name={`experience[${index}].startMonth`}
                    control={control}
                    placeholder="Start Month"
                    options={getMonthOptions()}
                  />
                </FormField>
                <FormField
                  label="Start Year"
                  error={errors.experience?.[index]?.startYear as FieldError}
                  required
                >
                  <Controller
                    as={SelectField}
                    name={`experience[${index}].startYear`}
                    control={control}
                    placeholder="Start Year"
                    options={getYearOptions(60)}
                  />
                </FormField>
              </FieldContainer>
              <FieldContainer split spacingTop>
                <FormField label="End Month">
                  <Controller
                    as={SelectField}
                    name={`experience[${index}].endMonth`}
                    control={control}
                    placeholder="End Month"
                    options={getMonthOptions()}
                  />
                </FormField>
                <FormField label="End Year">
                  <Controller
                    as={SelectField}
                    name={`experience[${index}].endYear`}
                    control={control}
                    placeholder="End Year"
                    options={getYearOptions(60)}
                  />
                </FormField>
              </FieldContainer>
              <FieldContainer spacingTop>
                <FormField
                  label="Description"
                  error={errors.experience?.[index]?.description as FieldError}
                >
                  <TextAreaField
                    name={`experience[${index}].description`}
                    ref={register()}
                    defaultValue={item.description}
                    placeholder="Write a short description of your work experience"
                    fullWidth
                  />
                </FormField>
              </FieldContainer>
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
          {fields.length === 0 ? 'Add experience' : 'Add another'}
        </StyledButton>
      </FormField>
      <ButtonContainer>
        <Button>Update Profile</Button>
      </ButtonContainer>
      {renderedDialog}
    </StyledForm>
  )
}

export default WorkExperience

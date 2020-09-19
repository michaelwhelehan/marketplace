import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import { primaryColor } from '../../../../styles/colors'
import { useForm, useFieldArray, Controller } from 'react-hook-form'
import Icon from '../../../../uiComponents/atoms/Icon'
import FieldContainer from '../../../../uiComponents/molecules/FieldContainer'
import FormField from '../../../../uiComponents/molecules/FormField'
import TextField from '../../../../uiComponents/atoms/TextField'
import TextAreaField from '../../../../uiComponents/atoms/TextAreaField'
import Button from '../../../../uiComponents/atoms/Button'
import FileUploadField from '../../../../uiComponents/atoms/FileUploadField'
import { useAccountUpdate } from '../../../../services'
import { useAlert } from 'react-alert'
import { UserProfileDetails_me } from '../gqlTypes/UserProfileDetails'
import useConfirmDialog from '../../../../hooks/useConfirmDialog'
import { yupResolver } from '@hookform/resolvers'
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
  display: flex;
  justify-content: flex-end;
`

const formSchema = {
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
}

const fieldsSchema = yup.object().shape({
  portfolio: yup
    .array()
    .of(yup.object().shape(formSchema))
    .required('Must have fields')
    .min(1, 'Minimum of 1 field'),
})

interface Props {
  user: UserProfileDetails_me
}

const Portfolio: FC<Props> = ({ user }) => {
  const [setAccountUpdate, { data, error }] = useAccountUpdate()
  const alert = useAlert()
  const { register, control, handleSubmit, setError, errors } = useForm({
    resolver: yupResolver(fieldsSchema),
    defaultValues: {
      portfolio: user.portfolios,
    },
  })
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'portfolio',
  })

  useEffect(() => {
    if (user.portfolios.length === 0) {
      append({})
    }
  }, [append, user.portfolios.length])

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
        portfolios: data.portfolio?.map((portfolio) => {
          let { id, ...rest } = portfolio
          return id ? { id, ...rest } : { ...rest }
        }),
      },
    })
  }

  const handleDelete = async (id: number) => {
    const {
      data: { errors },
    } = await setAccountUpdate({
      input: {
        deletePortfolio: fields[id].id,
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
      <FormField label="Add project">
        {fields.map((item, index) => (
          <ItemWrapper key={item.id}>
            <StartContainer>
              <input
                type="hidden"
                name={`portfolio[${index}].id`}
                ref={register()}
              />
              <FormField
                label="Title"
                error={errors.portfolio?.[index]?.title}
                required
              >
                <TextField
                  name={`portfolio[${index}].title`}
                  ref={register()}
                  placeholder="Eg. Research on robotics"
                  fullWidth
                  hasError={Boolean(errors.portfolio?.[index]?.title)}
                />
              </FormField>
              <FormField
                label="Description"
                error={errors.portfolio?.[index]?.description}
                required
                spacingTop
              >
                <TextAreaField
                  name={`portfolio[${index}].description`}
                  ref={register()}
                  placeholder="Describe the project"
                  fullWidth
                  hasError={Boolean(errors.portfolio?.[index]?.description)}
                />
              </FormField>
              <FormField label="Cover Image" spacingTop>
                <ButtonContainer>
                  <Controller
                    name={`portfolio[${index}].imageUrl`}
                    control={control}
                    render={({ onChange, value }) => (
                      <FileUploadField
                        initialFileUrls={value}
                        directory="portfolio-images"
                        accept="image/jpg,image/jpeg,image/png"
                        autoUpload={!value}
                        maxFiles={1}
                        multiple={false}
                        canCancel
                        canRemove
                        onChangeStatus={({ meta }, status) => {
                          if (status === 'done') {
                            onChange(encodeURI(meta.fileUrl))
                          } else if (status === 'removed') {
                            onChange(null)
                          }
                        }}
                        LayoutComponent={null}
                        SubmitButtonComponent={null}
                      />
                    )}
                  />
                </ButtonContainer>
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
          {fields.length === 0 ? 'Add project' : 'Add another'}
        </StyledButton>
      </FormField>
      <ButtonContainer>
        <Button>Update Profile</Button>
      </ButtonContainer>
      {renderedDialog}
    </StyledForm>
  )
}

export default Portfolio

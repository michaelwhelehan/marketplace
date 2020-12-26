import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAlert } from 'react-alert'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  borderColorDark,
  black,
  primaryColor,
  white,
  primaryFontColor,
} from '../../../../styles/colors'
import {
  ParagraphM,
  ParagraphXS,
} from '../../../../uiComponents/atoms/Paragraphs'
import { fwBold } from '../../../../styles/typography'
import { useForm, Controller, useFieldArray } from 'react-hook-form'
import Avatar from '../../../../uiComponents/atoms/Avatar'
import Icon from '../../../../uiComponents/atoms/Icon'
import FieldContainer from '../../../../uiComponents/molecules/FieldContainer'
import FormField from '../../../../uiComponents/molecules/FormField'
import TextField from '../../../../uiComponents/atoms/TextField'
import TextAreaField from '../../../../uiComponents/atoms/TextAreaField'
import SelectField, {
  OptionType,
} from '../../../../uiComponents/atoms/SelectField'
import Button from '../../../../uiComponents/atoms/Button'
import CheckboxField from '../../../../uiComponents/atoms/CheckboxField'
import { UserProfileDetails_me } from '../gqlTypes/UserProfileDetails'
import { useAccountUpdate } from '../../../../services'
import { useGetSkillTagsQuery } from '../queries'
import ChangeAvatar from './ChangeAvatar'
import { titleCase } from '../../../../utils/format'

const StyledForm = styled.form`
  padding-top: 20px;
  padding-bottom: 20px;
`

const ProfileSplitContainer = styled.div`
  display: flex;
`

const ProfileSplit = styled.div`
  flex: 1;
  padding: 20px 40px;

  &:first-child {
    border-right: 1px solid;
    border-image: linear-gradient(to top, ${borderColorDark}, rgba(0, 0, 0, 0))
      1 100%;
  }
`

const ButtonContainer = styled.div`
  padding-right: 20px;
  display: flex;
  justify-content: flex-end;
`

const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  height: 75px;
`

const AvatarContainer = styled.div`
  position: relative;
  cursor: pointer;
`

const SectionValue = styled.div`
  margin-left: 10px;
`

const StyledName = styled(ParagraphM)`
  ${fwBold};
  color: ${black};
`

const HorizontalAlign = styled.div`
  display: flex;
`

const StyledCheckbox = styled(CheckboxField)`
  margin-right: 10px;
`

const EditIcon = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  background-color: ${primaryColor};
  right: 1px;
  bottom: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`

type LanguageType = {
  id: string
  language: OptionType
  level: OptionType
}

interface FormValues {
  firstName: string
  lastName: string
  email: string
  jobTitle: string
  skills: OptionType[]
  mobile: string
  bio: string
  language: LanguageType[]
}

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  jobTitle: yup.string().required('Position is required'),
})

interface Props {
  user: UserProfileDetails_me
}

const BasicInfo: FC<Props> = ({ user }) => {
  const { data: SkillTags } = useGetSkillTagsQuery()
  const [setAccountUpdate, { data, error }] = useAccountUpdate()
  const alert = useAlert()
  const [showChangeAvatar, setShowChangeAvatar] = useState(false)
  const { register, setError, errors, watch, control, handleSubmit } = useForm<
    FormValues
  >({
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      jobTitle: user.jobTitle,
      mobile: user.mobile,
      bio: user.bio,
      skills: user.skills.map((skill) => ({
        label: skill.name,
        value: skill.id,
      })),
      language: user.languages.map((userLanguage) => {
        const { id, language, level } = userLanguage
        return {
          id,
          language: {
            label: language.name,
            value: language.name,
          },
          level: {
            label: titleCase(level),
            value: level,
          },
        }
      }),
    },
    resolver: yupResolver(schema),
  })
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'language',
    keyName: 'identifier',
  })
  const watchNamePosition = watch(['firstName', 'lastName', 'jobTitle'])

  useEffect(() => {
    if (user.languages.length === 0) {
      append({})
    }
  }, [append, user.languages.length])

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
    delete data.email
    delete data.transport
    delete data.languages
    data.skills = data.skills.map((skill) => skill.value)
    setAccountUpdate({ input: data })
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <ProfileSplitContainer>
        <ProfileSplit>
          <SectionTitle>
            <AvatarContainer onClick={() => setShowChangeAvatar(true)}>
              <Avatar src={user.avatarUrl} size={75} />
              <EditIcon>
                <Icon name="MdEdit" size={14} color={white} />
              </EditIcon>
            </AvatarContainer>
            <SectionValue>
              <StyledName>
                {watchNamePosition.firstName} {watchNamePosition.lastName}
              </StyledName>
              <ParagraphXS>{watchNamePosition.jobTitle}</ParagraphXS>
            </SectionValue>
          </SectionTitle>
          <FieldContainer split spacingTop>
            <FormField label="First Name" error={errors.firstName}>
              <TextField
                name="firstName"
                placeholder="Enter your first name"
                ref={register()}
                fullWidth
                hasError={Boolean(errors.firstName)}
              />
            </FormField>
            <FormField label="Last Name" error={errors.lastName}>
              <TextField
                name="lastName"
                placeholder="Enter your last name"
                ref={register()}
                fullWidth
                hasError={Boolean(errors.lastName)}
              />
            </FormField>
            <FormField label="Email">
              <TextField
                name="email"
                placeholder="Enter your email address"
                ref={register()}
                fullWidth
                readOnly
              />
            </FormField>
            <FormField label="Position" error={errors.jobTitle}>
              <TextField
                name="jobTitle"
                placeholder="eg. Software Developer"
                ref={register()}
                fullWidth
                hasError={Boolean(errors.jobTitle)}
              />
            </FormField>
            <FormField label="Mobile" error={errors.mobile}>
              <TextField
                name="mobile"
                placeholder="Enter your mobile number"
                ref={register()}
                fullWidth
                hasError={Boolean(errors.mobile)}
              />
            </FormField>
            <div style={{ gridColumn: 'span 2' }}>
              <FormField label="Bio">
                <TextAreaField
                  name="bio"
                  ref={register()}
                  placeholder="Write a short piece about yourself"
                  fullWidth
                />
              </FormField>
            </div>
          </FieldContainer>
        </ProfileSplit>
        <ProfileSplit>
          <SectionTitle>
            <Icon name="MdBuild" size={60} color={primaryFontColor} />
            <SectionValue>
              <StyledName>Skills</StyledName>
              <ParagraphXS>
                These are your skills. Keep them updated with any new skills you
                learn so members know what you can offer.
              </ParagraphXS>
            </SectionValue>
          </SectionTitle>
          <FieldContainer spacingTop>
            <FormField label="What are you good at?">
              <Controller
                as={SelectField}
                name="skills"
                control={control}
                placeholder="eg. Accounting, cleaning, web development"
                isMulti
                options={SkillTags?.skillTags.edges.map((edge) => ({
                  label: edge.node.name,
                  value: edge.node.id,
                }))}
              />
            </FormField>
            {/* <FormField label="How do you get around?" spacingTop>
              <HorizontalAlign>
                <StyledCheckbox
                  name="transport"
                  label="Bicycle"
                  value="bicycle"
                  ref={register()}
                />
                <StyledCheckbox
                  name="transport"
                  label="Car"
                  value="car"
                  ref={register()}
                />
                <StyledCheckbox
                  name="transport"
                  label="Train"
                  value="train"
                  ref={register()}
                />
                <StyledCheckbox
                  name="transport"
                  label="Online"
                  value="online"
                  ref={register()}
                />
              </HorizontalAlign>
            </FormField> */}
            {fields.map((item, index) => (
              <FieldContainer key={item.identifier} split spacingTop>
                <FormField label="Language">
                  <Controller
                    as={SelectField}
                    name={`language[${index}].language`}
                    control={control}
                    placeholder="Language"
                    options={[
                      { label: 'English', value: 'English' },
                      { label: 'Afrikaans', value: 'Afrikaans' },
                      { label: 'Xhosa', value: 'Xhosa' },
                    ]}
                  />
                </FormField>
                <FormField label="Level">
                  <Controller
                    as={SelectField}
                    name={`language[${index}].level`}
                    control={control}
                    placeholder="Level"
                    options={[
                      { label: 'Beginner', value: 'BEGINNER' },
                      { label: 'Professional', value: 'PROFESSIONAL' },
                      { label: 'Fluent', value: 'FLUENT' },
                    ]}
                  />
                </FormField>
              </FieldContainer>
            ))}
          </FieldContainer>
        </ProfileSplit>
      </ProfileSplitContainer>
      <ButtonContainer>
        <Button>Update Profile</Button>
      </ButtonContainer>
      {showChangeAvatar && (
        <ChangeAvatar
          currentAvatar={user.avatarUrl}
          onUpload={(avatarUrl) => setAccountUpdate({ input: { avatarUrl } })}
          onClose={() => setShowChangeAvatar(false)}
        />
      )}
    </StyledForm>
  )
}

export default BasicInfo

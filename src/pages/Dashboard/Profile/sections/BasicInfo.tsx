import React, { FC } from 'react'
import styled from 'styled-components'
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
import { useForm, Controller } from 'react-hook-form'
import Avatar from '../../../../uiComponents/atoms/Avatar'
import Icon from '../../../../uiComponents/atoms/Icon'
import FieldContainer from '../../../../uiComponents/molecules/FieldContainer'
import FormField from '../../../../uiComponents/molecules/FormField'
import TextField from '../../../../uiComponents/atoms/TextField'
import TextAreaField from '../../../../uiComponents/atoms/TextAreaField'
import SelectField from '../../../../uiComponents/atoms/SelectField'
import Button from '../../../../uiComponents/atoms/Button'
import CheckboxField from '../../../../uiComponents/atoms/CheckboxField'
import { UserProfileDetails_me } from '../gqlTypes/UserProfileDetails'

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

const ChangeAvatar = styled.div`
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

type FormValues = {
  firstName: String
  lastName: String
  email: String
  position: String
  skills: String[]
}

interface Props {
  user: UserProfileDetails_me
}

const BasicInfo: FC<Props> = ({ user }) => {
  const { register, watch, control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      position: 'Software Developer',
    },
  })
  const watchNamePosition = watch(['firstName', 'lastName', 'position'])
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <ProfileSplitContainer>
        <ProfileSplit>
          <SectionTitle>
            <ChangeAvatar>
              <Avatar src={user.avatarUrl} size={75} />
              <EditIcon>
                <Icon name="MdEdit" size={14} color={white} />
              </EditIcon>
            </ChangeAvatar>
            <SectionValue>
              <StyledName>
                {watchNamePosition.firstName} {watchNamePosition.lastName}
              </StyledName>
              <ParagraphXS>{watchNamePosition.position}</ParagraphXS>
            </SectionValue>
          </SectionTitle>
          <FieldContainer split spacingTop>
            <FormField label="First Name">
              <TextField
                name="firstName"
                placeholder="Enter your first name"
                ref={register()}
                fullWidth
              />
            </FormField>
            <FormField label="Last Name">
              <TextField
                name="lastName"
                placeholder="Enter your last name"
                ref={register()}
                fullWidth
              />
            </FormField>
            <FormField label="Email">
              <TextField
                name="email"
                placeholder="Enter your email address"
                ref={register()}
                fullWidth
              />
            </FormField>
            <FormField label="Position">
              <TextField
                name="position"
                placeholder="eg. Software Developer"
                ref={register()}
                fullWidth
              />
            </FormField>
            <FormField label="Mobile">
              <TextField
                name="mobile"
                placeholder="Enter your mobile number"
                ref={register()}
                fullWidth
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
                options={[
                  { label: 'Accounting', value: 'accounting' },
                  { label: 'Cleaning', value: 'cleaning' },
                  { label: 'Web Development', value: 'web' },
                ]}
              />
            </FormField>
            <FormField label="How do you get around?" spacingTop>
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
            </FormField>
            <FormField label="What languages can you speak/write?" spacingTop>
              <Controller
                as={SelectField}
                name="languages"
                control={control}
                placeholder="eg. English, Afrikaans, Xhosa"
                isMulti
                options={[
                  { label: 'English', value: 'english' },
                  { label: 'Afrikaans', value: 'afrikaans' },
                  { label: 'Xhosa', value: 'xhosa' },
                ]}
              />
            </FormField>
          </FieldContainer>
        </ProfileSplit>
      </ProfileSplitContainer>
      <ButtonContainer>
        <Button>Update Profile</Button>
      </ButtonContainer>
    </StyledForm>
  )
}

export default BasicInfo

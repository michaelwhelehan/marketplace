import React, { FC } from 'react'
import DashboardPageContainer from '../DashboardPageContainer'
import ProfileHeader from './sections/ProfileHeader'
import styled from 'styled-components'
import {
  borderColorDark,
  black,
  primaryFontColor,
  white,
  primaryColor,
} from '../../../styles/colors'
import Avatar from '../../../uiComponents/atoms/Avatar'
import Button from '../../../uiComponents/atoms/Button'
import profilePictureUrl from '../../../assets/images/profile.png'
import FormField from '../../../uiComponents/molecules/FormField'
import TextField from '../../../uiComponents/atoms/TextField'
import TextAreaField from '../../../uiComponents/atoms/TextAreaField'
import RadioField from '../../../uiComponents/atoms/RadioField'
import SelectField from '../../../uiComponents/atoms/SelectField'
import { Controller, useForm } from 'react-hook-form'
import { ParagraphM, ParagraphXS } from '../../../uiComponents/atoms/Paragraphs'
import { fwBold } from '../../../styles/typography'
import Icon from '../../../uiComponents/atoms/Icon'

const ProfileForm = styled.form`
  padding-top: 20px;
  padding-bottom: 20px;
`

const ProfileSplitContainer = styled.div`
  display: flex;
`

const ProfileSplit = styled.div`
  flex: 1;
  padding: 20px;

  &:first-child {
    border-right: 1px solid ${borderColorDark};
  }
`

const FieldContainer = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
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

const StyledRadio = styled(RadioField)`
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

const ProfilePage: FC = () => {
  const { register, watch, control, handleSubmit } = useForm({
    defaultValues: {
      firstName: 'Mike',
      lastName: 'Wells',
      email: 'mike@wells.com',
      position: 'Software Developer',
    },
  })
  const watchNamePosition = watch(['firstName', 'lastName', 'position'])
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <DashboardPageContainer>
      <ProfileHeader />
      <ProfileForm onSubmit={handleSubmit(onSubmit)}>
        <ProfileSplitContainer>
          <ProfileSplit>
            <SectionTitle>
              <ChangeAvatar>
                <Avatar src={profilePictureUrl} size={75} />
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
            <FieldContainer>
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
                  These are you skills. Keep them updated with any new skills
                  you learn so members know what you can offer
                </ParagraphXS>
              </SectionValue>
            </SectionTitle>
            <FormField label="What are you good at?" spacingTop>
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
                <StyledRadio
                  name="transport"
                  label="Bicycle"
                  value="bicycle"
                  ref={register()}
                />
                <StyledRadio
                  name="transport"
                  label="Car"
                  value="car"
                  ref={register()}
                />
                <StyledRadio
                  name="transport"
                  label="Train"
                  value="train"
                  ref={register()}
                />
                <StyledRadio
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
            <FormField label="What qualifications have you got?" spacingTop>
              <Controller
                as={SelectField}
                name="qualifications"
                control={control}
                placeholder="eg. High school certificate"
                isMulti
                isCreatable
                options={[]}
              />
            </FormField>
            <FormField label="What's your work experience?" spacingTop>
              <TextAreaField
                name="experience"
                ref={register()}
                placeholder="eg. 3 years as a Barista"
                fullWidth
              />
            </FormField>
          </ProfileSplit>
        </ProfileSplitContainer>
        <ButtonContainer>
          <Button>Update Profile</Button>
        </ButtonContainer>
      </ProfileForm>
    </DashboardPageContainer>
  )
}

export default ProfilePage

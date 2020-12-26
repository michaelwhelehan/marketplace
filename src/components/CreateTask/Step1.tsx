import React, { FC, useCallback } from 'react'
import TextField from '../../uiComponents/atoms/TextField'
import FormField from '../../uiComponents/molecules/FormField'
import TextAreaField from '../../uiComponents/atoms/TextAreaField'
import SelectField from '../../uiComponents/atoms/SelectField'
import { Controller, useForm } from 'react-hook-form'

interface Props {
  onNextStep: () => void
}

type TitleType = {
  title: string
}

const Step1: FC<Props> & TitleType = ({ onNextStep }) => {
  const { register, control, handleSubmit } = useForm()

  const handleStepSubmit = useCallback(
    (data) => {
      console.log(data)
      onNextStep()
    },
    [onNextStep],
  )

  return (
    <form id="create-task-1" onSubmit={handleSubmit(handleStepSubmit)}>
      <FormField label="What do you need done?" required>
        <TextField
          name="title"
          ref={register()}
          fullWidth
          placeholder="This'll be the title of your task - E.g. Help move my sofa"
        />
      </FormField>
      <FormField label="What category is this task in?" spacingTop>
        <Controller
          as={SelectField}
          name="tags"
          control={control}
          placeholder="Add a tag to categorize your task"
          options={[{ label: 'Accounting', value: 'accounting' }]}
        />
      </FormField>
      <FormField label="What are the details?" required spacingTop>
        <TextAreaField
          name="details"
          ref={register()}
          fullWidth
          placeholder="Be as specific as you can about what needs doing"
        />
      </FormField>
    </form>
  )
}

Step1.title = 'Tell us what you need done?'

export default Step1

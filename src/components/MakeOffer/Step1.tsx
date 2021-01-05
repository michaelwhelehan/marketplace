import React, { Dispatch, FC, MouseEvent, useCallback } from 'react'
import FormField from '../../uiComponents/molecules/FormField'
import TextFieldIcon from '../../uiComponents/molecules/TextFieldIcon'
import TextAreaField from '../../uiComponents/atoms/TextAreaField'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Offer } from './types'

interface FormValues {
  amount: number
  message: string
}

const schema = yup.object().shape({
  amount: yup.number().required('Offer amount is required'),
  message: yup
    .string()
    .required('Message is required')
    .min(25, 'Please enter at least 25 characters'),
})

interface Props {
  onNextStep: () => void
  setSubmitting: Dispatch<boolean>
  setOffer: Dispatch<Offer>
  offer: Offer | null
  taskId: string
  onClose: (event: MouseEvent) => void
}

type TitleType = {
  title: string
}

const Step1: FC<Props> & TitleType = ({ onNextStep, setOffer }) => {
  const { register, errors, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(schema),
  })

  const handleStepSubmit = useCallback(
    (data: FormValues) => {
      setOffer(data)
      onNextStep()
    },
    [onNextStep, setOffer],
  )

  return (
    <form id="make-offer-1" onSubmit={handleSubmit(handleStepSubmit)}>
      <FormField
        label="How much do you want to offer?"
        helpText="Please enter the price of the offer you want to make. The poster will then decide if they want to accept it or not."
        required
        error={errors.amount}
        renderHelpPopup={() => <>This is the help section</>}
      >
        <TextFieldIcon
          type="number"
          customIcon="$"
          name="amount"
          ref={register()}
          fullWidth
          placeholder="Enter an amount"
          hasError={Boolean(errors.amount)}
        />
      </FormField>
      <FormField
        label="Why should you be chosen?"
        required
        error={errors.message}
        spacingTop
      >
        <TextAreaField
          name="message"
          ref={register()}
          fullWidth
          placeholder="Motivate why the poster should choose you to do this task."
          hasError={Boolean(errors.message)}
        />
      </FormField>
    </form>
  )
}

Step1.title = 'Make an Offer'

export default Step1

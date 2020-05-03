import React, { FC, MouseEvent, useCallback, useState, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import Modal from '../../uiComponents/molecules/Modal'
import Button from '../../uiComponents/atoms/Button'
import Step1 from './Step1'
import styled from 'styled-components'
import Step2 from './Step2'
import Step3 from './Step3'

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;

  > button:first-child {
    margin-right: 10px;
  }
`

type StepType = 'step1' | 'step2' | 'step3'

interface CreateTaskProps {
  onClose: (event: MouseEvent) => void
}

interface CreateTaskFooterProps {
  onPreviousClick?: (event: MouseEvent) => void
  onNextClick: (event: MouseEvent) => void
  proceedText: string
}

const CreateTaskFooter: FC<CreateTaskFooterProps> = ({
  onPreviousClick,
  onNextClick,
  proceedText,
}) => (
  <FooterContainer>
    {onPreviousClick ? (
      <Button styleType="primary-outline" onClick={onPreviousClick}>
        Back
      </Button>
    ) : null}
    <Button onClick={onNextClick}>{proceedText}</Button>
  </FooterContainer>
)

const CreateTask: FC<CreateTaskProps> = ({ onClose }) => {
  const [currentStep, setStep] = useState<StepType>('step1')
  const { register, watch, control, handleSubmit } = useForm({
    defaultValues: {
      where: 'in-person',
      budgetType: 'total',
    },
  })

  const handleStep1Submit = useCallback(data => {
    console.log(data)
    setStep('step2')
  }, [])

  const handleStep2Submit = useCallback(data => {
    console.log(data)
    setStep('step3')
  }, [])

  const handleStep3Submit = useCallback(data => {
    console.log(data)
  }, [])

  const handleStepSubmit = useCallback(
    data => {
      switch (currentStep) {
        case 'step1':
          handleStep1Submit(data)
          break
        case 'step2':
          handleStep2Submit(data)
          break
        case 'step3':
          handleStep3Submit(data)
      }
    },
    [currentStep, handleStep1Submit, handleStep2Submit, handleStep3Submit],
  )

  const handlePrevious = useCallback(() => {
    switch (currentStep) {
      case 'step2':
        setStep('step1')
        break
      case 'step3':
        setStep('step2')
        break
    }
  }, [currentStep])

  const Step = useMemo(() => {
    switch (currentStep) {
      case 'step1':
        return Step1
      case 'step2':
        return Step2
      case 'step3':
        return Step3
    }
  }, [currentStep])

  return (
    <Modal
      title={Step.title}
      overflowContent={currentStep === 'step3'}
      onClose={onClose}
      renderFooter={() => (
        <CreateTaskFooter
          onPreviousClick={currentStep !== 'step1' && handlePrevious}
          onNextClick={handleSubmit(handleStepSubmit)}
          proceedText={currentStep === 'step3' ? 'Get quotes' : 'Next'}
        />
      )}
    >
      <Step register={register} watch={watch} control={control} />
    </Modal>
  )
}

export default CreateTask

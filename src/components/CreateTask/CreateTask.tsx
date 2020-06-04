import React, { FC, MouseEvent, useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import Modal from '../../uiComponents/molecules/Modal'
import Button from '../../uiComponents/atoms/Button'
import styled from 'styled-components'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import useWizard from '../../hooks/useWizard'

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;

  > button:first-child {
    margin-right: 10px;
  }
`

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
  const { currentStep, onNextStep, onPrevStep, canGoBack } = useWizard(3)
  const { register, watch, control, handleSubmit } = useForm({
    defaultValues: {
      where: 'in-person',
      budgetType: 'total',
    },
  })

  const handleStep1Submit = useCallback(
    data => {
      console.log(data)
      onNextStep()
    },
    [onNextStep],
  )

  const handleStep2Submit = useCallback(
    data => {
      console.log(data)
      onNextStep()
    },
    [onNextStep],
  )

  const handleStep3Submit = useCallback(data => {
    console.log(data)
  }, [])

  const handleStepSubmit = useCallback(
    data => {
      switch (currentStep) {
        case 1:
          handleStep1Submit(data)
          break
        case 2:
          handleStep2Submit(data)
          break
        case 3:
          handleStep3Submit(data)
      }
    },
    [currentStep, handleStep1Submit, handleStep2Submit, handleStep3Submit],
  )

  const Step = useMemo(() => {
    switch (currentStep) {
      case 1:
        return Step1
      case 2:
        return Step2
      case 3:
        return Step3
    }
  }, [currentStep])

  return (
    <Modal
      title={Step.title}
      overflowContent={currentStep === 3}
      onClose={onClose}
      renderFooter={() => (
        <CreateTaskFooter
          onPreviousClick={canGoBack && onPrevStep}
          onNextClick={handleSubmit(handleStepSubmit)}
          proceedText={currentStep === 3 ? 'Get quotes' : 'Next'}
        />
      )}
    >
      <Step register={register} watch={watch} control={control} />
    </Modal>
  )
}

export default CreateTask

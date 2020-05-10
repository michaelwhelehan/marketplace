import React, { FC, MouseEvent, useCallback, useState, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import Modal from '../../uiComponents/molecules/Modal'
import Button from '../../uiComponents/atoms/Button'
import styled from 'styled-components'
import Step1 from './Step1'
import Step2 from './Step2'

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;

  > button:first-child {
    margin-right: 10px;
  }
`

type StepType = 'step1' | 'step2'

interface MakeOfferProps {
  onClose: (event: MouseEvent) => void
}

interface MakeOfferFooterProps {
  onPreviousClick?: (event: MouseEvent) => void
  onNextClick: (event: MouseEvent) => void
  proceedText: string
}

const MakeOfferFooter: FC<MakeOfferFooterProps> = ({
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

const MakeOffer: FC<MakeOfferProps> = ({ onClose }) => {
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
      }
    },
    [currentStep, handleStep1Submit, handleStep2Submit],
  )

  const handlePrevious = useCallback(() => {
    switch (currentStep) {
      case 'step2':
        setStep('step1')
        break
    }
  }, [currentStep])

  const Step = useMemo(() => {
    switch (currentStep) {
      case 'step1':
        return Step1
      case 'step2':
        return Step2
    }
  }, [currentStep])

  return (
    <Modal
      title={Step.title}
      onClose={onClose}
      overflowContent={false}
      renderFooter={() => (
        <MakeOfferFooter
          onPreviousClick={currentStep !== 'step1' && handlePrevious}
          onNextClick={handleSubmit(handleStepSubmit)}
          proceedText={currentStep === 'step2' ? 'Make Offer' : 'Continue'}
        />
      )}
    >
      <Step register={register} watch={watch} control={control} />
    </Modal>
  )
}

export default MakeOffer

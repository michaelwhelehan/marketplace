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
  currentStep: number
  onPreviousClick?: (event: MouseEvent) => void
  proceedText: string
}

const CreateTaskFooter: FC<CreateTaskFooterProps> = ({
  currentStep,
  onPreviousClick,
  proceedText,
}) => (
  <FooterContainer>
    {onPreviousClick ? (
      <Button styleType="primary-outline" onClick={onPreviousClick}>
        Back
      </Button>
    ) : null}
    <Button form={`create-task-${currentStep}`} type="submit">
      {proceedText}
    </Button>
  </FooterContainer>
)

const CreateTask: FC<CreateTaskProps> = ({ onClose }) => {
  const { currentStep, onNextStep, onPrevStep, canGoBack } = useWizard(3)

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
          currentStep={currentStep}
          onPreviousClick={canGoBack && onPrevStep}
          proceedText={currentStep === 3 ? 'Get quotes' : 'Next'}
        />
      )}
    >
      <Step onNextStep={onNextStep} />
    </Modal>
  )
}

export default CreateTask

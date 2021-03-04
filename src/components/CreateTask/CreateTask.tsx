import React, { FC, MouseEvent, useState, useMemo } from 'react'
import Modal from '../../uiComponents/molecules/Modal'
import Button from '../../uiComponents/atoms/Button'
import styled from 'styled-components'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import useWizard from '../../hooks/useWizard'
import { useTask } from '../../services'

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
  isSubmitting: boolean
  onPreviousClick?: (event: MouseEvent) => void
  proceedText: string
}

const CreateTaskFooter: FC<CreateTaskFooterProps> = ({
  currentStep,
  isSubmitting,
  onPreviousClick,
  proceedText,
}) => (
  <FooterContainer>
    {onPreviousClick ? (
      <Button styleType="primary-outline" onClick={onPreviousClick}>
        Back
      </Button>
    ) : null}
    <Button
      form={`create-task-${currentStep}`}
      type="submit"
      disabled={isSubmitting}
    >
      {isSubmitting ? 'Loading...' : proceedText}
    </Button>
  </FooterContainer>
)

const CreateTask: FC<CreateTaskProps> = ({ onClose }) => {
  const { currentStep, onNextStep, onPrevStep, canGoBack } = useWizard(3)
  const [isSubmitting, setSubmitting] = useState<boolean>(false)
  const taskStorageAPI = useTask()

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
          isSubmitting={isSubmitting}
          onPreviousClick={canGoBack && onPrevStep}
          proceedText={currentStep === 3 ? 'Get quotes' : 'Next'}
        />
      )}
    >
      <Step
        onNextStep={onNextStep}
        setSubmitting={setSubmitting}
        taskStorageAPI={taskStorageAPI}
        onClose={onClose}
      />
    </Modal>
  )
}

export default CreateTask

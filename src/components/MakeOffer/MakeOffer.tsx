import React, { FC, MouseEvent, useMemo, useState } from 'react'
import Modal from '../../uiComponents/molecules/Modal'
import Button from '../../uiComponents/atoms/Button'
import styled from 'styled-components'
import Step1 from './Step1'
import Step2 from './Step2'
import useWizard from '../../hooks/useWizard'
import { Offer } from './types'

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;

  > button:first-child {
    margin-right: 10px;
  }
`

interface MakeOfferProps {
  taskId: string
  onClose: (event: MouseEvent) => void
}

interface MakeOfferFooterProps {
  currentStep: number
  isSubmitting: boolean
  onPreviousClick?: (event: MouseEvent) => void
  proceedText: string
}

const MakeOfferFooter: FC<MakeOfferFooterProps> = ({
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
      form={`make-offer-${currentStep}`}
      type="submit"
      disabled={isSubmitting}
    >
      {isSubmitting ? 'Loading...' : proceedText}
    </Button>
  </FooterContainer>
)

const MakeOffer: FC<MakeOfferProps> = ({ taskId, onClose }) => {
  const { currentStep, onNextStep, onPrevStep, canGoBack } = useWizard(2)
  const [isSubmitting, setSubmitting] = useState<boolean>(false)
  const [offer, setOffer] = useState<Offer>(null)

  const Step = useMemo(() => {
    switch (currentStep) {
      case 1:
        return Step1
      case 2:
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
          currentStep={currentStep}
          isSubmitting={isSubmitting}
          onPreviousClick={canGoBack && onPrevStep}
          proceedText={currentStep === 2 ? 'Make Offer' : 'Continue'}
        />
      )}
    >
      <Step
        taskId={taskId}
        onNextStep={onNextStep}
        setSubmitting={setSubmitting}
        setOffer={setOffer}
        offer={offer}
        onClose={onClose}
      />
    </Modal>
  )
}

export default MakeOffer

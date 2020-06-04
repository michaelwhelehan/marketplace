import { useState, useCallback } from 'react'

export default function useWizard(numSteps: number, initialStep = 1) {
  const [currentStep, setStep] = useState<number>(initialStep)

  const canGoBack = currentStep > 1
  const canGoForward = currentStep < numSteps

  const handleNextStep = useCallback(() => {
    if (canGoForward) {
      setStep(prevStep => prevStep + 1)
    }
  }, [canGoForward])

  const handlePrevStep = useCallback(() => {
    if (canGoBack) {
      setStep(prevStep => prevStep - 1)
    }
  }, [canGoBack])

  return {
    currentStep,
    onNextStep: handleNextStep,
    onPrevStep: handlePrevStep,
    canGoBack,
    canGoForward,
  }
}

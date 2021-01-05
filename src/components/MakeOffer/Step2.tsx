import React, { MouseEvent, Dispatch, FC, useCallback } from 'react'
import styled from 'styled-components'
import {
  ParagraphM,
  ParagraphL,
  ParagraphS,
} from '../../uiComponents/atoms/Paragraphs'
import { primaryColor } from '../../styles/colors'
import { fwBold } from '../../styles/typography'
import { Offer } from './types'
import { useOfferCreateMutation } from './mutations'

const SectionText = styled(ParagraphM)`
  text-align: center;
`

const ConfirmAmount = styled(ParagraphL)`
  text-align: center;
  color: ${primaryColor};
  ${fwBold};
`

const StyledParagraph = styled(ParagraphS)`
  margin-top: 10px;
`

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

const Step2: FC<Props> & TitleType = ({
  offer,
  setSubmitting,
  taskId,
  onClose,
}) => {
  const createOffer = useOfferCreateMutation()

  const handleStepSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      try {
        setSubmitting(true)
        await createOffer({
          variables: {
            input: {
              task: taskId,
              amountAmount: offer.amount,
              message: offer.message,
            },
          },
        })
        onClose(null)
      } catch (e) {
        console.error(e)
      } finally {
        setSubmitting(false)
      }
    },
    [setSubmitting, offer, createOffer, taskId, onClose],
  )

  return (
    <form id="make-offer-2" onSubmit={handleStepSubmit}>
      <SectionText>
        You are making an offer for the following amount:
      </SectionText>
      <ConfirmAmount>${offer?.amount}</ConfirmAmount>
      <SectionText style={{ marginTop: '20px' }}>
        The reason you have given to be chosen is:
      </SectionText>
      <StyledParagraph>{offer?.message}</StyledParagraph>
    </form>
  )
}

Step2.title = 'Confirm Offer'

export default Step2

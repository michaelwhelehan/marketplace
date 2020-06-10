import React, { FC, MouseEvent } from 'react'
import Modal from '../../uiComponents/molecules/Modal'
import Button from '../../uiComponents/atoms/Button'
import styled from 'styled-components'
import SelectField from '../../uiComponents/atoms/SelectField'

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;

  > button:first-child {
    margin-right: 10px;
  }
`

interface RejectOfferProps {
  onClose: (event: MouseEvent) => void
}

interface RejectOfferFooterProps {
  onRejectClick?: (event: MouseEvent) => void
  onCounterOfferClick: (event: MouseEvent) => void
}

const RejectOfferFooter: FC<RejectOfferFooterProps> = ({
  onRejectClick,
  onCounterOfferClick,
}) => (
  <FooterContainer>
    <Button styleType="primary-outline" onClick={onCounterOfferClick}>
      Make Counter-Offer
    </Button>
    <Button onClick={onRejectClick}>Reject</Button>
  </FooterContainer>
)

const RejectOffer: FC<RejectOfferProps> = ({ onClose }) => {
  return (
    <Modal
      title="Reject Offer"
      onClose={onClose}
      overflowContent={false}
      renderFooter={() => (
        <RejectOfferFooter
          onRejectClick={() => console.log('reject')}
          onCounterOfferClick={() => console.log('counter offer')}
        />
      )}
    >
      <SelectField
        placeholder="Select a reason"
        options={[
          { label: 'Project is spam or fraud', value: 'spam' },
          {
            label: 'The employer is unclear about what they want',
            value: 'unclear',
          },
          {
            label: 'We donot agree on the budget',
            value: 'budget',
          },
          {
            label: 'I already have enough work',
            value: 'work',
          },
          {
            label: 'I donot have the skills to complete the project',
            value: 'skills',
          },
          {
            label: 'I donot have the time to take on the project',
            value: 'time',
          },
        ]}
      />
    </Modal>
  )
}

export default RejectOffer

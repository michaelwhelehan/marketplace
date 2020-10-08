import React, { FC } from 'react'
import styled from 'styled-components'
import {
  ParagraphM,
  ParagraphL,
  ParagraphS,
} from '../../uiComponents/atoms/Paragraphs'
import { primaryColor } from '../../styles/colors'
import { fwBold } from '../../styles/typography'
import faker from 'faker'

const ConfirmOfferContainer = styled.div``

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
  register: any
  control: any
  watch: any
}

type TitleType = {
  title: string
}

const Step2: FC<Props> & TitleType = () => {
  return (
    <ConfirmOfferContainer>
      <SectionText>
        You are making an offer for the following amount:
      </SectionText>
      <ConfirmAmount>$500</ConfirmAmount>
      <SectionText style={{ marginTop: '20px' }}>
        The reason you have given to be chosen is:
      </SectionText>
      <StyledParagraph>{faker.lorem.paragraph(15)}</StyledParagraph>
    </ConfirmOfferContainer>
  )
}

Step2.title = 'Confirm Offer'

export default Step2

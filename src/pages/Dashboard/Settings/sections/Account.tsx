import React, { FC } from 'react'
import styled from 'styled-components'
import Button from '../../../../uiComponents/atoms/Button'
import { ParagraphM } from '../../../../uiComponents/atoms/Paragraphs'
import { red } from '../../../../styles/colors'
import { fwBold } from '../../../../styles/typography'

const Container = styled.div`
  padding: 20px;
`

const Heading = styled(ParagraphM)`
  ${fwBold};
  color: ${red};
  margin-bottom: 10px;
`

const Account: FC = () => {
  return (
    <Container>
      <Heading>Danger Zone</Heading>
      <Button styleType="error">Delete Account</Button>
    </Container>
  )
}

export default Account

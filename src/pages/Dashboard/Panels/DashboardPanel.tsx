import React, { FC } from 'react'
import styled from 'styled-components'
import { white, borderColor, black } from '../../../styles/colors'
import { HeadingM } from '../../../uiComponents/atoms/Headings'
import { featherShadow } from '../../../styles/shadows'

const Container = styled.div`
  background-color: ${white};
  border: 1px solid ${borderColor};
  ${featherShadow};
`

const Header = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${borderColor};
`

const Body = styled.div``

const Footer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledHeading = styled(HeadingM)`
  color: ${black};
`

interface Props {
  title: string
  footerContent?: JSX.Element
}

const DashboardPanel: FC<Props> = ({ title, children, footerContent }) => {
  return (
    <Container>
      <Header>
        <StyledHeading>{title}</StyledHeading>
      </Header>
      <Body>{children}</Body>
      {footerContent ? <Footer>{footerContent}</Footer> : null}
    </Container>
  )
}

export default DashboardPanel

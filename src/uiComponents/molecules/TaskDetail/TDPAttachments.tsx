import React, { FC } from 'react'
import styled from 'styled-components'
import { black } from '../../../styles/colors'
import { HeadingS } from '../../atoms/Headings'
import faker from 'faker'

const Container = styled.article`
  padding: 20px;
  padding-top: 0;
`

const Title = styled(HeadingS)`
  color: ${black};
`

const AttachmentContainer = styled.div`
  margin-top: 10px;
`

const Attachment = styled.img`
  cursor: pointer;
  border-radius: 6px;
  margin-right: 10px;
`

interface Props {}

const TDPAttachments: FC<Props> = () => {
  return (
    <Container>
      <Title>Attachments</Title>
      <AttachmentContainer>
        <Attachment
          height={50}
          src={faker.image.imageUrl()}
          loading="lazy"
          importance="low"
        />
        <Attachment
          height={50}
          src={faker.image.imageUrl()}
          loading="lazy"
          importance="low"
        />
        <Attachment
          height={50}
          src={faker.image.imageUrl()}
          loading="lazy"
          importance="low"
        />
      </AttachmentContainer>
    </Container>
  )
}

export default TDPAttachments

import React, { FC } from 'react'
import styled from 'styled-components'
import { MemberType } from '../../../types/user'
import Avatar from '../../atoms/Avatar'
import { ParagraphS } from '../../atoms/Paragraphs'
import { fwBold } from '../../../styles/typography'
import { black } from '../../../styles/colors'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const UserName = styled(ParagraphS)`
  ${fwBold};
  color: ${black};
  margin-top: 10px;
`

interface Props {
  member: MemberType
}

const UserCard: FC<Props> = ({ member }) => {
  return (
    <Container>
      <Avatar src={member.profilePictureUrl} size={100} />
      <UserName>{member.name}</UserName>
    </Container>
  )
}

export default UserCard

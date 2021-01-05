import React, { FC, MouseEvent } from 'react'
import styled from 'styled-components'
import { black, primaryColor, white } from '../../../styles/colors'
import { HeadingS } from '../../../uiComponents/atoms/Headings'
import Avatar from '../../../uiComponents/atoms/Avatar'
import Icon from '../../../uiComponents/atoms/Icon'
import { Offers_offers } from '../../Marketplace/gqlTypes/Offers'
import { User } from '../../../services/fragments/gqlTypes/User'
import { Task_task } from '../gqlTypes/Task'
import { Link } from 'react-router-dom'

const Container = styled.article`
  padding: 20px;
  padding-top: 0;
`

const Title = styled(HeadingS)`
  color: ${black};
`

const OfferContainer = styled.div`
  margin-top: 10px;
  display: flex;
`

const OfferOuter = styled.div`
  cursor: pointer;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${primaryColor};
  width: 58px;
  height: 58px;
  position: relative;
`

const OfferInner = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 1px dashed ${white};
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledAvatar = styled(Avatar)`
  position: absolute;
  top: 4px;
  left: 4px;
`

interface Props {
  user: User
  task: Task_task
  offers: Offers_offers
  onMakeOfferClick: (event: MouseEvent) => void
}

const TDPOffers: FC<Props> = ({ user, task, offers, onMakeOfferClick }) => {
  return (
    <Container>
      <Title>Offers ({offers.totalCount})</Title>
      <OfferContainer>
        {offers.edges.slice(0, 10).map(({ node }) => (
          <Link
            key={node.id}
            to={`/profile/${node.createdBy.username}`}
            target="_blank"
          >
            <OfferOuter>
              <StyledAvatar src={node.createdBy.avatarUrl} size={50} />
            </OfferOuter>
          </Link>
        ))}
        {user.id !== task.owner.id &&
          !offers.edges.some(({ node }) => node.createdBy.id === user.id) && (
            <OfferOuter onClick={onMakeOfferClick}>
              <OfferInner>
                <Icon name="MdAdd" size={35} color={white} />
              </OfferInner>
            </OfferOuter>
          )}
        {user.id === task.owner.id && offers.edges.length === 0 && (
          <p>Nobody has made an offer on your task yet.</p>
        )}
      </OfferContainer>
    </Container>
  )
}

export default TDPOffers

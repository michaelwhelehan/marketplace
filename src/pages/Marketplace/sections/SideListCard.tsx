import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { TaskType } from '../../../types/task'
import { HeadingS } from '../../../uiComponents/atoms/Headings'
import { ParagraphL, ParagraphXS } from '../../../uiComponents/atoms/Paragraphs'
import {
  black,
  borderColor,
  primaryFontColor,
  primaryColor,
} from '../../../styles/colors'
import Icon from '../../../uiComponents/atoms/Icon'
import { formatDate } from '../../../utils/date'
import Avatar from '../../../uiComponents/atoms/Avatar'

const CARD_PADDING = 6

const CardOuter = styled.div`
  display: block;
  text-decoration: none;
  padding: ${CARD_PADDING}px ${CARD_PADDING * 2}px;
  height: 100%;
`

const CardInner = styled.div<{ active?: boolean }>`
  border: 1px solid ${borderColor};
  box-shadow: ${({ active }) =>
    active
      ? `6px 6px 6px 0px rgba(0, 0, 0, 0.5)`
      : '2px 2px 2px 0px rgba(0, 0, 0, 0.25)'};
  border-radius: 6px;
  height: 100%;
  background: white;
  position: relative;
`

const CardMain = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`

const CardFooter = styled.div`
  border-top: 1px solid ${borderColor};
  padding: 12px 10px 5px 10px;
`

const CardRibbon = styled.div`
  position: absolute;
  background-color: ${primaryColor};
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 3px;
  border-radius: 0 0 4px 4px;
`

const CardTitle = styled(HeadingS)`
  color: ${black};
  height: 42px;
  flex-basis: 200px;
  overflow: hidden;
`

const CardStatus = styled(ParagraphXS)`
  color: ${primaryColor};
`

const CardOffers = styled(ParagraphXS)`
  margin-left: 10px;
`

const InfoDetails = styled.div``

const InfoRow = styled.div`
  display: flex;
  margin-top: 5px;
`

const InfoIcon = styled.div`
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const InfoValue = styled(ParagraphXS)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Budget = styled(ParagraphL)`
  line-height: 1;
  color: ${primaryColor};
  margin-bottom: 10px;
`

const CardStart = styled.div`
  padding-right: 10px;
`

const CardEnd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

interface Props {
  task: TaskType
}

const SideListCard: FC<Props> = ({ task }) => {
  return (
    <CardOuter to={`/${task.slug}`} as={Link}>
      <CardInner active={window.location.href.indexOf(task.slug) !== -1}>
        <CardMain>
          <CardStart>
            <CardTitle>{task.title}</CardTitle>
            <InfoDetails>
              <InfoRow>
                <InfoIcon>
                  <Icon name="MdPlace" size={20} color={primaryFontColor} />
                </InfoIcon>
                <InfoValue>{task.location}</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoIcon>
                  <Icon name="MdEventNote" size={20} color={primaryFontColor} />
                </InfoIcon>
                <InfoValue>
                  {formatDate(task.dueDate, 'ddd, D MMMM YYYY')}
                </InfoValue>
              </InfoRow>
            </InfoDetails>
          </CardStart>
          <CardEnd>
            <Budget>
              {task.currency.iso}
              {task.budget}
            </Budget>
            <Avatar src={task.creator.profilePictureUrl} size={30} />
          </CardEnd>
        </CardMain>
        <CardFooter>
          <CardStatus as="span">Open</CardStatus>
          <CardOffers as="span">- 2 offers</CardOffers>
        </CardFooter>
        <CardRibbon />
      </CardInner>
    </CardOuter>
  )
}

export default SideListCard

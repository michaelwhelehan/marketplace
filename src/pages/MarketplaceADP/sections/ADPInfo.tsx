import React, { FC } from 'react'
import styled from 'styled-components'
import { TaskType } from '../../../types/task'
import { primaryColor, primaryFontColor } from '../../../styles/colors'
import Avatar from '../../../uiComponents/atoms/Avatar'
import { fwBold, fsS, fsXXL } from '../../../styles/typography'
import { Link } from 'react-router-dom'
import Icon from '../../../uiComponents/atoms/Icon'
import { formatDate } from '../../../utils/date'
import { ParagraphXS } from '../../../uiComponents/atoms/Paragraphs'

const Container = styled.article`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`

const InfoDetails = styled.div``

const InfoRow = styled.div`
  display: flex;

  &:not(:first-child) {
    margin-top: 20px;
  }
`

const InfoIcon = styled.div`
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const InfoValue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const InfoValueTitle = styled(ParagraphXS)`
  ${fwBold};
  text-transform: uppercase;
`

const StyledLink = styled(Link)`
  margin-top: 5px;
  font-size: ${fsS}px;
  line-height: 1.25;
  ${fwBold};
  color: ${primaryColor};
  text-decoration: none;
`

const InfoValueValue = styled.p`
  margin-top: 5px;
  font-size: ${fsS}px;
  line-height: 1.25;
  ${fwBold};
  color: ${primaryFontColor};
`

const InfoBudget = styled.div`
  padding: 0 20px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InfoBudgetValue = styled.div`
  margin-top: 10px;
  ${fwBold};
  color: ${primaryColor};
  font-size: ${fsXXL}px;
`

interface Props {
  task: TaskType
}

const ADPInfo: FC<Props> = ({ task }) => {
  return (
    <Container>
      <InfoDetails>
        <InfoRow>
          <InfoIcon>
            <Avatar src={task.creator.profilePictureUrl} size={40} />
          </InfoIcon>
          <InfoValue>
            <InfoValueTitle>Posted By</InfoValueTitle>
            <StyledLink to="/">{task.creator.name}</StyledLink>
          </InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoIcon>
            <Icon name="MdPlace" size={40} color={primaryFontColor} />
          </InfoIcon>
          <InfoValue>
            <InfoValueTitle>Location</InfoValueTitle>
            <InfoValueValue>{task.location}</InfoValueValue>
          </InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoIcon>
            <Icon name="MdEventNote" size={40} color={primaryFontColor} />
          </InfoIcon>
          <InfoValue>
            <InfoValueTitle>Due Date</InfoValueTitle>
            <InfoValueValue>
              {formatDate(task.dueDate, 'dddd, D MMMM YYYY')}
            </InfoValueValue>
          </InfoValue>
        </InfoRow>
      </InfoDetails>
      <InfoBudget>
        <InfoValueTitle>Task Budget</InfoValueTitle>
        <InfoBudgetValue>
          {task.currency.iso}
          {task.budget}
        </InfoBudgetValue>
      </InfoBudget>
    </Container>
  )
}

export default ADPInfo

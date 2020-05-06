import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { TaskType } from '../../../types/task'
import { primaryColor, primaryFontColor } from '../../../styles/colors'
import Avatar from '../../../uiComponents/atoms/Avatar'
import { fwBold, fsS, fsXXL, fsXXS } from '../../../styles/typography'
import { Link } from 'react-router-dom'
import Icon from '../../../uiComponents/atoms/Icon'
import { formatDate } from '../../../utils/date'
import { ParagraphXS } from '../../../uiComponents/atoms/Paragraphs'
import { lighten } from 'polished'

const Container = styled.article`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`

const InfoStart = styled.div``

const InfoEnd = styled.div`
  display: flex;
`

const InfoContainer = styled.div``

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

const ReportLink = styled(Link)`
  margin-top: 20px;
  font-size: ${fsXXS}px;
  line-height: 1.25;
  ${fwBold};
  color: ${primaryFontColor};
  text-decoration: none;
`

const InfoValueValue = styled.p`
  margin-top: 5px;
  font-size: ${fsS}px;
  line-height: 1.25;
  ${fwBold};
  color: ${primaryFontColor};
`

const InfoSection = styled.div`
  padding: 0 20px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:first-child) {
    margin-top: 20px;
  }
`

const InfoShare = styled.div`
  margin-top: 10px;
  display: flex;

  svg {
    cursor: pointer;
  }
`

const InfoBudgetValue = styled.div`
  margin-top: 10px;
  ${fwBold};
  color: ${primaryColor};
  font-size: ${fsXXL}px;
`

const StatusBar = styled.div`
  display: flex;
`

const StatusIndicator = styled.div<{ active?: boolean }>`
  border-radius: 16px;
  ${fwBold};
  font-size: ${fsXXS}px;
  padding: 10px;
  text-transform: uppercase;
  color ${primaryFontColor};

  ${({ active }) =>
    active &&
    css`
      color: ${primaryColor};
      background-color: ${lighten(0.4, primaryColor)};
    `}

  &:not(:last-child) {
    margin-right: 5px;
  }
`

interface Props {
  task: TaskType
}

const ADPInfo: FC<Props> = ({ task }) => {
  return (
    <Container>
      <InfoStart>
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
      </InfoStart>
      <InfoEnd>
        <InfoContainer>
          <StatusBar>
            <StatusIndicator active>Open</StatusIndicator>
          </StatusBar>
        </InfoContainer>
        <InfoContainer>
          <InfoSection>
            <InfoValueTitle>Task Budget</InfoValueTitle>
            <InfoBudgetValue>
              {task.currency.iso}
              {task.budget}
            </InfoBudgetValue>
          </InfoSection>
          <InfoSection>
            <InfoValueTitle>Share</InfoValueTitle>
            <InfoShare>
              <Icon
                name="FaFacebook"
                size={20}
                color={primaryFontColor}
                spacingEnd
              />
              <Icon
                name="FaTwitter"
                size={20}
                color={primaryFontColor}
                spacingEnd
              />
              <Icon
                name="FaLinkedin"
                size={20}
                color={primaryFontColor}
                spacingEnd
              />
              <Icon name="MdCode" size={20} color={primaryFontColor} />
            </InfoShare>
            <ReportLink to="">
              <Icon name="MdFlag" size={10} /> Report this task
            </ReportLink>
          </InfoSection>
        </InfoContainer>
      </InfoEnd>
    </Container>
  )
}

export default ADPInfo

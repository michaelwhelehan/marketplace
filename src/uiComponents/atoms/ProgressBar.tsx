import React, { FC } from 'react'
import styled from 'styled-components'
import { primaryColor, lightGrey } from '../../styles/colors'
import { ParagraphXXS } from './Paragraphs'

const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledProgressBar = styled.div`
  width: 200px;
  height: 15px;
  position: relative;
  border-radius: 20px;
  background-color: ${lightGrey};
`

const ProgressBarInner = styled.div<{ percentComplete: number }>`
  position: absolute;
  left: 0;
  width: ${({ percentComplete }) => `${percentComplete}%`};
  height: 100%;
  background-color: ${primaryColor};
  border-radius: 20px;
`

const Description = styled(ParagraphXXS)`
  margin-bottom: 5px;
`

interface Props {
  percentComplete: number
  description?: string
}

const ProgressBar: FC<Props> = ({ percentComplete, description }) => {
  return (
    <ProgressBarContainer>
      {description ? <Description>{description}</Description> : null}
      <StyledProgressBar>
        <ProgressBarInner percentComplete={percentComplete} />
      </StyledProgressBar>
    </ProgressBarContainer>
  )
}

export default ProgressBar

import React, { FC } from 'react'
import styled from 'styled-components'
import { primaryColor, lightGrey } from '../../styles/colors'
import { ParagraphXXS } from './Paragraphs'

const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledProgressBar = styled.div<{ short?: boolean; fullWidth?: boolean }>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '200px')};
  height: ${({ short }) => (short ? '7px' : '14px')};
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
  short?: boolean
  fullWidth?: boolean
}

const ProgressBar: FC<Props> = ({
  percentComplete,
  description,
  short = false,
  fullWidth = false,
}) => {
  return (
    <ProgressBarContainer>
      {description ? <Description>{description}</Description> : null}
      <StyledProgressBar short={short} fullWidth={fullWidth}>
        <ProgressBarInner percentComplete={percentComplete} />
      </StyledProgressBar>
    </ProgressBarContainer>
  )
}

export default ProgressBar

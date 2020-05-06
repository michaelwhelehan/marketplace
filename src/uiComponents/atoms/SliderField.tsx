import React, { FC } from 'react'
import Slider from 'react-slider'
import styled from 'styled-components'
import {
  white,
  borderColor,
  borderColorDark,
  primaryColor,
  primaryFontColor,
} from '../../styles/colors'
import { fwBold } from '../../styles/typography'

const SliderContainer = styled.div`
  margin-bottom: 20px;
`

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 25px;
`

const StyledThumb = styled.div`
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  background-color: ${white};
  color: #fff;
  border-radius: 50%;
  border: 1px solid ${borderColorDark};
  cursor: grab;
`

const StyledTrack = styled.div<{ index: number; multiple: boolean }>`
  top: 10px;
  bottom: 10px;
  background: ${props =>
    !props.multiple
      ? props.index === 0
        ? primaryColor
        : borderColor
      : props.index === 1
      ? primaryColor
      : borderColor};
  border-radius: 999px;
`

const StyledTrackValue = styled.div`
  position: relative;
  top: 20px;
  left: -10px;
  color: ${primaryFontColor};
  ${fwBold};
`

const Thumb = props => <StyledThumb {...props} />

const Track = (props, state) => (
  <StyledTrack
    {...props}
    index={state.index}
    multiple={Array.isArray(state.value)}
  >
    {state.index === 1 && (
      <StyledTrackValue>
        {Array.isArray(state.value) ? (
          <>
            {props.unit}
            {Math.round((state.value[0] / 100) * props.range).toString()}
          </>
        ) : (
          <>
            {Math.round((state.value / 100) * props.range).toString()}
            {props.unit}
          </>
        )}
      </StyledTrackValue>
    )}
    {state.index === 2 && (
      <StyledTrackValue>
        {Array.isArray(state.value) ? (
          <>
            {props.unit}
            {Math.round((state.value[1] / 100) * props.range).toString()}
          </>
        ) : (
          <>
            {Math.round((state.value / 100) * props.range).toString()}
            {props.unit}
          </>
        )}
      </StyledTrackValue>
    )}
  </StyledTrack>
)

interface Props {
  range: number
  value: number | number[]
  unit: 'km' | 'R'
}

const SliderField: FC<Props> = ({ value, unit, range }) => {
  return (
    <SliderContainer>
      <StyledSlider
        value={value}
        renderTrack={(props, state) => Track({ ...props, range, unit }, state)}
        renderThumb={Thumb}
        minDistance={8}
      />
    </SliderContainer>
  )
}

export default SliderField

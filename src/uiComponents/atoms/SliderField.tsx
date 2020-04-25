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
  position: absolute;
  top: 20px;
  left: 0;
  color: ${primaryFontColor};
`

const Thumb = props => <StyledThumb {...props} />

const Track = (props, state) => (
  <StyledTrack
    {...props}
    index={state.index}
    multiple={Array.isArray(state.value)}
  >
    {console.log(props)}
    {state.index === 1 && (
      <StyledTrackValue>
        {Array.isArray(state.value) ? <>{state.value[0]}</> : state.value}
      </StyledTrackValue>
    )}
    {state.index === 2 && (
      <StyledTrackValue>
        {Array.isArray(state.value) ? <>{state.value[1]}</> : state.value}
      </StyledTrackValue>
    )}
  </StyledTrack>
)

interface Props {
  value: number | number[]
}

const SliderField: FC<Props> = ({ value }) => {
  return (
    <StyledSlider
      value={value}
      renderTrack={Track}
      renderThumb={Thumb}
      minDistance={8}
    />
  )
}

export default SliderField

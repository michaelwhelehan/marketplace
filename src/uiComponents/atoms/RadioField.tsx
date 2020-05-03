import React, { FC } from 'react'
import styled from 'styled-components'
import { borderColorDark, primaryColor } from '../../styles/colors'

const CheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: transparent;
  border: 2px solid ${borderColorDark};
  border-radius: 50%;

  &:after {
    content: '';
    position: absolute;
    display: none;
    top: 2px;
    left: 2px;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background: ${primaryColor};
  }
`

const Radio = styled.input.attrs(props => ({ type: 'radio' }))`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`

const Container = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  padding-top: 5px;
  padding-bottom: 5px;
  cursor: pointer;
  user-select: none;

  &:hover {
    ${CheckMark} {
      background-color: ${borderColorDark};
    }
  }

  ${Radio}:checked ~ ${CheckMark} {
    border-color: ${primaryColor};
    background-color: transparent;
  }

  ${Radio}:checked ~ ${CheckMark}:after {
    display: block;
  }
`

interface Props {
  name: string
  label: string
  value: string
  ref?: any
}

const RadioField: FC<Props> = React.forwardRef<any, Props>(
  ({ name, label, value, ...props }, ref) => {
    return (
      <Container {...props}>
        {label}
        <Radio ref={ref} name={name} value={value} />
        <CheckMark />
      </Container>
    )
  },
)

export default RadioField

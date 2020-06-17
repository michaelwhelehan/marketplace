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

  &:after {
    content: '';
    position: absolute;
    display: none;
    left: 7px;
    top: 2px;
    width: 7px;
    height: 14px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`

const Checkbox = styled.input.attrs(props => ({ type: 'checkbox' }))`
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

  ${Checkbox}:checked ~ ${CheckMark} {
    border-color: ${primaryColor};
    background-color: ${primaryColor};
  }

  ${Checkbox}:checked ~ ${CheckMark}:after {
    display: block;
  }
`

interface Props {
  name: string
  label: string
  value: string
  ref?: any
}

const CheckboxField: FC<Props> = React.forwardRef<any, Props>(
  ({ name, label, value, ...props }, ref) => {
    return (
      <Container {...props}>
        {label}
        <Checkbox ref={ref} name={name} value={value} />
        <CheckMark />
      </Container>
    )
  },
)

export default CheckboxField

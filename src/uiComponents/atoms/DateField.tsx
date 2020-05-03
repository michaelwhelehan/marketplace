import React, { FC } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import TextField from './TextField'

interface Props {
  placeholder?: string
  onChange: any
}

const DateField: FC<Props> = ({ placeholder, onChange, ...props }) => {
  return (
    <DayPickerInput
      component={props => <TextField {...props} />}
      placeholder={placeholder}
      onDayChange={onChange}
      {...props}
    />
  )
}

export default DateField

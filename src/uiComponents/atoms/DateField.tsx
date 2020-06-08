import React, { FC } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import TextFieldIcon from '../molecules/TextFieldIcon'

interface Props {
  placeholder?: string
  onChange: any
  fullWidth?: boolean
}

const DateField: FC<Props> = ({
  placeholder,
  onChange,
  fullWidth = false,
  ...props
}) => {
  return (
    <DayPickerInput
      component={props => (
        <TextFieldIcon
          iconName="MdDateRange"
          fullWidth={fullWidth}
          {...props}
        />
      )}
      placeholder={placeholder}
      onDayChange={onChange}
      {...props}
    />
  )
}

export default DateField

import React, { FC } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import TextFieldIcon from '../molecules/TextFieldIcon'

interface Props {
  placeholder?: string
  onChange: any
  fullWidth?: boolean
  hasError?: boolean
}

const DateField: FC<Props> = ({
  placeholder,
  onChange,
  fullWidth = false,
  hasError = false,
  ...props
}) => {
  return (
    <DayPickerInput
      component={(props) => (
        <TextFieldIcon
          iconName="MdDateRange"
          fullWidth={fullWidth}
          hasError={hasError}
          {...props}
        />
      )}
      placeholder={placeholder}
      onDayChange={onChange}
      style={{ display: 'block' }}
      dayPickerProps={{
        disabledDays: {
          before: new Date(),
        },
      }}
      {...props}
    />
  )
}

export default DateField

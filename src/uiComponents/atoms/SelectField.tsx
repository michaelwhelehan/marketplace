import React, { FC } from 'react'
import Select, { OptionTypeBase } from 'react-select'

interface OptionType extends OptionTypeBase {
  value: string | number
  label: string
}

interface Props {
  placeholder?: string
  options: OptionType[]
  styles?: unknown
}

const SelectField: FC<Props> = ({ placeholder, options, styles, ...props }) => {
  return (
    <Select
      placeholder={placeholder}
      options={options}
      styles={styles}
      {...props}
    />
  )
}

export default SelectField

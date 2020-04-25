import React, { FC } from 'react'
import Select, { OptionTypeBase } from 'react-select'
import { primaryFontColor, white } from '../../styles/colors'

interface OptionType extends OptionTypeBase {
  value: string | number
  label: string
}

interface Props {
  placeholder?: string
  options: OptionType[]
}

const filterStyles = {
  control: styles => ({
    ...styles,
    border: 'none',
    cursor: 'pointer',
    width: '180px',
    padding: 0,
  }),
  indicatorSeparator: styles => ({ ...styles, backgroundColor: white }),
  dropdownIndicator: styles => ({ ...styles, color: primaryFontColor }),
  placeholder: styles => ({ ...styles, color: primaryFontColor }),
}

const SelectField: FC<Props> = ({ placeholder, options }) => {
  return (
    <Select placeholder={placeholder} options={options} styles={filterStyles} />
  )
}

export default SelectField

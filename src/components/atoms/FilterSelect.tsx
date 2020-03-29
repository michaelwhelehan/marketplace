import React, { FC } from 'react'
import Select from 'react-select'
import { primaryFontColor, white } from '../../styles/colors'

interface Props {
  placeholder?: string
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

const FilterSelect: FC<Props> = ({ placeholder }) => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]
  return (
    <Select placeholder={placeholder} options={options} styles={filterStyles} />
  )
}

export default FilterSelect

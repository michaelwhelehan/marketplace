import { FC } from 'react'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'

export interface OptionType {
  value: string | number
  label: string
}

interface Props {
  placeholder?: string
  isMulti?: boolean
  isCreatable?: boolean
  options: OptionType[]
  styles?: unknown
  hasError?: boolean
}

const SelectField: FC<Props> = ({ isCreatable, ...props }) => {
  if (isCreatable) {
    return <CreatableSelect {...props} />
  }

  return <Select {...props} />
}

export default SelectField

import React, { FC } from 'react'
import styled from 'styled-components'
import TextField, { TextFieldProps } from '../atoms/TextField'
import Icon from '../atoms/Icon'
import { primaryFontColor } from '../../styles/colors'

const SearchContainer = styled.div`
  width: 300px;
  position: relative;
`

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 6px;
  left: 10px;
`

interface Props extends TextFieldProps {}

const SearchField: FC<Props> = props => {
  return (
    <SearchContainer>
      <StyledIcon name="MdSearch" size={30} color={primaryFontColor} />
      <TextField paddingStart={45} fullWidth {...props} />
    </SearchContainer>
  )
}

export default SearchField

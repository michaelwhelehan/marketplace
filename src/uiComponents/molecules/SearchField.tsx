import React, { FC } from 'react'
import styled from 'styled-components'
import TextField, { TextFieldProps } from '../atoms/TextField'
import Icon from '../atoms/Icon'
import { primaryFontColor } from '../../styles/colors'

const SearchContainer = styled.div`
  width: 250px;
  position: relative;
`

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 7px;
  left: 10px;
`

interface Props extends TextFieldProps {}

const SearchField: FC<Props> = props => {
  return (
    <SearchContainer>
      <StyledIcon name="MdSearch" size={25} color={primaryFontColor} />
      <TextField paddingStart={40} fullWidth {...props} />
    </SearchContainer>
  )
}

export default SearchField

import React, { FC } from 'react'
import styled from 'styled-components'
import TextField, { TextFieldProps } from '../atoms/TextField'
import Icon from '../atoms/Icon'
import { primaryFontColor } from '../../styles/colors'
import { fwBold, fsL } from '../../styles/typography'

const TextFieldContainer = styled.div`
  position: relative;
`

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 7px;
  left: 10px;
`

const CustomIcon = styled.span`
  position: absolute;
  top: 7px;
  left: 15px;
  ${fwBold};
  font-size: ${fsL}px;
  color: ${primaryFontColor};
`

interface Props extends TextFieldProps {
  iconName?: string
  customIcon?: string
}

const TextFieldIcon: FC<Props> = ({ iconName, customIcon, ...props }) => {
  return (
    <TextFieldContainer>
      {iconName ? (
        <StyledIcon name={iconName} size={25} color={primaryFontColor} />
      ) : null}
      {customIcon ? <CustomIcon>{customIcon}</CustomIcon> : null}
      <TextField paddingStart={40} {...props} />
    </TextFieldContainer>
  )
}

export default TextFieldIcon

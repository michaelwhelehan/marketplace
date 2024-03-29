import React, { FC, useState } from 'react'
import styled, { css } from 'styled-components'
import { ParagraphS, ParagraphXS } from '../atoms/Paragraphs'
import DropDown from '../atoms/DropDown'
import { fwBold } from '../../styles/typography'
import { black, primaryColor, red } from '../../styles/colors'
import Icon from '../atoms/Icon'
import { FieldError } from 'react-hook-form'

const FormFieldWrapper = styled.div<{
  spacingTop?: boolean
  spacingBottom?: boolean
}>`
  display: flex;
  flex-direction: column;

  ${({ spacingTop }) =>
    spacingTop &&
    css`
      margin-top: 20px;
    `}

  ${({ spacingBottom }) =>
    spacingBottom &&
    css`
      margin-bottom: 20px;
    `}
`

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledLabel = styled(ParagraphS)<{
  required: boolean
}>`
  ${fwBold};
  ${({ required }) =>
    required &&
    css`
      color: ${black};
    `}
`

const HelpPopup = styled(ParagraphS)`
  position: relative;

  > span {
    ${fwBold};
    color: ${primaryColor};
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`

const HelpText = styled(ParagraphXS)`
  margin-top: 5px;
`

const ErrorMessage = styled(ParagraphS)`
  color: ${red};
  margin-top: 5px;
`

const Container = styled.div`
  margin-top: 10px;
`

interface Props {
  label?: string
  helpText?: string
  required?: boolean
  error?: FieldError
  spacingTop?: boolean
  spacingBottom?: boolean
  renderHelpPopup?: () => JSX.Element
}

const FormField: FC<Props> = ({
  label,
  helpText,
  required,
  error,
  spacingTop,
  spacingBottom,
  renderHelpPopup,
  children,
}) => {
  const [popupOpen, setPopupOpen] = useState<boolean>(false)

  return (
    <FormFieldWrapper spacingTop={spacingTop} spacingBottom={spacingBottom}>
      {label ? (
        <LabelWrapper>
          <StyledLabel required={required} as="label">
            {label} {required && '*'}
          </StyledLabel>
          {renderHelpPopup ? (
            <HelpPopup>
              <span onClick={() => setPopupOpen((prev) => !prev)}>
                Want help?{' '}
                <Icon
                  name="MdErrorOutline"
                  size={16}
                  color={primaryColor}
                  spacingStart={5}
                />
              </span>
              {popupOpen && (
                <DropDown position="end" autoHeight>
                  {renderHelpPopup()}
                </DropDown>
              )}
            </HelpPopup>
          ) : null}
        </LabelWrapper>
      ) : null}
      {helpText ? <HelpText>{helpText}</HelpText> : null}
      <Container>{children}</Container>
      {error ? <ErrorMessage>{error.message}</ErrorMessage> : null}
    </FormFieldWrapper>
  )
}

export default FormField

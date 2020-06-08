import React, { FC, MouseEvent, useMemo, useEffect } from 'react'
import styled, { css } from 'styled-components'
import {
  white,
  borderColor,
  transparentCurtain,
  primaryFontColor,
  black,
} from '../../styles/colors'
import ReactDOM from 'react-dom'
import { HeadingM } from '../atoms/Headings'
import Icon from '../atoms/Icon'

const modalRoot = document.getElementById('modal-root')
const body = document.getElementsByTagName('body')[0]

const ModalCurtain = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0;
  background-color: ${transparentCurtain};
  z-index: 999;
  overflow-x: hidden;
`

const ModalContainer = styled.div<{ large?: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 580px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  background-color: ${white};
  border: 1px solid ${borderColor};
  border-radius: 6px;
  z-index: 99;
  width: ${({ large }) => (large ? '780px' : '600px')};
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

const ModalHeaderContainer = styled.div`
  padding: 20px;
  position relative;
  border-bottom: 1px solid ${borderColor};
  flex-shrink: 0;
`

const ModalBodyContainer = styled.div<{ overflowContent: boolean }>`
  flex: 1;
  padding: 20px;

  ${({ overflowContent }) =>
    overflowContent &&
    css`
      overflow: auto;
    `}
`

const ModalFooterContainer = styled.div`
  padding: 20px;
  flex-shrink: 0;
`

const StyledHeading = styled(HeadingM)`
  text-align: center;
  color: ${black};
`

const StyledIcon = styled(Icon)`
  color: ${primaryFontColor};
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
`

interface Props {
  title?: string
  overflowContent?: boolean
  large?: boolean
  onClose: (event: MouseEvent) => void
  renderFooter: () => JSX.Element
}

const Modal: FC<Props> = ({
  children,
  title,
  onClose,
  renderFooter,
  large = false,
  overflowContent = true,
}) => {
  const el = useMemo(() => document.createElement('div'), [])

  useEffect(() => {
    body.style.overflow = 'hidden'
    if (modalRoot) {
      modalRoot.appendChild(el)
    }
    return () => {
      body.style.overflow = 'auto'
      if (modalRoot) {
        modalRoot.removeChild(el)
      }
    }
  }, [el])

  return ReactDOM.createPortal(
    <ModalCurtain>
      <ModalContainer large={large}>
        <ModalHeaderContainer>
          {title ? <StyledHeading>{title}</StyledHeading> : null}
          <StyledIcon onClick={onClose} name="MdClose" size={30}></StyledIcon>
        </ModalHeaderContainer>
        <ModalBodyContainer overflowContent={overflowContent}>
          {children}
        </ModalBodyContainer>
        {renderFooter && (
          <ModalFooterContainer>{renderFooter()}</ModalFooterContainer>
        )}
      </ModalContainer>
    </ModalCurtain>,
    el,
  )
}

export default Modal

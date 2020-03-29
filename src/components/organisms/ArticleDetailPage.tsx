import React, { FC } from 'react'

import styled from 'styled-components'

const StyledDiv = styled.div`
  height: calc(100vh - 64px - 56px - 2px);
  background: #fff;

  &.slide-enter,
  &.slide-exit {
    transition: transform 500ms ease-out;
    position: absolute;
    width: 100%;
    z-index: 999;
  }

  &.slide-enter {
    transform: translateX(100%);
  }

  &.slide-enter.slide-enter-active {
    transform: translateX(0%);
  }

  &.slide-exit {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: translateX(0%);
  }

  &.slide-exit-active {
    transform: translateX(100%);
  }
`

const ArticleDetailPage: FC = () => {
  return (
    <StyledDiv>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed metus
      ac est ornare imperdiet id non massa. Sed accumsan ultrices justo, eu
      imperdiet ligula pretium id. Suspendisse vehicula urna est, varius congue
      ante posuere sit amet. Aliquam semper posuere elit vitae consequat. Donec
      porta luctus bibendum. Nam volutpat, mi quis ultrices varius, velit enim
      ullamcorper augue, malesuada aliquam neque erat sed massa. Sed imperdiet
      quis sapien eu viverra. Sed a varius nibh. Maecenas euismod tincidunt
      urna, nec venenatis nulla luctus ac. Cras nec ligula at quam ultricies
      fermentum. Proin vulputate, lorem sit amet bibendum lobortis, lacus ante
      tristique nisi, id fringilla velit lorem sit amet neque. Morbi sed
      sagittis nisl. Nullam euismod lectus ante, ut auctor felis ultricies in.
      Vestibulum varius scelerisque tortor, sit amet ultrices justo. Suspendisse
      iaculis leo id vehicula varius.
    </StyledDiv>
  )
}

export default ArticleDetailPage

import styled, { css } from 'styled-components'
import { primaryFontColor } from '../../styles/colors'
import {
  fontFamilyPrimary,
  fsL,
  fsM,
  fsMS,
  fsS,
  fsXS,
  fsXXS,
  fsXXXS,
  fwMediumBold,
} from '../../styles/typography'

const baseCss = css`
  ${fontFamilyPrimary};
  ${fwMediumBold};
  letter-spacing: auto;
  color: ${primaryFontColor};
`

export const ParagraphXXXS = styled.p`
  ${baseCss};
  font-size: ${fsXXXS}px;
  line-height: 1.6;
`
export const ParagraphXXS = styled.p`
  ${baseCss};
  font-size: ${fsXXS}px;
  line-height: 1.5;
`
export const ParagraphXS = styled.p`
  ${baseCss};
  font-size: ${fsXS}px;
  line-height: calc(9 / 7);
`
export const ParagraphS = styled.p`
  ${baseCss};
  font-size: ${fsS}px;
  line-height: 1.25;
`
export const ParagraphMS = styled.p`
  ${baseCss};
  font-size: ${fsMS}px;
  line-height: calc(13 / 9);
`
export const ParagraphM = styled.p`
  ${baseCss};
  font-size: ${fsM}px;
  line-height: 1.5;
`
export const ParagraphL = styled.p`
  ${baseCss};
  font-size: ${fsL}px;
  line-height: 1.5;
`

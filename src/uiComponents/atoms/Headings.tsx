import styled, { css } from 'styled-components'
import {
  fontFamilySecondary,
  fwBold,
  fsL,
  fsXXXS,
  fsXXS,
  fsXS,
  fsS,
  fsM,
  fsXL,
  fsXXL,
  fsXXXL,
  fsXXXXL,
  fwHeavy,
  fsMS,
} from '../../styles/typography'
import { primaryFontColor } from '../../styles/colors'

const baseCss = css`
  ${fontFamilySecondary};
  color: ${primaryFontColor};
  letter-spacing: auto;
  ${fwBold};
`

export const HeadingXXXS = styled.div`
  ${baseCss};
  font-size: ${fsXXXS}px;
  line-height: 1.4;
`
export const HeadingXXS = styled.div`
  ${baseCss};
  font-size: ${fsXXS}px;
  line-height: calc(4 / 3);
`
export const HeadingXS = styled.div`
  ${baseCss};
  font-size: ${fsXS}px;
  line-height: calc(9 / 7);
`
export const HeadingS = styled.div`
  ${baseCss};
  font-size: ${fsS}px;
  line-height: 1.25;
`
export const HeadingMS = styled.div`
  ${baseCss};
  font-size: ${fsMS}px;
  line-height: 1;
`
export const HeadingM = styled.div`
  ${baseCss};
  font-size: ${fsM}px;
  line-height: 1.2;
`
export const HeadingL = styled.div`
  ${baseCss};
  letter-spacing: 0.3px;
  font-size: ${fsL}px;
  line-height: calc(7 / 6);
`
export const HeadingXL = styled.div`
  ${baseCss};
  letter-spacing: 0.35px;
  font-size: ${fsXL}px;
  line-height: 1.25;
`
export const HeadingXXL = styled.div`
  ${baseCss};
  ${fwHeavy};
  letter-spacing: 0.4px;
  font-size: ${fsXXL}px;
  line-height: 1.1;
`
export const HeadingXXXL = styled.div`
  ${baseCss};
  ${fwHeavy};
  letter-spacing: 0.5px;
  font-size: ${fsXXXL}px;
  line-height: 1.125;
`
export const HeadingXXXXL = styled.div`
  ${baseCss};
  ${fwHeavy};
  letter-spacing: 0.6px;
  font-size: ${fsXXXXL}px;
  line-height: 1.1;
`

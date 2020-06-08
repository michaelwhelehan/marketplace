import styled, { css } from 'styled-components'

const FieldContainer = styled.div<{ split?: boolean; spacingTop?: boolean }>`
  margin-top: ${({ spacingTop }) => (spacingTop ? '20px' : 0)};

  ${({ split }) =>
    split
      ? css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px;
        `
      : css`
          display: flex;
          flex-direction: column;
        `}
`

export default FieldContainer

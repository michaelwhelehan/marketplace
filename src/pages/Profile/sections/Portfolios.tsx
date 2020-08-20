import React, { FC } from 'react'
import styled from 'styled-components'
import { ParagraphS, ParagraphXS } from '../../../uiComponents/atoms/Paragraphs'
import { fwMediumBold } from '../../../styles/typography'
import { black } from '../../../styles/colors'
import { PublicUserProfile_publicUser_portfolios } from '../gqlTypes/PublicUserProfile'

export const PortfolioSelector = styled.div``

const PortfolioImage = styled.img`
  width: 50%;
  height: 300px;
  object-fit: cover;
  margin-bottom: 10px;
`

const PortfolioHeading = styled(ParagraphS)`
  color: ${black};
  ${fwMediumBold};
  margin-bottom: 5px;
`

const PortfolioParagraph = styled(ParagraphXS)`
  margin-bottom: 5px;
`

interface Props {
  portfolios: PublicUserProfile_publicUser_portfolios[]
}

const Portfolios: FC<Props> = ({ portfolios }) => {
  return (
    <PortfolioSelector>
      {portfolios.map((portfolio) => (
        <div key={portfolio.id}>
          <PortfolioImage src={portfolio.imageUrl} />
          <PortfolioHeading>{portfolio.title}</PortfolioHeading>
          <PortfolioParagraph>{portfolio.description}</PortfolioParagraph>
        </div>
      ))}
    </PortfolioSelector>
  )
}

export default Portfolios

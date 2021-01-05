import React, { FC, useCallback } from 'react'
import styled from 'styled-components'
import OfferCard, { OfferCardSelector } from './OfferCard'
import { GET_HIRE_VISIBLE } from '../../../../../components/Layout/Layout'
import { useQuery } from '@apollo/client'
import SelectField from '../../../../../uiComponents/atoms/SelectField'
import { ParagraphS } from '../../../../../uiComponents/atoms/Paragraphs'
import { fwBold } from '../../../../../styles/typography'
import { useGetOffersQuery } from '../../../../Marketplace/queries'
import Loader from '../../../../../uiComponents/atoms/Loader/Loader'

const Container = styled.div`
  ${OfferCardSelector}:not(:first-child) {
    margin-top: 15px;
  }
`

const InnerFilterContainerStart = styled.div`
  display: flex;

  > * {
    margin-right: 10px;
    flex: 1;
  }
`

const InnerFilterContainerEnd = styled.div`
  display: flex;
  align-items: center;

  > *:last-child {
    flex: 1;
  }
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${InnerFilterContainerStart} {
    width: 60%;
  }

  ${InnerFilterContainerEnd} {
    width: 25%;
  }
`

const SortByTitle = styled(ParagraphS)`
  ${fwBold};
  margin-right: 10px;
`

interface Props {
  taskSlug: string
}

const OffersMain: FC<Props> = ({ taskSlug }) => {
  const { client } = useQuery(GET_HIRE_VISIBLE)
  const { data, loading } = useGetOffersQuery({
    pageSize: 50,
    filter: { taskSlug },
  })

  const handleHireClick = useCallback(() => {
    client.writeQuery({
      query: GET_HIRE_VISIBLE,
      data: { hireVisible: true },
    })
  }, [client])

  return (
    <Container>
      <FilterContainer>
        <InnerFilterContainerStart>
          <SelectField
            placeholder="Bid Amount"
            options={[{ label: 'Project is spam or fraud', value: 'spam' }]}
          />
          <SelectField
            placeholder="Reviews"
            options={[{ label: 'Project is spam or fraud', value: 'spam' }]}
          />
          <SelectField
            placeholder="Rating"
            options={[{ label: 'Project is spam or fraud', value: 'spam' }]}
          />
        </InnerFilterContainerStart>
        <InnerFilterContainerEnd>
          <SortByTitle>Sort by:</SortByTitle>
          <SelectField
            placeholder="Best Rank"
            options={[{ label: 'Project is spam or fraud', value: 'spam' }]}
          />
        </InnerFilterContainerEnd>
      </FilterContainer>
      {loading ? (
        <Loader name="Dashboard" />
      ) : (
        data.offers.edges.map(({ node }) => (
          <OfferCard
            key={node.id}
            offer={node}
            action={{
              title: 'Hire',
              onClick: handleHireClick,
            }}
          />
        ))
      )}
    </Container>
  )
}

export default OffersMain

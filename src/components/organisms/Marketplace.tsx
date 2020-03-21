import React, { FC } from 'react'
import styled from 'styled-components'
import Header from '../molecules/Header'
import SubHeader from '../molecules/SubHeader'
import BaseContainer from '../atoms/Container'
import Map from '../molecules/Map'
import SideList from '../molecules/SideList'

const StyledContainer = styled(BaseContainer)`
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  height: calc(100vh - 64px - 56px - 2px);
  display: flex;
`

const SideListContainer = styled.article`
  flex: 3;
`

const MapContainer = styled.article`
  flex: 9;
`

const Marketplace: FC = () => {
  return (
    <>
      <Header />
      <SubHeader />
      <StyledContainer>
        <SideListContainer>
          <SideList />
        </SideListContainer>
        <MapContainer>
          <Map />
        </MapContainer>
      </StyledContainer>
    </>
  )
}

export default Marketplace

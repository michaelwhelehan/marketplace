import styled from 'styled-components'
import { DashboardPanelContainer } from './Panels/DashboardPanel'
import { MAIN_HEADER_HEIGHT } from '../../constants/sizes'

const DashboardPageContainer = styled(DashboardPanelContainer)`
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  min-height: calc(100vh - ${MAIN_HEADER_HEIGHT}px - 40px);
`

export default DashboardPageContainer

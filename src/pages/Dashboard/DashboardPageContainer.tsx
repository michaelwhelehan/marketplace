import styled from 'styled-components'
import { white, borderColor } from '../../styles/colors'
import { featherShadow } from '../../styles/shadows'

const DashboardPageContainer = styled.div`
  background: ${white};
  border: 1px solid ${borderColor};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  ${featherShadow};
`

export default DashboardPageContainer

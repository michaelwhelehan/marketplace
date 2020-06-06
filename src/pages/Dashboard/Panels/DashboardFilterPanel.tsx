import { borderColor, white } from '../../../styles/colors'
import styled from 'styled-components'
import { featherShadow } from '../../../styles/shadows'

const DashboardFilterPanel = styled.div`
  border: 1px solid ${borderColor};
  background-color: ${white};
  display: flex;
  align-items: center;
  ${featherShadow};
`

export default DashboardFilterPanel

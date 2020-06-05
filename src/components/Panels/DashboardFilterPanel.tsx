import { borderColor, white } from '../../styles/colors'
import styled from 'styled-components'

const DashboardFilterPanel = styled.div`
  border: 1px solid ${borderColor};
  background-color: ${white};
  display: flex;
  align-items: center;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.05);
`

export default DashboardFilterPanel

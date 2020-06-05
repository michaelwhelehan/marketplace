import React, { FC } from 'react'
import DashboardFilterPanel from '../../../../components/Panels/DashboardFilterPanel'
import styled from 'styled-components'
import { fwBold } from '../../../../styles/typography'
import { primaryFontColor } from '../../../../styles/colors'
import SelectField from '../../../../uiComponents/atoms/SelectField'
import { Controller } from 'react-hook-form'

const StyledDashboardFilterPanel = styled(DashboardFilterPanel)`
  padding: 20px;
  justify-content: space-between;
`

const Section = styled.div`
  display: flex;
  align-items: center;
`

const Label = styled.label`
  ${fwBold};
  color: ${primaryFontColor};
  margin: 0 10px;
`

interface Props {
  control: any
}

const BottomFilterPanel: FC<Props> = ({ control }) => {
  return (
    <StyledDashboardFilterPanel>
      <Section>
        <Label>Show</Label>
        <div style={{ width: '90px' }}>
          <Controller
            as={SelectField}
            name="showAmount"
            control={control}
            placeholder="Amt"
            options={[{ label: '10', value: 10 }]}
          />
        </div>
        <Label>entries</Label>
      </Section>
      <Section>
        <Label>Export</Label>
        <Label>Print</Label>
      </Section>
    </StyledDashboardFilterPanel>
  )
}

export default BottomFilterPanel

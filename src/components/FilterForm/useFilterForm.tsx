import React, { useEffect } from 'react'
import FormField from '../../uiComponents/molecules/FormField'
import TextFieldIcon from '../../uiComponents/molecules/TextFieldIcon'
import SliderField from '../../uiComponents/atoms/SliderField'
import RadioField from '../../uiComponents/atoms/RadioField'
import styled from 'styled-components'
import { useForm, Controller } from 'react-hook-form'
import useUrlQueries from '../../hooks/useUrlQueries'
import { valueToPercent } from '../../utils/helpers'
import usePrevious from '../../hooks/usePrevious'

const WhereWrapper = styled.div`
  display: flex;

  > label {
    margin-right: 10px;
  }
`

type FormValues = {
  where: string
  suburb: string
  distance: number
  budget: number[]
}

const useFilterForm = () => {
  const distanceRange = 100
  const budgetRange = 20000
  const { params } = useUrlQueries({
    allowedParams: ['where', 'suburb', 'distance', 'budget_gte', 'budget_lte'],
  })
  const formValues = {
    where: params.where || 'all',
    suburb: params.suburb || '',
    distance: params.distance
      ? valueToPercent(params.distance, distanceRange)
      : 30,
    budget:
      params.budget_gte && params.budget_lte
        ? [
            valueToPercent(params.budget_gte, budgetRange),
            valueToPercent(params.budget_lte, budgetRange),
          ]
        : [5, 80],
  }
  const { register, control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: formValues,
  })

  useEffect(() => {
    reset(formValues)
  }, [params.budget_gte, params.budget_lte])

  const renderedFilterForm = (
    <form>
      <FormField label="Where">
        <WhereWrapper>
          <RadioField
            name="where"
            ref={register()}
            label="In Person"
            value="in-person"
          />
          <RadioField
            name="where"
            ref={register()}
            label="Online"
            value="online"
          />
          <RadioField name="where" ref={register()} label="All" value="all" />
        </WhereWrapper>
      </FormField>
      <FormField label="Suburb" spacingTop>
        <TextFieldIcon
          ref={register()}
          name="suburb"
          iconName="MdPlace"
          placeholder="Enter a surburb"
          fullWidth
        />
      </FormField>
      <FormField label="Distance" spacingTop spacingBottom>
        <Controller
          name="distance"
          control={control}
          render={({ onChange, value }) => (
            <SliderField
              value={value}
              onChange={onChange}
              range={distanceRange}
              unit="km"
            />
          )}
        />
      </FormField>
      <FormField label="Task Budget" spacingTop spacingBottom>
        <Controller
          name="budget"
          control={control}
          render={({ onChange, value }) => (
            <SliderField
              value={value}
              onChange={onChange}
              range={budgetRange}
              unit="R"
            />
          )}
        />
      </FormField>
    </form>
  )

  return {
    renderedFilterForm,
    onFilterFormSubmit: handleSubmit,
  }
}

export default useFilterForm

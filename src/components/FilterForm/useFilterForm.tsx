import React, { useEffect } from 'react'
import FormField from '../../uiComponents/molecules/FormField'
import TextFieldIcon from '../../uiComponents/molecules/TextFieldIcon'
import SliderField from '../../uiComponents/atoms/SliderField'
import RadioField from '../../uiComponents/atoms/RadioField'
import styled from 'styled-components'
import { useForm, Controller } from 'react-hook-form'
import useUrlQueries from '../../hooks/useUrlQueries'
import { valueToPercent } from '../../utils/helpers'
import SelectField from '../../uiComponents/atoms/SelectField'
import { useGetSkillTagsQuery } from '../../pages/Dashboard/Profile/queries'

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
  const { data: SkillTags } = useGetSkillTagsQuery()

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
      <FormField label="Skills" spacingTop>
        <Controller
          as={SelectField}
          name="skills"
          control={control}
          placeholder="Select skills"
          isMulti
          options={SkillTags?.skillTags.edges.map((edge) => ({
            label: edge.node.name,
            value: edge.node.id,
          }))}
        />
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
      <FormField label="Job Budget" spacingTop spacingBottom>
        <Controller
          name="budget"
          control={control}
          render={({ onChange, value }) => (
            <SliderField
              value={value}
              onChange={onChange}
              range={budgetRange}
              unit="$"
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

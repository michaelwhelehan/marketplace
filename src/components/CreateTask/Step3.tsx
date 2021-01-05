import React, { Dispatch, FC, MouseEvent, useCallback, useMemo } from 'react'
// import TextField from '../../uiComponents/atoms/TextField'
import FormField from '../../uiComponents/molecules/FormField'
import RadioField from '../../uiComponents/atoms/RadioField'
// import Button from '../../uiComponents/atoms/Button'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
// import Icon from '../../uiComponents/atoms/Icon'
// import { primaryColor } from '../../styles/colors'
import TextFieldIcon from '../../uiComponents/molecules/TextFieldIcon'
import { TaskAPI } from '../../services/api/Task'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import FieldContainer from '../../uiComponents/molecules/FieldContainer'
import TextField from '../../uiComponents/atoms/TextField'
import { useTaskUpdateMutation } from './mutations'

const InnerSectionContainer = styled.div`
  display: flex;
`

const StyledRadioField = styled(RadioField)`
  margin-right: 10px;
  margin-bottom: 10px;
`

// const QuestionWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
// `

// const StyledButton = styled(Button)`
//   display: inline-block;
// `

// const StyledIcon = styled(Icon)`
//   cursor: pointer;
// `

function getDefaultBudgetType(locationType?: string) {
  if (locationType === 'TOTAL') {
    return 'total'
  }

  if (locationType === 'HOURLY') {
    return 'hourly'
  }

  return 'total'
}

interface FormValues {
  budgetType: string
  budgetAmount: number
  budgetDuration?: number
}

const schema = yup.object().shape({
  budgetType: yup.string().required('Budget type is required'),
  budgetAmount: yup.number().required('Budget amount is required'),
  budgetDuration: yup.number().when('budgetType', {
    is: 'hourly',
    then: yup.number().required('Budget duration is required'),
  }),
})

interface Props {
  onNextStep: () => void
  setSubmitting: Dispatch<boolean>
  taskStorageAPI: TaskAPI
  onClose: (event: MouseEvent) => void
}

type TitleType = {
  title: string
}

const Step3: FC<Props> & TitleType = ({
  setSubmitting,
  taskStorageAPI,
  onClose,
}) => {
  const { loaded: taskLoaded, task } = taskStorageAPI
  const defaultValues = useMemo(
    () =>
      taskLoaded &&
      task && {
        budgetType: getDefaultBudgetType(task.budgetType),
        budgetAmount: task.budgetAmount,
        budgetDuration: task.budgetDuration,
      },
    [taskLoaded, task],
  )
  const { register, watch, handleSubmit } = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  })
  // const { fields, append, remove } = useFieldArray({
  //   control,
  //   name: 'question',
  // })
  const watchbudgetType = watch('budgetType', 'total')
  const updateTask = useTaskUpdateMutation()

  const handleStepSubmit = useCallback(
    async (data: FormValues) => {
      try {
        setSubmitting(true)
        await updateTask({
          variables: {
            id: task.id,
            input: {
              budgetType: data.budgetType,
              budgetAmount: data.budgetAmount,
              budgetDuration: data.budgetDuration ?? data.budgetDuration,
            },
          },
        })
        taskStorageAPI.clearTaskCreating()
        onClose(null)
      } catch (e) {
        console.error(e)
      } finally {
        setSubmitting(false)
      }
    },
    [onClose, setSubmitting, task.id, updateTask, taskStorageAPI],
  )

  return (
    <form id="create-task-3" onSubmit={handleSubmit(handleStepSubmit)}>
      <FormField
        label="What is your budget?"
        helpText="Please enter the price you are comfortable with to get your task done. Taskers will use this a guide for how much to offer."
        required
        renderHelpPopup={() => <>This is the help section</>}
      >
        <InnerSectionContainer>
          <StyledRadioField
            name="budgetType"
            value="total"
            label="Total"
            ref={register()}
          />

          <StyledRadioField
            name="budgetType"
            value="hourly"
            label="Hourly rate"
            ref={register()}
          />
        </InnerSectionContainer>
      </FormField>
      {watchbudgetType === 'total' ? (
        <FormField>
          <TextFieldIcon
            type="number"
            customIcon="$"
            name="budgetAmount"
            ref={register()}
            fullWidth
            placeholder="Enter an amount"
          />
        </FormField>
      ) : (
        <FieldContainer split>
          <FormField>
            <TextFieldIcon
              type="number"
              customIcon="$"
              name="budgetAmount"
              ref={register()}
              fullWidth
              placeholder="Enter an amount"
            />
          </FormField>
          <FormField>
            <TextField
              type="number"
              name="budgetDuration"
              ref={register()}
              fullWidth
              placeholder="Enter number of hours"
            />
          </FormField>
        </FieldContainer>
      )}
      {/* <FormField label="Would you like to add screening questions?" spacingTop>
        {fields.map((item, index) => (
          <QuestionWrapper key={item.id}>
            <TextField
              name={`question[${index}]`}
              ref={register()}
              fullWidth
              placeholder="Type your question here"
            />
            <StyledIcon
              name="MdClose"
              size={25}
              color={primaryColor}
              spacingStart={5}
              onClick={() => remove(index)}
            />
          </QuestionWrapper>
        ))}
        <StyledButton
          as="a"
          styleType="primary-outline"
          onClick={() => append({})}
        >
          {fields.length === 0 ? 'Add question' : 'Add another'}
        </StyledButton>
      </FormField> */}
    </form>
  )
}

Step3.title = 'Budget & Screening'

export default Step3

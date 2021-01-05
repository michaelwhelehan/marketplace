import React, {
  Dispatch,
  FC,
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
} from 'react'
import FormField from '../../uiComponents/molecules/FormField'
import DateField from '../../uiComponents/atoms/DateField'
import { Controller, useForm } from 'react-hook-form'
import RadioField from '../../uiComponents/atoms/RadioField'
import styled from 'styled-components'
import { ParagraphXS } from '../../uiComponents/atoms/Paragraphs'
import { borderColorDark, primaryFontColor } from '../../styles/colors'
import Icon from '../../uiComponents/atoms/Icon'
import TextFieldIcon from '../../uiComponents/molecules/TextFieldIcon'
import FieldContainer from '../../uiComponents/molecules/FieldContainer'
import { TaskAPI } from '../../services/api/Task'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTaskUpdateMutation } from './mutations'
import { formatDate } from '../../utils/date'

const Section = styled.div`
  border-radius: 4px;
  border: 1px solid ${borderColorDark};
  padding: 10px;
`

const InnerSectionContainer = styled.div`
  display: flex;
`

const InnerSectionStart = styled.div`
  flex: 1;
`

const InnerSectionEnd = styled.div``

const WhereExplanation = styled(ParagraphXS)`
  margin-top: 10px;
`

function getDefaultLocationType(locationType?: string) {
  if (locationType === 'IN_PERSON') {
    return 'in-person'
  }

  if (locationType === 'REMOTE') {
    return 'remote'
  }

  return 'in-person'
}

interface FormValues {
  locationType: string
  location?: string
  dueDate: Date
}

const schema = yup.object().shape({
  locationType: yup.string().required('Where is required'),
  location: yup.string().when('locationType', {
    is: 'in-person',
    then: yup.string().required('Location is required'),
  }),
  dueDate: yup.date().required('Due date is required'),
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

const Step2: FC<Props> & TitleType = ({
  onNextStep,
  setSubmitting,
  taskStorageAPI,
}) => {
  const { loaded: taskLoaded, task } = taskStorageAPI
  const defaultValues = useMemo(
    () =>
      taskLoaded &&
      task && {
        locationType: getDefaultLocationType(task.locationType),
        location: task.location,
        dueDate: task.dueDate,
      },
    [taskLoaded, task],
  )
  const { register, reset, watch, control, errors, handleSubmit } = useForm<
    FormValues
  >({
    defaultValues,
    resolver: yupResolver(schema),
  })
  const watchLocationType = watch('locationType', 'in-person')
  const updateTask = useTaskUpdateMutation()

  useEffect(() => {
    if (taskLoaded) {
      reset(defaultValues)
    }
  }, [taskLoaded, defaultValues, reset])

  const handleStepSubmit = useCallback(
    async (data: FormValues) => {
      try {
        setSubmitting(true)
        const {
          data: {
            taskUpdate: { task: taskUpdated },
          },
        } = await updateTask({
          variables: {
            id: task.id,
            input: {
              locationType: data.locationType,
              location: data.location,
              dueDate: formatDate(data.dueDate, 'YYYY-MM-DD'),
            },
          },
        })
        taskStorageAPI.updateTaskCreating({
          locationType: taskUpdated.locationType,
          location: taskUpdated.location,
          dueDate: taskUpdated.dueDate,
        })
        onNextStep()
      } catch (e) {
        console.error(e)
      } finally {
        setSubmitting(false)
      }
    },
    [onNextStep, setSubmitting, task.id, updateTask, taskStorageAPI],
  )

  return (
    <form id="create-task-2" onSubmit={handleSubmit(handleStepSubmit)}>
      <FormField
        label="Where do you need it done?"
        required
        error={errors.locationType}
      >
        <FieldContainer split>
          <Section>
            <InnerSectionContainer>
              <InnerSectionStart>
                <RadioField
                  name="locationType"
                  value="in-person"
                  label="In Person"
                  ref={register()}
                />
              </InnerSectionStart>
              <InnerSectionEnd>
                <Icon
                  name="MdPersonPinCircle"
                  size={20}
                  color={primaryFontColor}
                />
              </InnerSectionEnd>
            </InnerSectionContainer>
            <WhereExplanation>
              Select this if you need the tasker there in person
            </WhereExplanation>
          </Section>
          <Section>
            <InnerSectionContainer>
              <InnerSectionStart>
                <RadioField
                  name="locationType"
                  value="remote"
                  label="Online"
                  ref={register()}
                />
              </InnerSectionStart>
              <InnerSectionEnd>
                <Icon name="MdDesktopMac" size={20} color={primaryFontColor} />
              </InnerSectionEnd>
            </InnerSectionContainer>
            <WhereExplanation>
              Select this if the work can be completed online
            </WhereExplanation>
          </Section>
        </FieldContainer>
      </FormField>
      {watchLocationType === 'in-person' && (
        <FormField spacingTop error={errors.location}>
          <TextFieldIcon
            iconName="MdRoom"
            name="location"
            placeholder="Enter a suburb"
            ref={register()}
            hasError={Boolean(errors.location)}
          />
        </FormField>
      )}
      <FormField
        label="When do you need it done?"
        required
        spacingTop
        error={errors.dueDate}
      >
        <Controller
          as={DateField}
          name="dueDate"
          control={control}
          placeholder="Select a date"
          onChange={(day) => {
            // React Select return object instead of value for selection
            return day[0]
          }}
          hasError={Boolean(errors.dueDate)}
        />
      </FormField>
    </form>
  )
}

Step2.title = 'Say where and when'

export default Step2

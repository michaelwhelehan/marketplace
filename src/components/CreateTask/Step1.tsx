import React, {
  FC,
  MouseEvent,
  useCallback,
  useEffect,
  Dispatch,
  useMemo,
} from 'react'
import TextField from '../../uiComponents/atoms/TextField'
import FormField from '../../uiComponents/molecules/FormField'
import TextAreaField from '../../uiComponents/atoms/TextAreaField'
import SelectField, { OptionType } from '../../uiComponents/atoms/SelectField'
import { Controller, useForm } from 'react-hook-form'
import { useGetSkillTagsQuery } from '../../queries'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTaskCreateMutation, useTaskUpdateMutation } from './mutations'
import { TaskAPI } from '../../services/api/Task'
import { TaskCreateVariables } from './gqlTypes/TaskCreate'
import { TaskUpdateVariables } from './gqlTypes/TaskUpdate'

interface FormValues {
  title: string
  categories: OptionType[]
  details: string
}

const schema = yup.object().shape({
  title: yup
    .string()
    .required('Title is required')
    .min(10, 'Please enter at least 10 characters and a maximum of 50')
    .max(50, 'Please enter at least 10 characters and a maximum of 50'),
  details: yup
    .string()
    .required('Details are required')
    .min(25, 'Please enter at least 25 characters'),
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

const Step1: FC<Props> & TitleType = ({
  onNextStep,
  setSubmitting,
  taskStorageAPI,
}) => {
  const { loaded: taskLoaded, task } = taskStorageAPI
  const defaultValues = useMemo(
    () => taskLoaded && task && { title: task.title, details: task.details },
    [taskLoaded, task],
  )
  const { register, reset, control, errors, handleSubmit } = useForm<
    FormValues
  >({
    defaultValues,
    resolver: yupResolver(schema),
  })
  const { data: SkillTags } = useGetSkillTagsQuery()
  const createTask = useTaskCreateMutation()
  const updateTask = useTaskUpdateMutation()

  useEffect(() => {
    if (taskLoaded) {
      reset(defaultValues)
    }
  }, [taskLoaded, defaultValues, reset])

  const createOrUpdateTask = useCallback(
    async ({
      variables,
    }: {
      variables: TaskCreateVariables | TaskUpdateVariables
    }) => {
      if (taskLoaded && task?.id) {
        const {
          data: {
            taskUpdate: { task: taskUpdated },
          },
        } = await updateTask({ variables: { id: task.id, ...variables } })
        taskStorageAPI.updateTaskCreating({
          title: taskUpdated.title,
          details: taskUpdated.details,
        })
        return taskUpdated
      }

      const {
        data: {
          taskCreate: { task: taskCreated },
        },
      } = await createTask({ variables })
      taskStorageAPI.setTaskCreating(taskCreated)
      return taskCreated
    },
    [createTask, updateTask, taskLoaded, task, taskStorageAPI],
  )

  const handleStepSubmit = useCallback(
    async (data: FormValues) => {
      try {
        setSubmitting(true)
        await createOrUpdateTask({
          variables: {
            input: {
              title: data.title,
              categories: data.categories
                ? [((data.categories as unknown) as OptionType).value as string]
                : [],
              details: data.details,
            },
          },
        })
        onNextStep()
      } catch (e) {
        console.error(e)
      } finally {
        setSubmitting(false)
      }
    },
    [createOrUpdateTask, onNextStep, setSubmitting],
  )

  return (
    <form id="create-task-1" onSubmit={handleSubmit(handleStepSubmit)}>
      <FormField label="What do you need done?" required error={errors.title}>
        <TextField
          name="title"
          ref={register()}
          fullWidth
          placeholder="This'll be the title of your task - E.g. Help move my sofa"
          hasError={Boolean(errors.title)}
        />
      </FormField>
      <FormField label="What category is this task in?" spacingTop>
        <Controller
          as={SelectField}
          name="categories"
          control={control}
          placeholder="Add a tag to categorize your task"
          options={SkillTags?.skillTags.edges.map((edge) => ({
            label: edge.node.name,
            value: edge.node.id,
          }))}
        />
      </FormField>
      <FormField
        label="What are the details?"
        required
        spacingTop
        error={errors.details}
      >
        <TextAreaField
          name="details"
          ref={register()}
          fullWidth
          placeholder="Be as specific as you can about what needs doing"
          hasError={Boolean(errors.details)}
        />
      </FormField>
    </form>
  )
}

Step1.title = 'Tell us what you need done?'

export default Step1

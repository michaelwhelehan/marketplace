import React, { FC, useEffect, useState } from 'react'
import Dropzone, {
  IDropzoneProps,
  ILayoutProps,
  StatusValue,
  IFileWithMeta,
  IInputProps,
  IPreviewProps,
  ISubmitButtonProps,
} from 'react-dropzone-uploader'

import 'react-dropzone-uploader/dist/styles.css'
import { usePreSignedUploadParamsQuery } from '../../core/queries'

type ReactComponent<Props> = (
  props: Props,
) => React.ReactNode | React.Component<Props>

interface ExtendedFileWithMeta extends IFileWithMeta {
  meta: IFileWithMeta['meta'] & { fileUrl?: string }
}

interface Props {
  directory: string
  accept?: string
  autoUpload?: boolean
  maxFiles?: number
  initialFiles?: File[]
  initialFileUrls?: string | string[]
  multiple?: boolean
  canCancel?: boolean
  canRemove?: boolean
  canRestart?: boolean
  onChangeStatus?: (file: ExtendedFileWithMeta, status: StatusValue) => void
  LayoutComponent?: ReactComponent<ILayoutProps>
  InputComponent?: ReactComponent<IInputProps>
  PreviewComponent?: ReactComponent<IPreviewProps>
  SubmitButtonComponent?: ReactComponent<ISubmitButtonProps>
}

const FileUploadField: FC<Props> = ({
  directory,
  initialFiles,
  initialFileUrls,
  onChangeStatus,
  LayoutComponent,
  InputComponent,
  PreviewComponent,
  SubmitButtonComponent,
  multiple = true,
  canCancel = false,
  canRemove = false,
  canRestart = false,
  accept = 'image/*,audio/*,video/*',
  autoUpload = true,
  maxFiles = 3,
}) => {
  const [initialFilesState, setInitialFiles] = useState<File[]>(initialFiles)
  const getPresignedUploadParams = usePreSignedUploadParamsQuery()

  const getUploadParams: IDropzoneProps['getUploadParams'] = async ({
    meta: { name },
  }) => {
    const {
      data: { preSignedUploadParams },
    } = await getPresignedUploadParams({
      variables: { directory, fileName: name },
    })
    const { fields, fileUrl, uploadUrl } = preSignedUploadParams
    return { fields: JSON.parse(fields), meta: { fileUrl }, url: uploadUrl }
  }

  useEffect(() => {
    const loadImageIntoFile = async (fileUrls: string[]) => {
      const response = await fetch(fileUrls[0], {
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          Origin: window.location.origin,
        },
      })
      const data = await response.blob()
      const metadata = {
        type: 'image/jpeg',
      }
      const file = new File([data], fileUrls[0].split('/')[6], metadata)
      setInitialFiles([file])
    }

    if (initialFileUrls) {
      loadImageIntoFile(
        Array.isArray(initialFileUrls) ? initialFileUrls : [initialFileUrls],
      )
    }
  }, [initialFileUrls])

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={onChangeStatus}
      accept={accept}
      autoUpload={autoUpload}
      initialFiles={initialFilesState}
      maxFiles={maxFiles}
      multiple={multiple}
      canCancel={canCancel}
      canRemove={canRemove}
      canRestart={canRestart}
      PreviewComponent={PreviewComponent}
      InputComponent={InputComponent}
      LayoutComponent={LayoutComponent}
      SubmitButtonComponent={SubmitButtonComponent}
      disabled={(files) =>
        files.some((f) =>
          ['preparing', 'getting_upload_params', 'uploading'].includes(
            f.meta.status,
          ),
        )
      }
    />
  )
}

export default FileUploadField

// "image/*,audio/*,video/*,application/postscript,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation"

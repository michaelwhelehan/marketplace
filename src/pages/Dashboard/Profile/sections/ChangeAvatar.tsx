import React, { FC, MouseEvent, useState, useRef } from 'react'
import AvatarEditor from 'react-avatar-editor'
import Modal from '../../../../uiComponents/molecules/Modal'
import Button from '../../../../uiComponents/atoms/Button'
import FileUploadField from '../../../../uiComponents/atoms/FileUploadField'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

interface Props {
  currentAvatar?: string
  onUpload: (avatarUrl: string) => void
  onClose: (event: MouseEvent) => void
}

const ChangeAvatar: FC<Props> = ({ currentAvatar, onUpload, onClose }) => {
  const [avatar, setAvatar] = useState<string>(currentAvatar)
  const [files, setFiles] = useState<File[]>(null)
  const avatarEl = useRef<AvatarEditor>(null)

  const handleChangeStatus = ({ file, meta, remove }, status) => {
    if (status === 'ready') {
      setAvatar(file)
      remove()
    } else if (status === 'done') {
      onUpload(meta.fileUrl)
    }
  }

  const handleUpdateClick = () => {
    const imageDataUrl = avatarEl.current.getImage().toDataURL()
    fetch(imageDataUrl).then((res) => {
      res.arrayBuffer().then((buf) => {
        const file = new File([buf], `${uuidv4()}.png`, {
          type: 'image/png',
        })
        setFiles([file])
      })
    })
  }

  return (
    <Modal
      title="Update Profile Picture"
      onClose={onClose}
      renderFooter={() => (
        <ButtonContainer>
          <Button large onClick={handleUpdateClick}>
            Update
          </Button>
        </ButtonContainer>
      )}
    >
      <Container>
        <AvatarEditor
          ref={avatarEl}
          image={avatar}
          width={250}
          height={250}
          border={50}
          color={[255, 255, 255, 0.6]} // RGBA
          scale={1.2}
          rotate={0}
          crossOrigin="anonymous"
        />
        <FileUploadField
          directory="avatars"
          accept="image/jpg,image/jpeg,image/png"
          autoUpload={files && files.length > 0}
          maxFiles={1}
          multiple={false}
          initialFiles={files}
          onChangeStatus={handleChangeStatus}
          LayoutComponent={null}
          SubmitButtonComponent={null}
        />
      </Container>
    </Modal>
  )
}

export default ChangeAvatar

import React, { useState } from 'react'
import ConfirmDialog from '../uiComponents/molecules/ConfirmDialog'

interface Config {
  title: string
  onConfirm: (id: string | number) => void
}

export default function useConfirmDialog({ title, onConfirm }: Config) {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [confirmId, setConfirmId] = useState<string | number>(null)

  const handleConfirm = () => {
    setShowConfirmDialog(false)
    onConfirm(confirmId)
  }

  const handleClose = () => {
    setShowConfirmDialog(false)
  }

  const renderedDialog = showConfirmDialog ? (
    <ConfirmDialog
      title={title}
      onConfirm={handleConfirm}
      onClose={handleClose}
    />
  ) : null

  return {
    renderedDialog,
    setConfirmId,
    setShowConfirmDialog,
  }
}

import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ROUTES } from "../../../routing-context/domain/router-context"
import { faker } from "@faker-js/faker"
import { Row, TableProps } from "antd"
import { useTranslation } from "react-i18next"
import { Button, ButtonStyleType } from "../../../../common/components"

export default function useTeacherPreview() {
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState<boolean>(false)
  const params = useParams()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleDeleteTeacher = () => {
    setDeleteConfirmationModal(true)
  }

  const handleEditTeacher = () => {
    navigate(`/${ROUTES.app}/${ROUTES.editTeacher}/${params?.teacherId}`)
  }

  const handleDeleteTeacherConfirmation = () => {}

  const handleDeleteTeacherCancel = () => {
    setDeleteConfirmationModal(false)
  }

  return {
    handleEditTeacher,
    handleDeleteTeacher,
    handleDeleteTeacherConfirmation,
    handleDeleteTeacherCancel,
    deleteConfirmationModal,
  }
}

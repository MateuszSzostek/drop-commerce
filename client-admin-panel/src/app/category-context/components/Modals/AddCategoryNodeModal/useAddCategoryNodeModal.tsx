import React, { useEffect } from "react"
import { AddCategoryFormFieldType, ICategoryNode } from "../../../domain/category-context"
import { FormProps, Row } from "antd"
import { useForm } from "antd/es/form/Form"

export default function useAddCategoryNodeModal(handleAppendNode: (newCategoryName: string) => void, isOpen: boolean) {
  const [newCategoryForm] = useForm()

  useEffect(() => {
    if (isOpen === true) newCategoryForm.resetFields()
  }, [isOpen])

  const onFinish: FormProps<AddCategoryFormFieldType>["onFinish"] = async (values) => {
    console.log(values)
    handleAppendNode(values?.categoryName)
  }
  const onFinishFailed: FormProps<AddCategoryFormFieldType>["onFinishFailed"] = (errorInfo): void => {
    console.log("Failed:", errorInfo)
  }

  return { newCategoryForm, onFinish, onFinishFailed }
}

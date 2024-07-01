import { FormProps } from "antd"
import { ParsedValidationErrors, ValidationErrors } from "../../../../common/types"
import { useState } from "react"
import { EditChildFieldType } from "../../domain/children-context"
import { getErrors } from "../../../../common/utils"

export default function useEditChildForm() {
  const [formErrors, setFormErrors] = useState<ParsedValidationErrors>({})

  const onFinish: FormProps<EditChildFieldType>["onFinish"] = (values) => {
    setFormErrors({})
    console.log(values)
  }
  const onFinishFailed: FormProps<EditChildFieldType>["onFinishFailed"] = (errorInfo): void => {
    console.log("Failed:", errorInfo)
  }

  const onValidationErrors = (errors: ValidationErrors): void => {
    const formErrors = getErrors(errors)
    setFormErrors(formErrors)
  }

  return { onFinish, onFinishFailed, formErrors }
}

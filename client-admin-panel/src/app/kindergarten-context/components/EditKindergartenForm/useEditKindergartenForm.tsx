import { FormProps } from "antd"
import { ParsedValidationErrors, ValidationErrors, Response } from "../../../../common/types"
import { useEffect, useState } from "react"
import { CreateKindergartenResponse, EditKindergartenFieldType } from "../../domain/kindergarten-context"
import { getErrors } from "../../../../common/utils"
import { useNavigate, useParams } from "react-router-dom"
import { useGetKindergartenQuery } from "../../services/kindergartenSlice"
import { useForm } from "antd/es/form/Form"
import { useUpdateKindergartenMutation } from "../../services/kindergartenSlice"
import { ROUTES } from "../../../routing-context/domain/router-context"

interface KindergartenData {
  name: string
  groups: string[]
  kidsAmount: number
  address: string
}

export default function useEditKindergartenForm() {
  const [formErrors, setFormErrors] = useState<ParsedValidationErrors>({})
  const [kindergartenData, setkindergartenData] = useState<KindergartenData | null>(null)
  const [updateKindergarten] = useUpdateKindergartenMutation()
  const params = useParams()
  const [editKindergartenForm] = useForm()
  const navigate = useNavigate()
  const {
    data: kindergarten,
    isFetching: isFetchingKindergarten,
    isLoading: isLoadingKindergarten,
  } = useGetKindergartenQuery(
    { id: params?.kindergartenId ? params.kindergartenId : "" },
    {
      refetchOnMountOrArgChange: true,
      skip: false,
    },
  )

  const onFinish: FormProps<EditKindergartenFieldType>["onFinish"] = (values) => {
    setFormErrors({})
    console.log(values)

    updateKindergarten({
      id: params?.kindergartenId as string,
      name: values?.name,
      address: values?.address as string,
      color: "#111111",
    }).then((response: Response<CreateKindergartenResponse>) => {
      if ("data" in response) {
        console.log(response.data)
        if (response.data.status === "success") {
          navigate(`/${ROUTES.app}/${ROUTES.kindergartenPreview}/${params?.kindergartenId}`)
        }
      }

      if ("error" in response) {
      }
    })
  }
  const onFinishFailed: FormProps<EditKindergartenFieldType>["onFinishFailed"] = (errorInfo): void => {
    console.log("Failed:", errorInfo)
  }

  const onValidationErrors = (errors: ValidationErrors): void => {
    const formErrors = getErrors(errors)
    setFormErrors(formErrors)
  }

  const refillForm = () => {
    editKindergartenForm.setFieldValue("name", kindergarten?.data.name)
    editKindergartenForm.setFieldValue("address", kindergarten?.data.address)
  }

  useEffect(() => {
    if (!isLoadingKindergarten && kindergarten) {
      refillForm()
    }
  }, [])

  return { onFinish, onFinishFailed, formErrors, editKindergartenForm }
}

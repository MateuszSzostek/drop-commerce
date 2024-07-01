import { FormProps, useForm } from "antd/es/form/Form"
import { useEffect, useState } from "react"
import { ParsedValidationErrors, SelectOptions } from "../../../../common/types"
import { AssignGroupFieldType } from "../../domain/kindergarten-context"
import { useGetAllGroupsByKindergartenQuery } from "../../../group-context/services/groupsSlice"
import { useParams } from "react-router-dom"

export default function useAssignGroupModal() {
  const [assignGroupForm] = useForm()
  const [formErrors, setFormErrors] = useState<ParsedValidationErrors>({})
  const [avaliableKindergartenGroupsSelectOptions, setAvaliableKindergartenGroupsSelectOptions] = useState<SelectOptions>([])
  const params = useParams()

  const {
    data: groupsInKindergarten,
    isFetching: isFetchingGroupsInKindergarten,
    isLoading: isLoadingGroupsInKindergarten,
  } = useGetAllGroupsByKindergartenQuery(
    { kindergartenId: params?.kindergartenId ? params.kindergartenId : "" },
    {
      refetchOnMountOrArgChange: true,
      skip: false,
    },
  )

  useEffect(() => {
    if (!isLoadingGroupsInKindergarten && groupsInKindergarten) {
      setAvaliableKindergartenGroupsSelectOptions(
        groupsInKindergarten.data.map((group) => ({
          label: group.name,
          value: group.id,
        })),
      )
    }
  }, [isLoadingGroupsInKindergarten])

  const onFinish: FormProps<AssignGroupFieldType>["onFinish"] = (values) => {
    setFormErrors({})
    /*
    newPassword({
      jwtToken: params?.token || "",
      newPassword: values?.newPassword,
      newPasswordConfirmation: values?.newPasswordConfirmation,
    }).then((response: Response<SignInResponse>) => {
      if ("error" in response) {
        onValidationErrors(response.error as ValidationErrors)
      } else if (response.data.status === "200 OK") {
        setHasPasswordChanged(true)
        setTimeout(() => {
          setHasPasswordChanged(false)
        }, 4500)
      }
    })
    */
  }
  const onFinishFailed: FormProps<AssignGroupFieldType>["onFinishFailed"] = (errorInfo): void => {
    console.log("Failed:", errorInfo)
  }

  return { formErrors, assignGroupForm, avaliableKindergartenGroupsSelectOptions, onFinish, onFinishFailed }
}

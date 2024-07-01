import { useParams } from "react-router-dom"
import { useSignUpConfirmationMutation } from "../../services/authSlice"
import { useEffect, useState } from "react"
import { SignUpConfirmationResponse } from "../../domain/identify-and-access-context"
import { Response } from "../../../../common/types"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "../../../routing-context/domain/router-context"

export default function useSignUpConfirmation() {
  const params = useParams()
  const [confirmRegistration, result] = useSignUpConfirmationMutation()
  const [confirmationMessage, setConfirmationMessage] = useState<string>("register-confirmation-page.loading-text")
  const navigate = useNavigate()

  useEffect(() => {
    confirmRegistration({
      userId: params?.userId || "",
      token: params?.token || "",
    }).then((response: Response<SignUpConfirmationResponse>) => {
      if ("error" in response) {
        setConfirmationMessage("register-confirmation-page.error-text")
        setTimeout(() => {
          navigate(ROUTES.dashboard)
        }, 4500)
      } else if (response.data.status === "200 OK") {
        setConfirmationMessage("register-confirmation-page.success-text")
        setTimeout(() => {
          navigate(ROUTES.dashboard)
        }, 4500)
      }
    })
  }, [])

  return { result, confirmationMessage }
}

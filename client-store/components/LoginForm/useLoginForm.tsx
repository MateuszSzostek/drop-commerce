"use client";

import { useCustomerLoginMutation } from "@/store/authSlice";
import useNotifications from "../Notifications/useNotifications";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getErrors, ParsedValidationErrors } from "@/store/const";
import { setUserData } from "@/store/userStoreSlice";

export default function useLoginForm() {
  const [triggerCustomerLogin, customerLoginMutationResult] =
    useCustomerLoginMutation();

  const [formErrors, setFormErrors] = useState<ParsedValidationErrors>({});

  const router = useRouter();

  const dispatch = useDispatch();

  const { showNotification } = useNotifications();

  const handleTestNotification = () => {
    showNotification({
      title: "Test Notification",
      body: "This is a test notification",
      type: "success",
    });
  };

  const handleSubmitCustomerLogin = async (e) => {
    e.preventDefault();

    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(Object.fromEntries(formData));

    const customerLoginResult = await triggerCustomerLogin({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      shouldRemember: formData.get("shouldRemember") === "on" ? true : false,
    });

    if ("data" in customerLoginResult) {
      //console.warn(customerLoginResult?.data?.data?.name);
      dispatch(
        setUserData({
          name: customerLoginResult?.data?.data?.name as string,
          surname: customerLoginResult?.data?.data?.surname as string,
          email: customerLoginResult?.data?.data?.email as string,
          isLoggedIn: true,
        })
      );
      router.push("/", { scroll: false });
    } else {
      //validation errors
      onValidationErrors(customerLoginResult.error);
    }
  };

  const onValidationErrors = (errors: Error): void => {
    const formErrors = getErrors(errors);
    //console.warn(formErrors);
    setFormErrors(formErrors);
  };

  return { handleSubmitCustomerLogin, handleTestNotification, formErrors };
}

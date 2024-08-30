"use client";

import { useCustomerLoginMutation } from "@/store/authSlice";
import useNotifications from "../Notifications/useNotifications";

export default function useLoginForm() {
  const [triggerCustomerLogin, customerLoginMutationResult] =
    useCustomerLoginMutation();

  const { showNotification } = useNotifications();

  const handleTestNotification = () => {
    showNotification({
      title: "Test Notification",
      body: "This is a test notification",
    });
  };

  const handleSubmitCustomerLogin = async (e) => {
    e.preventDefault();

    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));

    const customerLoginResult = await triggerCustomerLogin({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      shouldRemember: formData.get("shouldRemember") === "on" ? true : false,
    });

    if ("data" in customerLoginResult) {
    } else {
      //validation errors
    }
  };

  return { handleSubmitCustomerLogin, handleTestNotification };
}

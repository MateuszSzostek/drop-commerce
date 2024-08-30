import { useCustomerLogoutMutation } from "@/store/authSlice";
import { useDispatch } from "react-redux";
import { setUserData } from "@/store/userStoreSlice";

export default function useTopNav() {
  const [triggerLogout] = useCustomerLogoutMutation();

  const dispatch = useDispatch();

  const handleLogut = async () => {
    const logoutResult = await triggerLogout({});

    if ("data" in logoutResult) {
      dispatch(
        setUserData({
          name: null,
          surname: null,
          email: null,
          isLoggedIn: false,
        })
      );
    }
  };

  return { handleLogut };
}

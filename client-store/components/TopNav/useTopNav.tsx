import { useCustomerLogoutMutation } from "@/store/authSlice";
import { useDispatch } from "react-redux";
import { setUserData } from "@/store/userStoreSlice";
import {
  setTotalBasketItems,
  setTotalGrossBasketPrice,
} from "@/store/basketStoreSlice";

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

      dispatch(setTotalGrossBasketPrice(0));
      dispatch(setTotalBasketItems(0));
    }
  };

  return { handleLogut };
}

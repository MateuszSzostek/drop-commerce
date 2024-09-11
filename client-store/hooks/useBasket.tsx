import {
  useAddToBasketMutation,
  useRemoveFromBasketMutation,
} from "@/store/basketSlice";
import { useAppSelector } from "@/lib/store";
import { useRouter } from "next/navigation";
import useNotifications from "@/components/Notifications/useNotifications";
import translations from "@/translations/translations.pl";
import { useDispatch } from "react-redux";

export default function useBasket() {
  const router = useRouter();

  const { isLoggedIn } = useAppSelector((state) => state.userStoreSlice);

  const { showNotification } = useNotifications();

  const [triggerAddToBasket, addToBasketResult] = useAddToBasketMutation();
  const [triggerRemoveFromBasket, removeFromBasketResult] =
    useRemoveFromBasketMutation();

  const handleAddToBasket = async (productId: string, productName: string) => {
    if (isLoggedIn) {
      console.warn(productId);
      const addToBasketResult = await triggerAddToBasket({
        providerIdentifier: productId,
      });

      console.log(addToBasketResult);

      if (addToBasketResult?.data?.status === "success") {
        showNotification({
          title: `${translations.notifications["add-product-title"]}`,
          body: `${productName}${translations.notifications["add-product-body"]}`,
          type: "success",
        });
      }
    } else {
      router.push("/sign-in", { scroll: false });
    }
  };

  const handleRemoveFromBasket = async (
    productId: string,
    productName: string
  ) => {
    if (isLoggedIn) {
      const removeFromBasketResult = await triggerRemoveFromBasket({
        providerIdentifier: productId,
      });

      if (removeFromBasketResult?.status === "success") {
        showNotification({
          title: `${translations.notifications["remove-product-title"]}`,
          body: `${productName}${translations.notifications["remove-product-body"]}`,
          type: "success",
        });
      }
    } else {
      router.push("/sign-in", { scroll: false });
    }
  };

  return {
    handleAddToBasket,
    handleRemoveFromBasket,
    addToBasketResult,
    removeFromBasketResult,
  };
}

import { useEffect, useState } from "react";
import { useGetBasketQuery } from "@/store/basketSlice";
import { useDispatch } from "react-redux";
import {
  setTotalBasketItems,
  setTotalGrossBasketPrice,
} from "@/store/basketStoreSlice";
import { useAppSelector } from "@/lib/store";

export default function useBasketIndicator() {
  const dispatch = useDispatch();

  const { items, totalGrossPrice, totalItems } = useAppSelector(
    (state) => state.basketStoreApi
  );

  const {
    data: basket,
    isFetching: isFetchingBasket,
    isLoading: isLoadingBasket,
  } = useGetBasketQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
      skip: false,
    }
  );

  useEffect(() => {
    console.warn(isFetchingBasket);
    console.warn(basket);
    if (!isFetchingBasket && basket && basket?.data?.length > 0) {
      const totalPrice: number = basket?.data?.reduce((sum, product) => {
        return sum + product.totalPrice;
      }, 0);

      const totalItems: number = basket?.data?.reduce((sum, product) => {
        return sum + product.quantity;
      }, 0);

      console.log(totalPrice);

      dispatch(setTotalGrossBasketPrice(totalPrice));
      dispatch(setTotalBasketItems(totalItems));
    }
  }, [isFetchingBasket]);

  return { items, totalGrossPrice, totalItems };
}

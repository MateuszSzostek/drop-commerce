import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IBasketSlice {
  items: BasketItem[];
  totalGrossPrice: number;
  totalItems: number;
}

type BasketItem = {
  id: string;
  name: string;
  amount: number;
  price: number;
  provider: string;
};

const initialState: IBasketSlice = {
  items: [],
  totalGrossPrice: 0,
  totalItems: 0,
};

export const basketStoreSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setBasket: (state, action: PayloadAction<BasketItem[]>) => {
      state.items = action.payload;
    },
    setTotalGrossBasketPrice: (state, action: PayloadAction<number>) => {
      state.totalGrossPrice = action.payload;
    },
    setTotalBasketItems: (state, action: PayloadAction<number>) => {
      state.totalItems = action.payload;
    },
  },
});

export const { setBasket, setTotalGrossBasketPrice, setTotalBasketItems } =
  basketStoreSlice.actions;

export default basketStoreSlice.reducer;

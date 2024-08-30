import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IBasketSlice {
  items: BasketItem[];
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
};

export const basketStoreSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setBasket: (state, action: PayloadAction<BasketItem[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setBasket } = basketStoreSlice.actions;

export default basketStoreSlice.reducer;

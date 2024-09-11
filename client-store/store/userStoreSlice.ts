import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IUserStoreSlice {
  isLoggedIn: boolean;
  name: string | null;
  surname: string | null;
  email: string | null;
}

const initialState: IUserStoreSlice = {
  isLoggedIn: false,
  name: null,
  surname: null,
  email: null,
};

export const userStoreSlice = createSlice({
  name: "userStoreSlice",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<IUserStoreSlice>) => {
      // console.warn(action.payload);

      let newState = { ...state };

      newState = action.payload;

      return newState;
    },
  },
});

export const { setUserData } = userStoreSlice.actions;

export default userStoreSlice.reducer;

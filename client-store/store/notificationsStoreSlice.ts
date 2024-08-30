import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface INotifiacationsSlice {
  notifications: Notification[];
}

export type Notification = {
  id: string;
  title: string;
  body: string;
};

const initialState: INotifiacationsSlice = {
  notifications: [],
};

export const notificationsStoreSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification>) => {
      console.log(action);
      state.notifications.push(action.payload);
    },
    removeNotification: (state, action: PayloadAction<{ id: string }>) => {
      state.notifications = state.notifications.filter(
        (el) => el.id !== action.payload.id
      );
      console.warn(state.notifications[0]);
    },
  },
});

export const { addNotification, removeNotification } =
  notificationsStoreSlice.actions;

export default notificationsStoreSlice.reducer;

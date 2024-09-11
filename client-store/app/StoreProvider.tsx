"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore, persistor } from "../lib/store";
import { PersistGate } from "redux-persist/integration/react";
import Notifications from "@/components/Notifications/Notifications";
import { store } from "../lib/store";
import { persistStore } from "redux-persist";

persistStore(store);
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // const storeRef = useRef<AppStore>();
  // if (!storeRef.current) {
  // Create the store instance the first time this renders
  //storeRef.current = makeStore();
  // }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Notifications />
        {children}
      </PersistGate>
    </Provider>
  );
}

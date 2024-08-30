import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { basketApi } from "@/store/basketSlice";
import notificationsStoreSlice from "@/store/notificationsStoreSlice";
import basketStoreSlice from "@/store/basketStoreSlice";
import { customerAuthApi } from "@/store/authSlice";
import { userStoreSlice } from "@/store/userStoreSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// Combine the reducers
const rootReducer = combineReducers({
  basketApi: basketApi.reducer,
  notificationsStoreApi: notificationsStoreSlice,
  basketStoreApi: basketStoreSlice,
  customerAuthApi: customerAuthApi.reducer,
  userStoreSlice: userStoreSlice.reducer,
});

// Configure persist settings
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["basketStoreApi", "userStoreSlice"], // add the reducers you want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat([basketApi.middleware, customerAuthApi.middleware]),
    devTools: process.env.NODE_ENV !== "production",
  });
};

export const store = makeStore(); // Create the store instance here

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

// Create custom hooks for usage in functional components
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Create and export persistor
export const persistor = persistStore(store);

/////////////////////////
/*
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import { basketApi } from "@/store/basketSlice";
import notificationsStoreSlice from "@/store/notificationsStoreSlice";
import basketStoreSlice from "@/store/basketStoreSlice";
import { customerAuthApi } from "@/store/authSlice";
import { userStoreSlice } from "@/store/userStoreSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // default to localStorage for web

// Combine the reducers
const rootReducer = combineReducers({
  basketApi: basketApi.reducer,
  notificationsStoreApi: notificationsStoreSlice,
  basketStoreApi: basketStoreSlice,
  customerAuthApi: customerAuthApi.reducer,
  userStoreSlice: userStoreSlice.reducer,
});

// Configure persist settings
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["basketStoreApi", "userStoreSlice"], // add the reducers you want to persist
};import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import { basketApi } from "@/store/basketSlice";
import notificationsStoreSlice from "@/store/notificationsStoreSlice";
import basketStoreSlice from "@/store/basketStoreSlice";
import { customerAuthApi } from "@/store/authSlice";
import { userStoreSlice } from "@/store/userStoreSlice";
import
// Create the store
export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat([basketApi.middleware, customerAuthApi.middleware]),
    devTools: process.env.NODE_ENV !== "production",
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch<AppDispatch>();
export const useAppSelector = useSelector<RootState>();
export const useAppStore = useStore<AppStore>();

// Create and export persistor
export const persistor = persistStore(makeStore());

*/

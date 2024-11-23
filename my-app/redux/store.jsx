import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
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
import storage from "redux-persist/lib/storage";

// slices / reducers import
import WomenProductsSlice from "../reducers/WomenProductsSlice";
import KidsProductsSlice from "../reducers/KidsProductsSlice";

const rootReducer = combineReducers({
  WomenProductsSliceKey: WomenProductsSlice,
  KidsProductsSliceKey: KidsProductsSlice,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: [
    "WomenProductsSliceKey",
    // Add slices key you want to exclude from persistence.
  ],
  whitelist: [
    "KidsProductsSliceKey",
    // Add slices key you want to persist.
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

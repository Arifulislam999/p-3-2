import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./Features/API/apiSlice";
import authSlice from "./Features/AuthApi/authSlice";
import productSlice from "./Features/ProductApi/productSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    logingStatus: authSlice,
    productMonitoring: productSlice,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});

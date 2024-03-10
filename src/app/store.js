import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./../features/api/apiSlice";
import utilsReducer from "./../features/utilsSlice";
import cartReducer from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    utils: utilsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

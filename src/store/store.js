import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "../Component/City/CitySlice";
import { getApi } from "../Component/Product/GetProductApiSlice";
import { postApi } from "../Component/Product/PostProductApiSlice";

const store = configureStore({
  reducer: {
    [getApi.reducerPath]: getApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    city: cityReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([getApi.middleware, postApi.middleware]),
});

export default store;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = process.env.REACT_APP_BASE_URL;
export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    postProduct: builder.mutation({
      query: (body) => ({
        url: "/products/add",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { usePostProductMutation } = postApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "productapi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    // baseUrl: "http://localhost:9000",
  }),

  tagTypes: [
    "loginstatus",
    "logoutstatus",
    "userStatus",
    "postProduct",
    "semilerProduct",
    "getSpecificUser",
  ],
  endpoints: (builder) => ({}),
});

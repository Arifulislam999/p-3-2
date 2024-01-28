import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "productapi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", token);
      }
      return headers;
    },

    // baseUrl: "http://localhost:9000",
  }),

  tagTypes: [
    "loginstatus",
    "logoutstatus",
    "userStatus",
    "postProduct",
    "semilerProduct",
    "getSpecificUser",
    "getalldata",
    "deleteuser",
  ],
  endpoints: (builder) => ({}),
});

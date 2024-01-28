const { apiSlice } = require("../API/apiSlice");

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userRegistation: builder.mutation({
      query: (data) => ({
        url: "/api/user/register",
        method: "POST",
        body: data,
      }),
      providesTags: ["userStatus"],
    }),
    userLogin: builder.mutation({
      query: (data) => ({
        url: "/api/user/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["loginstatus", "getSpecificUser", "getalldata"],
      providesTags: ["deleteuser"],
    }),
    userLogOut: builder.query({
      query: () => ({
        url: "/api/user/logout",
      }),
      invalidatesTags: ["logoutstatus"],
    }),
    userLoginStatus: builder.query({
      query: () => ({
        url: "/api/user/loggedin",
      }),
      providesTags: ["loginstatus", "logoutstatus"],
      invalidatesTags: ["userStatus"],
    }),
    userUpdate: builder.mutation({
      query: (data) => ({
        url: "/api/user/userupdate",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const {
  useUserRegistationMutation,
  useUserLoginMutation,
  useUserLogOutQuery,
  useUserLoginStatusQuery,
  useUserUpdateMutation,
} = authApi;

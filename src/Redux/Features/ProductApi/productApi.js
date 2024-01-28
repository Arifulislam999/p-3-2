const { apiSlice } = require("../API/apiSlice");

const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ page, filter, tags }) => ({
        url: `/api/product/getallproduct?page=${page}&filter=${filter}&tags=${tags}`,
      }),
      providesTags: ["postProduct", "getalldata", "deleteuser"],
    }),
    getSingleProductDetails: builder.query({
      query: ({ id, creator_id }) => ({
        url: `/api/product/getsingleporduct?id=${id}&creator_id=${creator_id}`,
      }),
      providesTags: ["semilerProduct"],
    }),
    postProduct: builder.mutation({
      query: (data) => ({
        url: "/api/product/postproduct",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["postProduct"],
    }),
    getAllProductSpecificUser: builder.query({
      query: ({ pageNo }) => ({
        url: `/api/product/getallproductspecificuser?page=${pageNo}`,
      }),
      providesTags: ["getSpecificUser"],
    }),
    getSemilerProduct: builder.query({
      query: ({ productName, id }) => ({
        url: `/api/product/semilerproduct?product=${productName}&id=${id}`,
      }),
      invalidatesTags: ["semilerProduct"],
    }),
    favoriteProduct: builder.mutation({
      query: (data) => ({
        url: `/api/product/favoriteproduct`,
        method: "POST",
        body: data,
      }),
    }),
    favoriteStatus: builder.query({
      query: ({ userId, productId }) => ({
        url: `/api/product/favoritestatus?userId=${userId}&productId=${productId}`,
      }),
    }),
    userFavoriteProduct: builder.query({
      query: ({ pageNo, userid }) => ({
        url: `/api/product/userfavoritequery?page=${pageNo}&userid=${userid}`,
      }),
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/api/user/deleteuser?userId=${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["deleteuser"],
    }),
  }),
});
export const {
  useGetAllProductsQuery,
  useGetSingleProductDetailsQuery,
  usePostProductMutation,
  useGetAllProductSpecificUserQuery,
  useGetSemilerProductQuery,
  useFavoriteProductMutation,
  useFavoriteStatusQuery,
  useUserFavoriteProductQuery,
  useDeleteUserMutation,
} = productApi;

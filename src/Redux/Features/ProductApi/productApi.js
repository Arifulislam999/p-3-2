const { apiSlice } = require("../API/apiSlice");

const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ page }) => ({
        url: `/api/product/getallproduct?page=${page}`,
      }),
      providesTags: ["postProduct"],
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
} = productApi;

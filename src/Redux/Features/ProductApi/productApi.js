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
      query: () => ({
        url: "/api/product/getallproductspecificuser",
      }),
      providesTags: ["getSpecificUser"],
    }),
  }),
});
export const {
  useGetAllProductsQuery,
  useGetSingleProductDetailsQuery,
  usePostProductMutation,
  useGetAllProductSpecificUserQuery,
} = productApi;

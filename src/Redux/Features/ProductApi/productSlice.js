import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalProductSize: 10,
  pageCount: null,
};
export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    getTotlalProductSlice: (state, action) => {
      state.totalProductSize = action.payload;
    },
    paginationPageCount: (state, action) => {
      state.pageCount = action.payload;
    },
  },
});
export const { getTotlalProductSlice, paginationPageCount } =
  productSlice.actions;
export default productSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalProductSize: 10,
  pageCount: null,
  sortText: "Date:Newest on top",
  tag: "",
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
    getSortTextByUser: (state, action) => {
      state.sortText = action.payload;
    },
    getSortTagByUser: (state, action) => {
      state.tag = action.payload;
    },
  },
});
export const {
  getTotlalProductSlice,
  paginationPageCount,
  getSortTextByUser,
  getSortTagByUser,
} = productSlice.actions;
export default productSlice.reducer;

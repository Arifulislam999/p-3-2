import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalProductSize: 10,
};
export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    getTotlalProductSlice: (state, action) => {
      state.totalProductSize = action.payload;
    },
  },
});
export const { getTotlalProductSlice } = productSlice.actions;
export default productSlice.reducer;

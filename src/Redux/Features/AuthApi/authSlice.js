import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  logInLogOutStatus: false,
};
export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logStatus: (state, action) => {
      state.logInLogOutStatus = action.payload;
    },
  },
});
export const { logStatus } = authSlice.actions;
export default authSlice.reducer;

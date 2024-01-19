import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  logInLogOutStatus: false,
  userId: "",
};
export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logStatus: (state, action) => {
      state.logInLogOutStatus = action.payload;
    },
    userAccountNo: (state, action) => {
      state.userId = action.payload;
    },
  },
});
export const { logStatus, userAccountNo } = authSlice.actions;
export default authSlice.reducer;

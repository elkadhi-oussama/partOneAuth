import { createSlice } from "@reduxjs/toolkit";

const getToken = localStorage.getItem("Admin");
var initialState;
if (getToken) {
  getToken === "false"
    ? (initialState = { value: false })
    : (initialState = { value: true });
} else {
  initialState = { value: false };
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeStateAuthUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeStateAuthUser } = authSlice.actions;

export default authSlice.reducer;

// false  ==== 0 false "" null undefined  NaN

// "false"  ===> true

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slice/userSlice";
import authSlice from "./Slice/authSlice";

export const store = configureStore({
  reducer: { user: userSlice, auth: authSlice },
});

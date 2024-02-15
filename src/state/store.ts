import { configureStore } from "@reduxjs/toolkit";
import { authReducers } from "@/state/auth/authSlice";
import { userReducers } from "./user/userSlice";
import { oauthTwitterReducers } from "./oauthTwitter/oauthTwitter";

export const store = configureStore({
  reducer: {
    authReducers,
    userReducers,
    oauthTwitterReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

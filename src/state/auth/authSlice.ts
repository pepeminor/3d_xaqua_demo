import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GET_TWITTER_OAUTH_ACTION } from "./actions";

export interface ITwitterOAuth {
  accessToken?: string;
  refreshToken?: string;
  twitterId?: string;
  picture?: string;
}

interface IOtherState {
  isLoading: boolean;
}

export interface IInitialState extends ITwitterOAuth, IOtherState {}

const initialState: IInitialState = {
  accessToken: undefined,
  refreshToken: undefined,
  twitterId: undefined,
  picture: undefined,
  isLoading: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GET_TWITTER_OAUTH_ACTION.pending, (state) => {
      console.log("GET_TWITTER_OAUTH_ACTION-isPending");
      state.isLoading = true;
    }),
      builder.addCase(
        GET_TWITTER_OAUTH_ACTION.fulfilled,
        (state, action: PayloadAction<ITwitterOAuth>) => {
          console.log("GET_TWITTER_OAUTH_ACTION-isSuccess");
          return {
            ...state,
            ...action.payload,
            isLoading: false,
          };
        },
      ),
      builder.addCase(GET_TWITTER_OAUTH_ACTION.rejected, (state) => {
        console.log("GET_TWITTER_OAUTH_ACTION-isRejected");
        state = {
          ...state,
          ...initialState,
        };
      });
  },
});

export const authActions = authSlice.actions;
export const authReducers = authSlice.reducer;

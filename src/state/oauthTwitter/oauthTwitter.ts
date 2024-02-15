import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IOAuthTwitter {
  code: string | null;
}

interface IOtherState {
  isLoading: boolean;
}

export interface IInitialState extends IOAuthTwitter, IOtherState {}

const initialState: IInitialState = {
  code: null,
  isLoading: false,
};

const oauthTwitterSlice = createSlice({
  name: "oauthTwitterSlice",
  initialState,
  reducers: {
    getOAuthCodeSuccess: (state, action: PayloadAction<string>) => {
      state.code = action.payload;
      state.isLoading = false;
    },
    getOAuthCodeFailed: (state) => {
      state.code = initialState.code;
      state.isLoading = false;
    },
  },
});

export const oauthTwitterActions = oauthTwitterSlice.actions;
export const oauthTwitterReducers = oauthTwitterSlice.reducer;

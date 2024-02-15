import { PayloadAction,  createSlice } from "@reduxjs/toolkit";
import { GET_USER_ACTION } from "./actions";

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

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GET_USER_ACTION.pending, (state) => {
        console.log("isPending");
        state.isLoading = true;
      }),
      builder.addCase(
        GET_USER_ACTION.fulfilled,
        (state, action: PayloadAction<ITwitterOAuth>) => {
          console.log("isSuccess");
          return {
            ...state,
            ...action.payload,
            isLoading: false,
          };
        },
      ),
      builder.addCase(GET_USER_ACTION.rejected, (state) => {
        console.log("isRejected");
        state = {
          ...initialState,
        };
      });
  },
});

export const userActions = userSlice.actions;
export const userReducers = userSlice.reducer;

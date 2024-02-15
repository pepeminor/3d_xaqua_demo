import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITwitterOAuth } from "./authSlice";
import { queryApi } from "@/common/queryAPI";
import { apiRequest } from "@/common/api.request";

export const GET_TWITTER_OAUTH_ACTION = createAsyncThunk(
    "authSlice/GET_TWITTER_OAUTH",
    async (code: string) => {
      try {
        const rs: { data: ITwitterOAuth } = await queryApi(
          apiRequest.getTwitterOAuth,
          { code },
        );
        return rs.data;
      } catch (e) {
        throw e;
      }
    },
  );
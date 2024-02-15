import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITwitterOAuth } from "./userSlice";
import { queryApi } from "@/common/queryAPI";
import { apiRequest } from "@/common/api.request";

export const GET_USER_ACTION = createAsyncThunk(
  "userSlice/GET_USER_ACTION",
  async (code: string) => {
    try {
      const res: { data: ITwitterOAuth } = await queryApi(apiRequest.getUser, {
        code,
      });
      console.log("getUser---res.data", res.data);
      return res.data;
    } catch (e) {
      throw e;
    }
  },
);

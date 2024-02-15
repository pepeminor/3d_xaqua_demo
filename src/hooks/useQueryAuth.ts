"use client";

import { useDispatch } from "react-redux";
import useEffectOnce from "./useEffectOnce";
import { GET_TWITTER_OAUTH_ACTION } from "@/state/auth/actions";
// import { getTwitterOAuthAsync } from "@/state/auth/actions";

const useQueryTwitterOAuth = () => {
  const dispatch = useDispatch();
  useEffectOnce(() => {
    dispatch(GET_TWITTER_OAUTH_ACTION("CodeGetFromTwitter") as any);
  });

  return null;
};

export default useQueryTwitterOAuth;

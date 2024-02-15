"use client";

import { useSearchParams } from "next/navigation";

const useGetParamUrl = (paramUrl: string) => {
  const searchParams = useSearchParams();
  const urlRef = searchParams.get(paramUrl);
  const valueParam = urlRef?.length ? urlRef : undefined;

  return {
    valueParam,
  };
};

export default useGetParamUrl;

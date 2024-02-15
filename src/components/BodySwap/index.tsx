"use client";

import { Suspense, useEffect, useState } from "react";
import { LICss, PadWrap, ULCss, WrapPage } from "./styles";
import Borrow from "./Borrow";
import Repay from "./Repay";
import History from "./History";
import useQueryTwitterOAuth from "@/hooks/useQueryAuth";
import useGetParamUrl from "@/hooks/useGetParamUrl";
import { store } from "@/state/store";
import { oauthTwitterActions } from "@/state/oauthTwitter/oauthTwitter";
import { WrapperAppLayout } from "../Wrappers";

const TABS = [
  {
    id: 0,
    title: "Borrow",
    component: <Borrow />,
  },
  {
    id: 1,
    title: "Repay",
    component: <Repay />,
  },
  {
    id: 2,
    title: "History",
    component: <History />,
  },
];

const BodySwap = () => {
  const [tabId, setTabId] = useState(0);

  const { valueParam } = useGetParamUrl("code");

  useEffect(() => {
    if (!valueParam) return;
    store.dispatch(oauthTwitterActions.getOAuthCodeSuccess(valueParam));
  }, [valueParam]);

  return (
    <Suspense>
      <WrapperAppLayout>
        <WrapPage>
          <div className="pb-8 pt-[140px]">
            <PadWrap className="relative z-10">
              <ULCss>
                {TABS.map((tab) => (
                  <LICss
                    key={tab.id}
                    $isActive={tab.id === tabId}
                    onClick={() => setTabId(tab.id)}
                  >
                    {tab.title}
                  </LICss>
                ))}
              </ULCss>

              {TABS[tabId].component}
            </PadWrap>
          </div>
        </WrapPage>
      </WrapperAppLayout>
    </Suspense>
  );
};

export default BodySwap;

"use client";
import dynamic from "next/dynamic";

const HeaderLayout = dynamic(
  () => import("@/components/Header").then((res) => res.default),
  { ssr: false },
);

export default HeaderLayout;

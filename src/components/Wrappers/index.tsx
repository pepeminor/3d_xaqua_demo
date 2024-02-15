"use client";
// import dynamic from "next/dynamic";
// const Header = dynamic(() => import("@/components/Header"), { ssr: false });

export const WrapperAppLayout = ({ children }: any) => {
  return (
    <div>
      {/* <Header /> */}
      {children}
    </div>
  );
};

import NFTMarketplaceProvider from "@/Context/ThemeContext";
import type { Metadata } from "next";
import "./globals.css";

import AppModalContextProvider from "@/Context/ModalContext";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ToastContainer from "@/components/ToastContainer";
import HomeCanvas from "@/components/HomeCanvas";

export const metadata: Metadata = {
  title: "xAqua",
  description: "xAqua, bitcoin, ethereum, blockchain, web3, NFT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NFTMarketplaceProvider>
          <div className="fixed z-10 w-[100%]">
            <HomeCanvas />
          </div>
          <AppModalContextProvider>{children}</AppModalContextProvider>
        </NFTMarketplaceProvider>
        <ToastContainer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

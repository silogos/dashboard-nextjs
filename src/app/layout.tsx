import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import SideBar from "./sidebar";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./navbar";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Admin Sales Dashboard",
    absolute: "Admin Sales Dashboard",
  },
  description: "Admin Sales dashboard to manage sales data",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Providers>
          <Navbar />
          <Flex flex={1} flexDirection={"row"}>
            <Suspense>
              <SideBar />
            </Suspense>
            <Flex flex={1} flexDirection={"column"} overflow={"scroll"}>
              {children}
            </Flex>
          </Flex>
        </Providers>
      </body>
    </html>
  );
}

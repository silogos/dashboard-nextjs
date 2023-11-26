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
      <body
        className={`${inter.className} h-screen flex flex-col overflow-hidden`}
      >
        <Providers>
          <Navbar />
          <Flex flex={1} flexDirection={"row"} overflow={"hidden"}>
            <Suspense>
              <SideBar />
            </Suspense>
            <Flex
              as="main"
              flex={1}
              flexDirection={"column"}
              overflow={"hidden"}
              // overflow={"scroll"}
            >
              {children}
            </Flex>
          </Flex>
        </Providers>
      </body>
    </html>
  );
}

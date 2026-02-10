import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import NextImage from "next/image";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>

            <Link
              isExternal
              href="https://line.me/R/ti/p/@lotto888"
              title="ติดต่อเราผ่าน Line"
              className="fixed bottom-4 left-4 z-50 flex h-14 w-14 animate-bounce items-center justify-center rounded-full bg-[#06C755] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
            >
              <NextImage
                src="/LINE_Brand_icon.png"
                alt="Line"
                width={32}
                height={32}
              />
            </Link>

            <footer className="w-full flex items-center justify-center py-3">
              <span className="text-default-500 text-sm">
                Copyright © 2022-2023 All rights reserved.
              </span>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}

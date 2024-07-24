import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import TopNavigation from "@component/components/TopNavigation";

const baseUrl = "https://zaraorji.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Zara Orji's Portfolio",
    template: "%s | Portfolio",
  },
  description: "A portfolio of my skills and experience as a product manager",
  openGraph: {
    title: "Zara Orji's Portfolio",
    description:
      "A portfolio of my skills and experience as a product manager.",
    url: baseUrl,
    siteName: "Zara Orji Portfolio",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
      </head>
      <body className="antialiased mx-4 lg:mx-auto mb-10 ">
        <TopNavigation />
        <main className="flex-auto min-w-0 max-w-7xl w-full flex flex-col mx-auto my-8 px-2 md:px-6">
          {children}
        </main>
      </body>
    </html>
  );
}

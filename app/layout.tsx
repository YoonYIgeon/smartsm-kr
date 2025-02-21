import type { Metadata } from "next";
import localFont from "next/font/local";
import { Figtree, Karla } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { MaxWidthWrapper } from "@/components/layout/max-width-wrapper";

// --------- FONTS ---------
const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
});

// --------- METADATA ---------
export const metadata: Metadata = {
  metadataBase: new URL("https://smartsm.vercel.app/"),
  title: { default: "smartsm", template: "%s | smartsm" },
  description: "Crafting elegant products that captivate and delight users ✨",
  keywords: [
    "smartsm",
    "Software Engineering",
    "Career",
    "Events",
    "Blog",
    "About",
    "Contact",
  ],
  openGraph: {
    title: "smartsm",
    description:
      "Crafting elegant products that captivate and delight users ✨",
    url: "https://smartsm.vercel.app/",
    siteName: "smartsm",
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
  twitter: {
    title: "smartsm",
    site: "smartsm",
    creator: "@smartsm",
    description:
      "Crafting elegant products that captivate and delight users ✨",
    card: "summary_large_image",
  },
};

// --------- LAYOUT ---------
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="naver-site-verification"
          content="3b00cee63d03aeb8d5239924a74580b9c50f2858"
        />
      </head>
      <body
        className={`${pretendard.className} font-sans bg-zinc-50 selection:bg-zinc-200 dark:bg-zinc-900 dark:selection:bg-zinc-700 scroll-smooth antialiased`}
      >
        <ThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip mb-6">
            <Header />
            <MaxWidthWrapper>{children}</MaxWidthWrapper>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

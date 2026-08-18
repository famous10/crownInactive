import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.crowninteractive.com"),
  title: {
    default:
      "Crown Interactive — Sovereign Digital Public Infrastructure",
    template: "%s · Crown Interactive",
  },
  description:
    "Crown Interactive builds the sovereign technology stack behind governments, utilities and enterprises across Africa: 1Gov, CuBOSS and CICOD Enterprise Cloud.",
  keywords: [
    "Crown Interactive",
    "sovereign digital infrastructure",
    "government technology Africa",
    "utility billing software",
    "enterprise software Nigeria",
    "1Gov",
    "CuBOSS",
    "CICOD",
    "revenue cycle management",
    "digital public infrastructure",
  ],
  authors: [{ name: "Crown Interactive Limited" }],
  creator: "Crown Interactive Limited",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.crowninteractive.com",
    siteName: "Crown Interactive",
    title: "Crown Interactive — Sovereign Digital Public Infrastructure",
    description:
      "One platform. Every layer. Owned by you, always. Crown Interactive builds the technology stack for African governments, utilities and enterprises.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Crown Interactive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crown Interactive — Sovereign Digital Public Infrastructure",
    description:
      "One platform. Every layer. Owned by you, always. Crown Interactive builds the technology stack for African governments, utilities and enterprises.",
    images: ["/og-image.png"],
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
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

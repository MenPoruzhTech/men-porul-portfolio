import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"
import { LoadingProvider } from "@/components/loading-provider"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "MenPoruzhTech - Innovative Technology Solutions",
  description:
    "Leading technology company specializing in innovative solutions, web development, mobile apps, and digital transformation services.",
  keywords: ["technology", "web development", "mobile apps", "digital solutions", "MenPoruzhTech"],
  authors: [{ name: "MenPoruzhTech" }],
  creator: "MenPoruzhTech",
  publisher: "MenPoruzhTech",
  openGraph: {
    title: "MenPoruzhTech - Innovative Technology Solutions",
    description:
      "Leading technology company specializing in innovative solutions, web development, mobile apps, and digital transformation services.",
    url: "https://menporuzh.tech",
    siteName: "MenPoruzhTech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MenPoruzhTech - Innovative Technology Solutions",
    description:
      "Leading technology company specializing in innovative solutions, web development, mobile apps, and digital transformation services.",
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
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
            <Suspense fallback={null}>
              <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
                <LoadingProvider>
                  {children}
                  <ScrollToTop />
                </LoadingProvider>
              </ThemeProvider>
            </Suspense>
        <Analytics />
      </body>
    </html>
  )
}

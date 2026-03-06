import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"
import { FloatingThemeToggle } from "@/components/floating-theme-toggle"
import { LoadingProvider } from "@/components/loading-provider"
import { Suspense } from "react"
import "./globals.css"
import Head from "next/head"

// export const metadata: Metadata = {
//   title: "MenPoruzhTech - Innovative Technology Solutions",
//   description:
//     "Leading technology company specializing in innovative solutions, web development, mobile apps, and digital transformation services.",
//   keywords: ["technology", "web development", "mobile apps", "digital solutions", "MenPoruzhTech"],
//   authors: [{ name: "MenPoruzhTech" }],
//   creator: "MenPoruzhTech",
//   publisher: "MenPoruzhTech",
//   icons: {
//     icon: [
//       { url: "/favicon.ico", sizes: "any" },
//       { url: "/favicon.ico", type: "image/x-icon" }
//     ],
//     shortcut: "/favicon.ico",
//     apple: "/favicon.ico",
//   },
//   openGraph: {
//     title: "MenPoruzhTech - Innovative Technology Solutions",
//     description:
//       "Leading technology company specializing in innovative solutions, web development, mobile apps, and digital transformation services.",
//     url: "https://menporuzhtech.com",
//     siteName: "MenPoruzhTech",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "MenPoruzhTech - Innovative Technology Solutions",
//     description:
//       "Leading technology company specializing in innovative solutions, web development, mobile apps, and digital transformation services.",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   generator: "Next.js",
// }



export const metadata: Metadata = {
  title: "MenPoruzhTech | Innovative Technology Solutions",
  description:
    "MenPoruzhTech is an innovative technology company offering web development, mobile app development, SaaS solutions, and digital transformation services. Based in Coimbatore, Tamil Nadu, we empower startups and enterprises with modern, affordable, and scalable digital solutions.",
  keywords: [
    "MenPoruzhTech",
    "MenPoruzhTech Coimbatore",
    "MenPoruzh Tech",
    "MenPoruzhTech Tamil Nadu",
    "Web development company Coimbatore",
    "Mobile app development Coimbatore",
    "SaaS development India",
    "Custom software development",
    "Website design company",
    "App development Tamil Nadu",
    "Digital transformation services",
    "MERN stack development",
    "Next.js development company",
    "React development",
    "Node.js backend development",
    "Startup tech solutions",
    "Technology consulting",
    "Affordable web development",
    "Business website design",
    "Software company Coimbatore",
    "MenPoruzhTech official site"
  ],
  authors: [{ name: "MenPoruzhTech", url: "https://menporuzhtech.com" }],
  creator: "MenPoruzhTech",
  publisher: "MenPoruzhTech",
  category: "Technology, Software, Web Development, Mobile Apps",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "MenPoruzhTech | Innovative Technology Solutions",
    description:
      "MenPoruzhTech is an innovative technology company offering web development, mobile app development, SaaS solutions, and digital transformation services. Based in Coimbatore, Tamil Nadu, we empower startups and enterprises with modern, affordable, and scalable digital solutions.",
    url: "https://menporuzhtech.com",
    siteName: "MenPoruzhTech",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://menporuzhtech.com/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "MenPoruzhTech - Innovative Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MenPoruzhTech | Innovative Technology Solutions",
    description:
      "MenPoruzhTech is an innovative technology company offering web development, mobile app development, SaaS solutions, and digital transformation services. Based in Coimbatore, Tamil Nadu, we empower startups and enterprises with modern, affordable, and scalable digital solutions.",
    images: ["https://menporuzhtech.com/og-banner.jpg"],
    creator: "@MenPoruzhTech",
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
};


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
                  <FloatingThemeToggle />
                </LoadingProvider>
              </ThemeProvider>
            </Suspense>
        <Analytics />
      </body>
      
    </html>
  )
}

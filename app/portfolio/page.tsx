"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PortfolioHero } from "@/components/portfolio-hero"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { PortfolioStats } from "@/components/portfolio-stats"
import Layout from "@/components/meta/layout"

export default function PortfolioPage() {
  const portfolioMeta = {
  title: "Portfolio | MenPoruzhTech Projects & Case Studies",
  description:
    "Browse MenPoruzhTech's portfolio of custom websites, SaaS platforms, and mobile apps for startups and enterprises. See real results from our MERN stack expertise.",
  keywords:
    "project portfolio, web app portfolio, saas product showcase, software company projects, mern stack case studies, react nextjs projects, app design samples, client success stories, software portfolio website, startup project showcase, web development works, app development case study",
  url: "https://menporuzhtech.com/portfolio",
  ogImage: "https://menporuzhtech.com/Logo.png",
};

  return (
    <Layout meta={portfolioMeta}>
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Logo-inspired background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background/98 to-background/95 pointer-events-none" style={{ height: 'calc(100vh - 200px)' }} />
      <div className="fixed inset-0 bg-gradient-to-br from-teal-500/5 to-orange-500/5 pointer-events-none" style={{ height: 'calc(100vh - 200px)' }} />

      <main className="relative z-10">
        <PortfolioHero />
        <PortfolioStats />
        {/* <PortfolioGrid /> */}
      </main>

      <Footer />
    </div>
    </Layout>
  )
}

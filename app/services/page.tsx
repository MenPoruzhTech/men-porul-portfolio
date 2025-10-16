"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services-hero"
import { ServicesGrid } from "@/components/services-grid"
import { ProcessSection } from "@/components/process-section"
import { TechnologiesSection } from "@/components/technologies-section"
import Layout from "@/components/meta/layout"

export default function ServicesPage() {
  const servicesMeta = {
  title: "Services | MenPoruzhTech – Web, App & SaaS Experts",
  description:
    "MenPoruzhTech offers full-stack web dev, SaaS design, mobile apps, and cloud integration with React, Next.js, and Node.js. Transform your ideas into scalable solutions.",
  keywords:
    "web development services, saas app development, react nextjs web apps, nodejs backend services, ui ux design services, full stack software development, mern stack development company, startup product development, enterprise web solutions, ecommerce website developers, cloud integration service, api development node js, frontend development react, mobile responsive websites, cross platform app development",
  url: "https://menporuzhtech.com/services",
  ogImage: "https://menporuzhtech.com/Logo.png",
};
  return (
    <Layout meta={servicesMeta}>
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Logo-inspired background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background/98 to-background/95 pointer-events-none" style={{ height: 'calc(100vh - 200px)' }} />
      <div className="fixed inset-0 bg-gradient-to-br from-teal-500/5 to-orange-500/5 pointer-events-none" style={{ height: 'calc(100vh - 200px)' }} />

      <main className="relative z-10">
        <ServicesHero />
        <ServicesGrid />
        <ProcessSection />
        <TechnologiesSection />
      </main>

      <Footer />
    </div>
    </Layout>
  )
}

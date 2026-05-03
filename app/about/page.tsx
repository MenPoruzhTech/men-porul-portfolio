"use client"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { ProductsSection } from "@/components/products-section"
import { TeamSection } from "@/components/team-section"
import { ValuesSection } from "@/components/values-section"
import { FeaturedBlogs } from "@/components/featured-blogs"
import Layout from "@/components/meta/layout"

export default function AboutPage() {
  const aboutMeta = {
  title: "About MenPoruzhTech – Scalable Digital Builders",
  description:
    "Discover MenPoruzhTech: A Tamil Nadu-based team of full-stack experts crafting robust websites, SaaS, and apps. Join startups who've scaled with us.",
  keywords:
    "about menporuzhtech, about software development company, startup tech team, mern stack experts india, digital product agency, full stack engineers, professional web developers, app development agency, company profile menporuzhtech, web company india, software engineering team, web solutions provider",
  url: "https://menporuzhtech.com/about",
  ogImage: "https://menporuzhtech.com/Logo.png",
};
  return (
    <Layout meta={aboutMeta}>
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Logo-inspired background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background/98 to-background/95 pointer-events-none" style={{ height: 'calc(100vh - 200px)' }} />
      <div className="fixed inset-0 bg-gradient-to-br from-teal-500/5 to-orange-500/5 pointer-events-none" style={{ height: 'calc(100vh - 200px)' }} />

      <main className="relative z-10">
        <AboutHero />
        <ProductsSection />
        <FeaturedBlogs />
        <ValuesSection />
        {/* <TeamSection /> */}
      </main>

      <Footer />
    </div>
    </Layout>
  )
}

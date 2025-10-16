"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import Layout from "@/components/meta/layout"

export default function ContactPage() {
  const contactMeta = {
  title: "Contact MenPoruzhTech – Build Your Next Project",
  description:
    "Connect with MenPoruzhTech's full-stack experts for web, SaaS, or app development. Get a free quote and let's turn your vision into reality today.",
  keywords:
    "contact web development company, hire full stack developers, saas product consultation, react nextjs developer contact, software development enquiry, hire app developers india, tech partner contact, get project quote menporuzhtech, build website with nextjs, business collaboration web agency, project estimation software company",
  url: "https://menporuzhtech.com/contact",
  ogImage: "https://menporuzhtech.com/Logo.png",
};
  return (
    <Layout meta={contactMeta}>
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Logo-inspired background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background/98 to-background/95 pointer-events-none z-0" style={{ height: 'calc(100vh - 200px)' }} />
      <div className="fixed inset-0 bg-gradient-to-br from-teal-500/5 to-orange-500/5 pointer-events-none z-0" style={{ height: 'calc(100vh - 200px)' }} />

      <main className="relative z-20">
        <ContactHero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
    </Layout>
  )
}

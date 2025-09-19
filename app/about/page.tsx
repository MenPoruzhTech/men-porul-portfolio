"use client"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { TeamSection } from "@/components/team-section"
import { ValuesSection } from "@/components/values-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Logo-inspired background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background/98 to-background/95 pointer-events-none" style={{ height: 'calc(100vh - 200px)' }} />
      <div className="fixed inset-0 bg-gradient-to-br from-teal-500/5 to-orange-500/5 pointer-events-none" style={{ height: 'calc(100vh - 200px)' }} />

      <main className="relative z-10">
        <AboutHero />
        <ValuesSection />
        <TeamSection />
      </main>

      <Footer />
    </div>
  )
}

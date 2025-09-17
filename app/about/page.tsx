"use client"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { Timeline } from "@/components/timeline"
import { TeamSection } from "@/components/team-section"
import { ValuesSection } from "@/components/values-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-cyan)]/3 via-transparent to-[var(--neon-green)]/3" />
      </div>

      <main className="relative z-10">
        <AboutHero />
        <Timeline />
        <ValuesSection />
        <TeamSection />
      </main>

      <Footer />
    </div>
  )
}

"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services-hero"
import { ServicesGrid } from "@/components/services-grid"
import { ProcessSection } from "@/components/process-section"
import { TechnologiesSection } from "@/components/technologies-section"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-cyan)]/3 via-transparent to-[var(--neon-green)]/3" />
        {/* Floating geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 border border-[var(--neon-cyan)]/10 rounded-lg animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <main className="relative z-10">
        <ServicesHero />
        <ServicesGrid />
        <ProcessSection />
        <TechnologiesSection />
      </main>

      <Footer />
    </div>
  )
}

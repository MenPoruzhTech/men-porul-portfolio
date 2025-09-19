"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { IndianHeroSection } from "@/components/indian-hero-section"
import { IndianAboutSection } from "@/components/indian-about-section"
import { ComprehensiveServicesSection } from "@/components/comprehensive-services-section"
import { TechnologiesGridSection } from "@/components/technologies-grid-section"
import { AnalyticsSection } from "@/components/analytics-section"
import { FinalStatsSection } from "@/components/final-stats-section"
import { EnhancedCTASection } from "@/components/enhanced-cta-section"
import { CodeTypingAnimation } from "@/components/code-typing-animation"
import { SimpleAnimation } from "@/components/simple-animations"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Logo-inspired background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background/98 to-background/95 pointer-events-none" style={{ height: 'calc(100vh - 200px)' }} />
      <div className="fixed inset-0 bg-gradient-to-br from-teal-500/5 to-orange-500/5 pointer-events-none" style={{ height: 'calc(100vh - 200px)' }} />

      <main>
        <IndianHeroSection />
        <IndianAboutSection />
        <ComprehensiveServicesSection />
        <SimpleAnimation type="fade" delay={0.2}>
          <CodeTypingAnimation />
        </SimpleAnimation>
        <TechnologiesGridSection />
        <AnalyticsSection />
        <FinalStatsSection />
        <EnhancedCTASection />
      </main>

      <Footer />
    </div>
  )
}

"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export default function ContactPage() {
  return (
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
  )
}

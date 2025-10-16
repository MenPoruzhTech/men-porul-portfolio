"use client"

import { ArrowRight, Play, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"
import { SimpleAnimation } from "@/components/simple-animations"

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" }
]

export function EnhancedCTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-orange-500/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <div className="opacity-0 animate-fade-in-up [animation-delay:200ms]">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Ready to Transform Your </span>
            <span className="logo-text">Digital Presence?</span>
          </h2>
        </div>

        {/* Description */}
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto opacity-0 animate-fade-in-up [animation-delay:400ms]">
          Join hundreds of satisfied clients who have transformed their businesses
          with our cutting-edge technology solutions. Let’s build something amazing together.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 opacity-0 animate-fade-in-up [animation-delay:600ms]">
          {/* Start Project Button */}
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-5 font-semibold text-xl transition-all duration-300 text-white hover:opacity-90 hover:scale-105 transform overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #00CED1, #FF8C00)',
              borderRadius: '9999px'
            }}
          >
            <span>Start Your Project</span>
            <ArrowRight className="ml-3 w-6 h-6" />
          </Link>

          {/* Portfolio Button */}
          <Link
            href="/portfolio"
            className="inline-flex items-center px-10 py-5 font-semibold text-xl transition-all duration-300 border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white hover:scale-105 transform overflow-hidden"
            style={{
              borderRadius: '9999px'
            }}
          >
            <Play className="mr-3 w-6 h-6" />
            <span>View Portfolio</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
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
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-primary)]/5 via-transparent to-[var(--brand-secondary)]/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SimpleAnimation type="fade" delay={0.2}>
          <div className="text-center">
            {/* Main Heading */}
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-foreground">Ready to Transform Your </span>
              <span className="brand-text">Digital Presence?</span>
            </motion.h2>

            {/* Description */}
            <SimpleAnimation type="slide" delay={0.4} direction="up">
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Join hundreds of satisfied clients who have transformed their businesses with our cutting-edge technology solutions. Let's build something amazing together.
              </p>
            </SimpleAnimation>

            {/* CTA Buttons */}
            <SimpleAnimation type="scale" delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0 0 30px var(--brand-primary)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-10 py-5 rounded-full font-semibold text-xl transition-all duration-300 bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary)]/90"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center px-10 py-5 rounded-full font-semibold text-xl transition-all duration-300 border-2 border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-white"
                  >
                    <Play className="mr-3 w-6 h-6" />
                    <span>View Portfolio</span>
                  </Link>
                </motion.div>
              </div>
            </SimpleAnimation>

            {/* Social Media Links */}
            <SimpleAnimation type="fade" delay={0.8}>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.2,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-full glass-card hover:brand-glow-hover transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-foreground" />
                  </motion.a>
                ))}
              </div>
            </SimpleAnimation>
          </div>
        </SimpleAnimation>
      </div>
    </section>
  )
}

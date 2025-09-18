"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Code, Sparkles } from "lucide-react"
import Link from "next/link"
import { SimpleAnimation } from "@/components/simple-animations"

export function IndianHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-primary)]/5 via-transparent to-[var(--brand-secondary)]/5 animate-pulse" />
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/5 via-transparent to-[var(--brand-secondary)]/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SimpleAnimation type="fade" delay={0.2}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="brand-text">Building India's Digital Future</span>
            </h1>

            {/* Subtitle */}
            <SimpleAnimation type="slide" delay={0.4} direction="up">
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Empowering Indian businesses with cutting-edge technology solutions. From Mumbai to Bangalore, we're transforming ideas into digital reality.
              </p>
            </SimpleAnimation>

            {/* CTA Buttons */}
            <SimpleAnimation type="scale" delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0 0 20px var(--brand-primary)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary)]/90"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
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
                    className="inline-flex items-center px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-white"
                  >
                    <Play className="mr-2 w-5 h-5" />
                    <span>View Our Work</span>
                  </Link>
                </motion.div>
              </div>
            </SimpleAnimation>

            {/* Indian Tech Icons */}
            <div className="mt-16 flex justify-center space-x-8">
              {[
                { icon: Code, delay: 0.8, label: "Development" },
                { icon: Sparkles, delay: 1.0, label: "Innovation" },
                { icon: ArrowRight, delay: 1.2, label: "Growth" },
              ].map(({ icon: Icon, delay, label }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="flex flex-col items-center space-y-2 p-4 rounded-lg glass-card hover:brand-glow-hover cursor-pointer"
                >
                  <Icon className="w-8 h-8 text-[var(--brand-primary)]" />
                  <span className="text-sm text-muted-foreground">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </SimpleAnimation>
      </div>

      {/* Scroll indicator */}
      <SimpleAnimation type="fade" delay={1.0}>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 border-2 border-[var(--brand-primary)] rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-[var(--brand-primary)] rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>
      </SimpleAnimation>
    </section>
  )
}

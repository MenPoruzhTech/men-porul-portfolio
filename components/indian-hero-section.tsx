"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Code, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { SimpleAnimation } from "@/components/simple-animations"

export function IndianHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Logo-inspired Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-orange-500/10 animate-pulse" />
      </div>

      {/* Logo color pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-orange-500/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mt-25 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-left">
            <SimpleAnimation type="fade" delay={0.2}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Main Headline */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                  <span className="logo-text">Building India's Digital Future</span>
                </h1>

                {/* Subtitle */}
                <SimpleAnimation type="slide" delay={0.4} direction="up">
                  <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                   We help businesses bring their digital ideas to life using modern technology, done in a smart, accurate, and effective way.
                  </p>
                </SimpleAnimation>

                {/* CTA Buttons */}
                <SimpleAnimation type="scale" delay={0.6}>
                <div className="flex flex-row flex-wrap gap-3 items-center justify-center sm:justify-start">
  <motion.div
    whileHover={{ 
      scale: 1.05,
      y: -2,
      boxShadow: "0 0 20px rgba(0, 206, 209, 0.6), 0 0 40px rgba(0, 206, 209, 0.4)",
      borderRadius: "9999px"
    }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2 }}
    style={{ borderRadius: "9999px" }}
  >
    <Link
      href="/contact"
      className="inline-flex items-center px-4 py-2 text-sm sm:px-8 sm:py-4 sm:text-lg font-semibold transition-all duration-300 text-white"
      style={{
        background: 'linear-gradient(135deg, #00CED1, #FF8C00)',
        borderRadius: '9999px'
      }}
    >
      <span>Start Your Project</span>
      <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
    </Link>
  </motion.div>

  <motion.div
    whileHover={{ 
      scale: 1.05,
      y: -2,
      boxShadow: "0 0 20px rgba(0, 206, 209, 0.3), 0 0 40px rgba(255, 140, 0, 0.2)",
      borderRadius: "9999px"
    }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2 }}
  >
    <Link
      href="/portfolio"
      className="inline-flex items-center px-4 py-2 text-sm sm:px-8 sm:py-4 sm:text-lg font-semibold border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300"
      style={{
        borderRadius: "9999px"
      }}
    >
      <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
      <span>View Our Work</span>
    </Link>
  </motion.div>
</div>

                </SimpleAnimation>

                {/* Indian Tech Icons */}
                <div className="mt-12 flex flex-wrap gap-6">
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

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full max-w-2xl"
            >
              <Image
                src="/images/img16.png"
                alt="Technology Innovation"
                width={800}
                height={800}
                className="w-full h-auto object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>
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

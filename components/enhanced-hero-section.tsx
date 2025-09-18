"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Code, Sparkles } from "lucide-react"
import Link from "next/link"
import { useAnimation } from "@/contexts/animation-context"
import { EnhancedAnimation, TypewriterText } from "@/components/enhanced-animations"

export function EnhancedHeroSection() {
  const { isSubtle, isFlashy } = useAnimation()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon-cyan)]/10 via-transparent to-[var(--neon-green)]/10 animate-pulse" />
      </div>

      {/* Flashy animated background shapes */}
      {isFlashy && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 border border-[var(--brand-primary)]/20 rounded-full"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 30}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
          
          {/* Floating particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 bg-[var(--brand-primary)]/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 6 + (i % 3),
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <EnhancedAnimation type="fade" delay={0.2}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {isFlashy ? (
                <TypewriterText 
                  text="Building Tomorrow's Technology" 
                  className="brand-text"
                  speed={80}
                />
              ) : (
                <span className="brand-text">Building Tomorrow's Technology</span>
              )}
            </h1>

            {/* Subtitle */}
            <EnhancedAnimation type="slide" delay={0.4} direction="up">
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                {isFlashy ? (
                  <TypewriterText 
                    text="Innovative solutions that transform ideas into reality. We create digital experiences that matter." 
                    speed={30}
                  />
                ) : (
                  "Innovative solutions that transform ideas into reality. We create digital experiences that matter."
                )}
              </p>
            </EnhancedAnimation>

            {/* CTA Buttons */}
            <EnhancedAnimation type="scale" delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.div
                  whileHover={{ 
                    scale: isFlashy ? 1.1 : 1.05,
                    y: isFlashy ? -5 : -2,
                    boxShadow: isFlashy ? "0 0 30px var(--brand-primary)" : "0 0 20px var(--brand-primary)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="/contact"
                    className={`inline-flex items-center px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                      isFlashy 
                        ? "neon-gradient text-white shadow-lg hover:shadow-xl" 
                        : "bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary)]/90"
                    }`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ 
                    scale: isFlashy ? 1.1 : 1.05,
                    y: isFlashy ? -5 : -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="/portfolio"
                    className={`inline-flex items-center px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                      isFlashy
                        ? "glass-card text-foreground hover:brand-glow-hover"
                        : "border border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-white"
                    }`}
                  >
                    <Play className="mr-2 w-5 h-5" />
                    <span>View Our Work</span>
                  </Link>
                </motion.div>
              </div>
            </EnhancedAnimation>

            {/* Flashy floating icons */}
            {isFlashy && (
              <div className="mt-16 flex justify-center space-x-8">
                {[
                  { icon: Code, delay: 0.8 },
                  { icon: Sparkles, delay: 1.0 },
                  { icon: ArrowRight, delay: 1.2 },
                ].map(({ icon: Icon, delay }, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay,
                      ease: [0.68, -0.55, 0.265, 1.55],
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      transition: { duration: 0.3 }
                    }}
                    className="p-4 rounded-full glass-card hover:brand-glow-hover cursor-pointer"
                  >
                    <Icon className="w-8 h-8 text-[var(--brand-primary)]" />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </EnhancedAnimation>
      </div>

      {/* Scroll indicator */}
      <EnhancedAnimation type="fade" delay={1.0}>
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
      </EnhancedAnimation>
    </section>
  )
}

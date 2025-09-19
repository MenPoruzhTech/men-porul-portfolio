"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Globe, Zap } from "lucide-react"

export function ServicesHero() {
  return (
    <section className="pt-24 pb-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="neon-text">Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer startup-friendly technology solutions designed to help your business grow and scale efficiently. 
            From MVP development to full-scale deployment, we provide cost-effective solutions that deliver results.
          </p>
        </motion.div>

        {/* Service highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Code, label: "Web Development", count: "Growing" },
            { icon: Smartphone, label: "Mobile Apps", count: "Growing" },
            { icon: Globe, label: "Digital Solutions", count: "Growing" },
            { icon: Zap, label: "Integrations", count: "Growing" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="glass-card rounded-xl p-6 glow-hover">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg neon-gradient mb-3 mx-auto">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold neon-text mb-1">{item.count}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

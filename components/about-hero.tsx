"use client"

import { motion } from "framer-motion"
import { Users, Target, Lightbulb } from "lucide-react"

export function AboutHero() {
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
            About <span className="neon-text">MenPoruzhTech</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a passionate team of innovators, developers, and designers committed to transforming the digital
            landscape through cutting-edge technology solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Target,
              title: "Our Mission",
              description:
                "To empower businesses with innovative technology solutions that drive growth, efficiency, and digital transformation.",
            },
            {
              icon: Lightbulb,
              title: "Our Vision",
              description:
                "To be the leading technology partner that shapes the future of digital experiences and business innovation.",
            },
            {
              icon: Users,
              title: "Our Values",
              description:
                "Innovation, integrity, collaboration, and excellence guide everything we do in our pursuit of technological advancement.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="glass-card rounded-xl p-6 glow-hover h-full">
                <div className="flex items-center justify-center w-16 h-16 rounded-full neon-gradient mb-4 mx-auto">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

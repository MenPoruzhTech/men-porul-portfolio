"use client"

import { motion } from "framer-motion"
import { Eye, Code, Award, Users } from "lucide-react"

export function PortfolioHero() {
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
            Our <span className="neon-text">Portfolio</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our growing portfolio of innovative projects that showcase our startup journey and expertise in creating 
            exceptional digital experiences with modern technology solutions.
          </p>
        </motion.div>

        {/* Portfolio highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Eye, label: "Projects Delivered", count: "Growing" },
            { icon: Code, label: "Technologies Used", count: "15+" },
            { icon: Award, label: "Team Members", count: "8+" },
            { icon: Users, label: "Happy Clients", count: "Growing" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
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

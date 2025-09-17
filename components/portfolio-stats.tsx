"use client"

import { motion } from "framer-motion"
import { BarChart, TrendingUp, Globe, Zap } from "lucide-react"

const stats = [
  {
    icon: BarChart,
    title: "Performance Boost",
    value: "300%",
    description: "Average performance improvement across all projects",
  },
  {
    icon: TrendingUp,
    title: "User Engagement",
    value: "85%",
    description: "Increase in user engagement and retention rates",
  },
  {
    icon: Globe,
    title: "Global Reach",
    value: "25+",
    description: "Countries where our solutions are actively used",
  },
  {
    icon: Zap,
    title: "Load Time",
    value: "<2s",
    description: "Average page load time across all web applications",
  },
]

export function PortfolioStats() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Project <span className="neon-text">Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our projects don't just look good – they deliver measurable results and drive real business value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, rotateY: 5 }}
              className="text-center perspective-1000"
            >
              <div className="glass-card rounded-xl p-6 glow-hover transform-gpu">
                <div className="flex items-center justify-center w-16 h-16 rounded-full neon-gradient mb-4 mx-auto">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold neon-text mb-2">{stat.value}</div>
                <h3 className="text-lg font-semibold mb-2">{stat.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

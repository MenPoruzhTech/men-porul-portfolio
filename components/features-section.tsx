"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Globe, Zap, Shield, Users } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices for optimal performance.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
  },
  {
    icon: Globe,
    title: "Digital Solutions",
    description: "Comprehensive digital transformation services to modernize your business operations.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Lightning-fast applications optimized for speed, scalability, and user engagement.",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Enterprise-grade security measures to protect your data and user information.",
  },
  {
    icon: Users,
    title: "Support",
    description: "24/7 dedicated support and maintenance to ensure your applications run smoothly.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose <span className="neon-text">MenPoruzhTech</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We combine cutting-edge technology with creative innovation to deliver solutions that exceed expectations
            and drive real business results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="glass-card rounded-xl p-6 h-full glow-hover">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg neon-gradient mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--neon-cyan)] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

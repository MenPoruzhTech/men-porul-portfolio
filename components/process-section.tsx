"use client"

import { motion } from "framer-motion"
import { MessageSquare, Lightbulb, Code, Rocket, CheckCircle, Users } from "lucide-react"

const processSteps = [
  {
    icon: MessageSquare,
    title: "Discovery & Consultation",
    description: "We start by understanding your business needs, goals, and challenges through detailed consultation.",
    duration: "1-2 weeks",
  },
  {
    icon: Lightbulb,
    title: "Strategy & Planning",
    description: "Our team develops a comprehensive strategy and project plan tailored to your requirements.",
    duration: "1 week",
  },
  {
    icon: Code,
    title: "Development & Design",
    description: "We bring your vision to life with clean code, beautiful design, and robust functionality.",
    duration: "4-12 weeks",
  },
  {
    icon: CheckCircle,
    title: "Testing & Quality Assurance",
    description: "Rigorous testing ensures your solution is bug-free, secure, and performs optimally.",
    duration: "1-2 weeks",
  },
  {
    icon: Rocket,
    title: "Launch & Deployment",
    description: "We handle the deployment process and ensure a smooth launch of your solution.",
    duration: "1 week",
  },
  {
    icon: Users,
    title: "Support & Maintenance",
    description: "Ongoing support and maintenance to keep your solution running smoothly and up-to-date.",
    duration: "Ongoing",
  },
]

export function ProcessSection() {
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
            Our <span className="neon-text">Process</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We follow a proven methodology to ensure successful project delivery and exceptional results.
          </p>
        </motion.div>

        <div className="relative">
          {/* Process line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-green)] opacity-30 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative"
              >
                <div className="glass-card rounded-xl p-6 glow-hover text-center">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full neon-gradient flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-full neon-gradient mb-4 mx-auto mt-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full glass-card border border-[var(--neon-cyan)]/30">
                    <span className="text-sm text-[var(--neon-cyan)] font-medium">{step.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

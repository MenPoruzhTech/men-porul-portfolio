"use client"

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
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="neon-text">Process</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We follow a proven methodology to ensure successful project delivery and exceptional results.
          </p>
        </div>

        <div className="relative">
          {/* Process line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-green)] opacity-30 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="transition-transform duration-300 hover:-translate-y-1 hover:scale-102"
              >
                <div className="glass-card rounded-xl p-6 glow-hover text-center flex flex-col items-center">
                  {/* Step number */}
                  <div className="w-10 h-10 rounded-full neon-gradient flex items-center justify-center text-white font-bold text-sm mb-4">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-full neon-gradient mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full glass-card border border-[var(--neon-cyan)]/30">
                    <span className="text-sm text-[var(--neon-cyan)] font-medium">{step.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

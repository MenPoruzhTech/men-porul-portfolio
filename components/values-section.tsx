"use client"

import { Heart, Shield, Lightbulb, Users, Zap, Target } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
    delay: "200ms"
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We build trust through transparency, honesty, and ethical business practices in all our interactions.",
    delay: "300ms"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and foster strong partnerships with our clients and colleagues.",
    delay: "400ms"
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for perfection in every project, delivering quality that exceeds expectations.",
    delay: "500ms"
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We love what we do and bring enthusiasm and dedication to every challenge we tackle.",
    delay: "600ms"
  },
  {
    icon: Zap,
    title: "Agility",
    description: "We adapt quickly to change and embrace flexible methodologies to deliver results efficiently.",
    delay: "700ms"
  },
]

export function ValuesSection() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up [animation-delay:200ms]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our Core <span className="neon-text">Values</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            These fundamental principles guide our decisions, shape our culture, and define how we work with our clients
            and each other.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className={`opacity-0 animate-fade-in-up [animation-delay:${value.delay}] group transition-transform duration-300 hover:-translate-y-2`}
            >
              <div className="glass-card rounded-xl p-6 h-full glow-hover text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full neon-gradient mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--neon-cyan)] transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

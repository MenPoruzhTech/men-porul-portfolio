"use client"

import { Eye, Code, Award, Users } from "lucide-react"

const portfolioHighlights = [
  { icon: Eye, label: "Projects Delivered", count: "Growing" },
  { icon: Code, label: "Technologies Used", count: "15+" },
  { icon: Award, label: "Team Members", count: "8+" },
  { icon: Users, label: "Happy Clients", count: "Growing" },
]

export function PortfolioHero() {
  return (
    <section className="pt-24 pb-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="neon-text">Portfolio</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our growing portfolio of innovative projects that showcase our startup journey and expertise in creating 
            exceptional digital experiences with modern technology solutions.
          </p>
        </div>

        {/* Portfolio Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {portfolioHighlights.map((item) => (
            <div
              key={item.label}
              className="text-center transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
            >
              <div className="glass-card rounded-xl p-6 glow-hover">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg neon-gradient mb-3 mx-auto">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold neon-text mb-1">{item.count}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

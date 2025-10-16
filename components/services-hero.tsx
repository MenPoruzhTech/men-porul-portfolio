"use client"

import { Code, Smartphone, Globe, Zap } from "lucide-react"
import { useState, useEffect } from "react"

export function ServicesHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const services = [
    { icon: Code, label: "Web Development", count: "Growing" },
    { icon: Smartphone, label: "Mobile Apps", count: "Growing" },
    { icon: Globe, label: "Digital Solutions", count: "Growing" },
    { icon: Zap, label: "Integrations", count: "Growing" },
  ]

  return (
    <section className="pt-24 pb-16 bg-background transition-all duration-700 ease-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="neon-text">Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer startup-friendly technology solutions designed to help your business grow and scale efficiently. 
            From MVP development to full-scale deployment, we provide cost-effective solutions that deliver results.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <div
              key={item.label}
              className={`text-center transform transition-all duration-700 delay-[${index * 100}ms] ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <div className="glass-card rounded-xl p-6 glow-hover hover:-translate-y-2 hover:scale-[1.03] transition-transform duration-300">
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

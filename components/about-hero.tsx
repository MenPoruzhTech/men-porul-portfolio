"use client"

import { Users, Target, Lightbulb } from "lucide-react"
import { useState, useEffect } from "react"

export function AboutHero() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className="pt-24 pb-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div
          className="text-center mb-16 opacity-0 animate-fade-in-up [animation-delay:200ms]"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="neon-text">MenPoruzhTech</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a dynamic startup team of passionate innovators, developers, and designers building the future of technology. 
            As a young company, we bring fresh perspectives and agile solutions to every project.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Target,
              title: "Our Mission",
              description:
                "To empower startups and growing businesses with innovative, cost-effective technology solutions that scale with their growth.",
              delay: "300ms"
            },
            {
              icon: Lightbulb,
              title: "Our Vision",
              description:
                "To become the go-to technology partner for emerging businesses, helping them compete with established players through smart tech solutions.",
              delay: "400ms"
            },
            {
              icon: Users,
              title: "Our Values",
              description:
                "Agility, innovation, transparency, and partnership guide our approach as we grow alongside our clients in the startup ecosystem.",
              delay: "500ms"
            },
          ].map((item) => (
            <div
              key={item.title}
              className={`text-center opacity-0 animate-fade-in-up [animation-delay:${item.delay}]`}
            >
              <div className="glass-card rounded-xl p-6 glow-hover h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,206,209,0.3)]">
                <div className="flex items-center justify-center w-16 h-16 rounded-full neon-gradient mb-4 mx-auto">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

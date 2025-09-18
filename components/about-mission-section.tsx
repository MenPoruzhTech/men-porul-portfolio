"use client"

import { motion } from "framer-motion"
import { Target, Users, Lightbulb, Award, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useAnimation } from "@/contexts/animation-context"
import { EnhancedAnimation, StaggeredEnhanced, TypewriterText } from "@/components/enhanced-animations"

const missionPoints = [
  {
    icon: Target,
    title: "Our Vision",
    description: "To be the leading technology partner that transforms innovative ideas into digital reality.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Our Mission",
    description: "Empowering businesses with cutting-edge technology solutions that drive growth and innovation.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Lightbulb,
    title: "Our Values",
    description: "Innovation, excellence, and client success are at the heart of everything we do.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Award,
    title: "Our Promise",
    description: "Delivering exceptional results that exceed expectations and create lasting impact.",
    color: "from-orange-500 to-red-500"
  }
]

const timeline = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Started with a vision to revolutionize technology solutions",
    icon: "🚀"
  },
  {
    year: "2021",
    title: "First Major Project",
    description: "Delivered our first enterprise-level solution",
    icon: "💡"
  },
  {
    year: "2022",
    title: "Team Expansion",
    description: "Grew to 20+ talented professionals",
    icon: "👥"
  },
  {
    year: "2023",
    title: "AI Integration",
    description: "Launched AI-powered solutions for clients",
    icon: "🤖"
  },
  {
    year: "2024",
    title: "Global Reach",
    description: "Expanded services to international markets",
    icon: "🌍"
  }
]

export function AboutMissionSection() {
  const { isSubtle, isFlashy } = useAnimation()

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <EnhancedAnimation type="fade" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold brand-text mb-4">
              {isFlashy ? (
                <TypewriterText text="About MenPoruzhTech" speed={60} />
              ) : (
                "About MenPoruzhTech"
              )}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {isFlashy ? (
                <TypewriterText 
                  text="We're passionate about creating technology solutions that make a difference. Our journey is built on innovation, excellence, and unwavering commitment to our clients' success." 
                  speed={25}
                />
              ) : (
                "We're passionate about creating technology solutions that make a difference. Our journey is built on innovation, excellence, and unwavering commitment to our clients' success."
              )}
            </p>
          </div>
        </EnhancedAnimation>

        {/* Mission Points Grid */}
        <StaggeredEnhanced
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          staggerDelay={0.1}
          type="scale"
        >
          {missionPoints.map((point, index) => (
            <motion.div
              key={point.title}
              whileHover={{ 
                y: isFlashy ? -10 : -5,
                scale: isFlashy ? 1.05 : 1.02,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="glass-card p-6 rounded-xl hover:brand-glow-hover transition-all duration-300 h-full">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className={`p-4 rounded-full bg-gradient-to-r ${point.color} mb-4`}
                    whileHover={{ 
                      rotate: isFlashy ? 360 : 0,
                      scale: isFlashy ? 1.2 : 1.1,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <point.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:brand-text transition-colors">
                    {point.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggeredEnhanced>

        {/* Animated Timeline */}
        <EnhancedAnimation type="fade" delay={0.4}>
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center brand-text mb-12">
              {isFlashy ? (
                <TypewriterText text="Our Journey" speed={50} />
              ) : (
                "Our Journey"
              )}
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[var(--brand-primary)] to-[var(--brand-secondary)] rounded-full" />
              
              {/* Timeline items */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.2,
                      ease: isFlashy ? [0.68, -0.55, 0.265, 1.55] : "easeOut"
                    }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <motion.div
                        whileHover={{ 
                          scale: isFlashy ? 1.05 : 1.02,
                          y: isFlashy ? -5 : -2
                        }}
                        className="glass-card p-6 rounded-xl hover:brand-glow-hover transition-all duration-300"
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <span className="text-2xl">{item.icon}</span>
                          <span className="text-sm font-medium text-[var(--brand-primary)]">
                            {item.year}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </motion.div>
                    </div>
                    
                    {/* Timeline dot */}
                    <motion.div
                      className="relative z-10 w-4 h-4 bg-[var(--brand-primary)] rounded-full border-4 border-background"
                      whileHover={{ 
                        scale: isFlashy ? 1.5 : 1.2,
                        boxShadow: isFlashy ? "0 0 20px var(--brand-primary)" : "0 0 10px var(--brand-primary)"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </EnhancedAnimation>

        {/* Call to Action */}
        <EnhancedAnimation type="scale" delay={0.6}>
          <div className="text-center">
            <motion.div
              whileHover={{ 
                scale: isFlashy ? 1.05 : 1.02,
                y: isFlashy ? -5 : -2
              }}
              className="inline-block"
            >
              <Link
                href="/about"
                className={`inline-flex items-center px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                  isFlashy
                    ? "neon-gradient text-white shadow-lg hover:shadow-xl"
                    : "bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary)]/90"
                }`}
              >
                <span>Learn More About Us</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </EnhancedAnimation>
      </div>
    </section>
  )
}

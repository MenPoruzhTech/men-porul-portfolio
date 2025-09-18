"use client"

import { motion } from "framer-motion"
import { Target, Users, Lightbulb, Award, ArrowRight, MapPin, Globe, Building } from "lucide-react"
import Link from "next/link"
import { SimpleAnimation, StaggeredSimple } from "@/components/simple-animations"

const missionPoints = [
  {
    icon: Target,
    title: "Our Vision",
    description: "To be India's leading technology partner, driving digital transformation across the subcontinent.",
    color: "from-[var(--brand-primary)] to-[var(--brand-secondary)]"
  },
  {
    icon: Users,
    title: "Our Mission",
    description: "Empowering Indian businesses with world-class technology solutions that scale globally.",
    color: "from-[var(--brand-secondary)] to-[var(--brand-accent)]"
  },
  {
    icon: Lightbulb,
    title: "Our Values",
    description: "Innovation, excellence, and commitment to India's technological advancement.",
    color: "from-[var(--brand-accent)] to-[var(--brand-highlight)]"
  },
  {
    icon: Award,
    title: "Our Promise",
    description: "Delivering exceptional results that exceed expectations and create lasting impact.",
    color: "from-[var(--brand-highlight)] to-[var(--brand-primary)]"
  }
]

const indianOffices = [
  {
    city: "Mumbai",
    state: "Maharashtra",
    icon: Building,
    description: "Our headquarters in the financial capital of India"
  },
  {
    city: "Bangalore",
    state: "Karnataka", 
    icon: Globe,
    description: "Tech hub office in India's Silicon Valley"
  },
  {
    city: "Delhi",
    state: "NCR",
    icon: MapPin,
    description: "Strategic presence in the national capital region"
  }
]

const timeline = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Started with a vision to revolutionize technology solutions in India",
    icon: "🚀"
  },
  {
    year: "2021",
    title: "First Major Project",
    description: "Delivered our first enterprise-level solution for an Indian startup",
    icon: "💡"
  },
  {
    year: "2022",
    title: "Team Expansion",
    description: "Grew to 50+ talented Indian professionals across three cities",
    icon: "👥"
  },
  {
    year: "2023",
    title: "AI Integration",
    description: "Launched AI-powered solutions for Indian businesses",
    icon: "🤖"
  },
  {
    year: "2024",
    title: "Global Reach",
    description: "Expanded services to serve Indian companies going global",
    icon: "🌍"
  }
]

export function IndianAboutSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SimpleAnimation type="fade" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold brand-text mb-4">
              About MenPoruzhTech
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're passionate about creating technology solutions that make a difference in India. Our journey is built on innovation, excellence, and unwavering commitment to India's digital transformation.
            </p>
          </div>
        </SimpleAnimation>

        {/* Mission Points Grid */}
        <StaggeredSimple
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          staggerDelay={0.1}
          type="scale"
        >
          {missionPoints.map((point, index) => (
            <motion.div
              key={point.title}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
            <div className="glass-card p-6 rounded-xl hover:brand-glow-hover transition-all duration-300 h-full">
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className={`p-4 rounded-full bg-gradient-to-r ${point.color} mb-4`}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.5 }
                  }}
                >
                  <point.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:brand-text transition-colors">
                  {point.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {point.description}
                </p>
              </div>
            </div>
            </motion.div>
          ))}
        </StaggeredSimple>

        {/* Indian Offices */}
        <SimpleAnimation type="fade" delay={0.4}>
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center brand-text mb-12">
              Our Indian Presence
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {indianOffices.map((office, index) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02
                  }}
                  className="glass-card p-6 rounded-xl hover:brand-glow-hover transition-all duration-300 text-center"
                >
                  <motion.div
                    className="p-3 rounded-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] mb-4 inline-block"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <office.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h4 className="text-xl font-semibold mb-2 text-foreground">
                    {office.city}
                  </h4>
                  <p className="text-[var(--brand-primary)] font-medium mb-2">
                    {office.state}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {office.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </SimpleAnimation>

        {/* Animated Timeline */}
        <SimpleAnimation type="fade" delay={0.6}>
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center brand-text mb-12">
              Our Journey
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
                      ease: "easeOut"
                    }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <motion.div
                        whileHover={{ 
                          scale: 1.05,
                          y: -5
                        }}
                        className="glass-card p-6 rounded-xl hover:brand-glow-hover transition-all duration-300"
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <span className="text-2xl">{item.icon}</span>
                          <span className="text-sm font-medium text-[var(--brand-primary)]">
                            {item.year}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </motion.div>
                    </div>
                    
                    {/* Timeline dot */}
                    <motion.div
                      className="relative z-10 w-4 h-4 bg-[var(--brand-primary)] rounded-full border-4 border-background"
                      whileHover={{ 
                        scale: 1.5,
                        boxShadow: "0 0 20px var(--brand-primary)"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </SimpleAnimation>

        {/* Call to Action */}
        <SimpleAnimation type="scale" delay={0.8}>
          <div className="text-center">
            <motion.div
              whileHover={{ 
                scale: 1.02,
                y: -2
              }}
              className="inline-block"
            >
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary)]/90"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </SimpleAnimation>
      </div>
    </section>
  )
}

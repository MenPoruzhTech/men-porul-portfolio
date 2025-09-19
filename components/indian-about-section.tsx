"use client"

import { motion } from "framer-motion"
import { Target, Users, Lightbulb, Award, ArrowRight, MapPin, Globe, Building } from "lucide-react"
import Link from "next/link"
import { SimpleAnimation } from "@/components/simple-animations"
import { MobileResponsiveStaggered } from "@/components/mobile-responsive-animation"

const missionPoints = [
  {
    icon: Target,
    title: "Our Vision",
    description: "To become India's most trusted startup technology partner, helping emerging businesses compete globally.",
    color: "from-[var(--brand-primary)] to-[var(--brand-secondary)]"
  },
  {
    icon: Users,
    title: "Our Mission",
    description: "Empowering Indian startups and growing businesses with affordable, scalable technology solutions.",
    color: "from-[var(--brand-secondary)] to-[var(--brand-accent)]"
  },
  {
    icon: Lightbulb,
    title: "Our Values",
    description: "Agility, innovation, and partnership - growing together with our clients in the startup ecosystem.",
    color: "from-[var(--brand-accent)] to-[var(--brand-highlight)]"
  },
  {
    icon: Award,
    title: "Our Promise",
    description: "Delivering startup-friendly solutions that provide maximum value and growth potential.",
    color: "from-[var(--brand-highlight)] to-[var(--brand-primary)]"
  }
]

const indianOffices = [
  {
    city: "Coimbatore",
    state: "Tamil Nadu",
    icon: Building,
    description: "Our main development center in the heart of Tamil Nadu"
  },
  {
    city: "Remote Team",
    state: "Pan India", 
    icon: Globe,
    description: "Distributed team working across India's tech cities"
  },
  {
    city: "Future Expansion",
    state: "Coming Soon",
    icon: MapPin,
    description: "Planning strategic expansion to major Indian cities"
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
              We're a passionate startup team creating innovative technology solutions for India's growing digital economy. 
              As a young company, we bring fresh energy, agile development, and cost-effective solutions to help businesses thrive.
            </p>
          </div>
        </SimpleAnimation>

        {/* Mission Points Grid */}
        <MobileResponsiveStaggered
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
        </MobileResponsiveStaggered>

        {/* Indian Offices */}
        <SimpleAnimation type="fade" delay={0.4}>
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center brand-text mb-12">
              Our Growing Presence
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {indianOffices.map((office, index) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
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
                className="inline-flex items-center px-8 py-4 font-semibold text-lg transition-all duration-300 text-white hover:opacity-90 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #00CED1, #FF8C00)',
                  borderRadius: '9999px'
                }}
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

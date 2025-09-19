"use client"

import { motion } from "framer-motion"
import { 
  Code, 
  Smartphone, 
  Globe, 
  ShoppingCart, 
  Shield, 
  Wrench,
  Cloud,
  Database,
  Zap,
  Users,
  BarChart3,
  Settings
} from "lucide-react"
import { SimpleAnimation, StaggeredSimple } from "@/components/simple-animations"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices for optimal performance.",
    color: "from-[var(--brand-primary)] to-[var(--brand-secondary)]"
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    color: "from-[var(--brand-secondary)] to-[var(--brand-accent)]"
  },
  {
    icon: Globe,
    title: "Digital Solutions",
    description: "Comprehensive digital transformation solutions to modernize your business operations.",
    color: "from-[var(--brand-accent)] to-[var(--brand-highlight)]"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Full-featured e-commerce platforms with secure payment processing and inventory management.",
    color: "from-[var(--brand-highlight)] to-[var(--brand-primary)]"
  },
  {
    icon: Shield,
    title: "Security",
    description: "Advanced cybersecurity solutions to protect your digital assets and sensitive data.",
    color: "from-[var(--brand-primary)] to-[var(--brand-accent)]"
  },
  {
    icon: Wrench,
    title: "Support & Maintenance",
    description: "24/7 technical support and ongoing maintenance to keep your systems running smoothly.",
    color: "from-[var(--brand-secondary)] to-[var(--brand-highlight)]"
  }
]

export function ComprehensiveServicesSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SimpleAnimation type="fade" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold brand-text mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs. From concept to deployment, we've got you covered.
            </p>
          </div>
        </SimpleAnimation>

        {/* Services Grid */}
        <StaggeredSimple
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.1}
          type="scale"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="glass-card p-8 rounded-xl hover:brand-glow-hover transition-all duration-300 h-full">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className={`p-4 rounded-full bg-gradient-to-r ${service.color} mb-6`}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:brand-text transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggeredSimple>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  Code,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Shield,
  Zap,
  Palette,
  Search,
  BarChart,
  Headphones,
  Cog,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "web-development",
    icon: Code,
    title: "Web Development",
    shortDescription: "Custom web applications built with modern technologies",
    fullDescription:
      "We create responsive, scalable web applications using the latest frameworks like React, Next.js, and Vue.js. Our solutions are optimized for performance, SEO, and user experience.",
    features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Modern Frameworks"],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    price: "Starting from $5,000",
  },
  {
    id: "mobile-development",
    icon: Smartphone,
    title: "Mobile App Development",
    shortDescription: "Native and cross-platform mobile applications",
    fullDescription:
      "Build powerful mobile apps for iOS and Android using React Native, Flutter, or native technologies. We focus on creating intuitive user experiences and robust functionality.",
    features: ["Cross-platform", "Native Performance", "App Store Optimization", "Push Notifications"],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    price: "Starting from $8,000",
  },
  {
    id: "digital-solutions",
    icon: Globe,
    title: "Digital Transformation",
    shortDescription: "Comprehensive digital transformation services",
    fullDescription:
      "Transform your business processes with our digital solutions. We help modernize legacy systems, implement automation, and create digital workflows.",
    features: ["Process Automation", "Legacy Modernization", "Digital Workflows", "System Integration"],
    technologies: ["APIs", "Microservices", "Cloud Platforms", "Automation Tools"],
    price: "Custom Pricing",
  },
  {
    id: "database-solutions",
    icon: Database,
    title: "Database Solutions",
    shortDescription: "Scalable database design and optimization",
    fullDescription:
      "Design and optimize databases for maximum performance and scalability. We work with SQL and NoSQL databases to meet your specific requirements.",
    features: ["Database Design", "Performance Optimization", "Data Migration", "Backup Solutions"],
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
    price: "Starting from $3,000",
  },
  {
    id: "cloud-services",
    icon: Cloud,
    title: "Cloud Services",
    shortDescription: "Cloud infrastructure and deployment solutions",
    fullDescription:
      "Migrate to the cloud or optimize your existing cloud infrastructure. We provide deployment, scaling, and maintenance services for major cloud platforms.",
    features: ["Cloud Migration", "Auto Scaling", "DevOps", "Monitoring"],
    technologies: ["AWS", "Google Cloud", "Azure", "Docker"],
    price: "Starting from $2,000",
  },
  {
    id: "security",
    icon: Shield,
    title: "Security Solutions",
    shortDescription: "Comprehensive cybersecurity and data protection",
    fullDescription:
      "Protect your applications and data with our security solutions. We implement best practices for authentication, authorization, and data encryption.",
    features: ["Security Audits", "Penetration Testing", "Data Encryption", "Compliance"],
    technologies: ["OAuth", "JWT", "SSL/TLS", "Security Frameworks"],
    price: "Starting from $4,000",
  },
  {
    id: "performance",
    icon: Zap,
    title: "Performance Optimization",
    shortDescription: "Speed up your applications and websites",
    fullDescription:
      "Optimize your applications for maximum speed and efficiency. We analyze performance bottlenecks and implement solutions to improve user experience.",
    features: ["Speed Optimization", "Caching Strategies", "CDN Setup", "Code Optimization"],
    technologies: ["CDNs", "Caching", "Performance Tools", "Monitoring"],
    price: "Starting from $2,500",
  },
  {
    id: "ui-ux",
    icon: Palette,
    title: "UI/UX Design",
    shortDescription: "Beautiful and intuitive user interface design",
    fullDescription:
      "Create stunning user interfaces and experiences that engage your users. Our design process focuses on usability, accessibility, and visual appeal.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
    price: "Starting from $3,500",
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO & Marketing",
    shortDescription: "Search engine optimization and digital marketing",
    fullDescription:
      "Improve your online visibility with our SEO and digital marketing services. We help you rank higher in search results and reach your target audience.",
    features: ["Keyword Research", "On-page SEO", "Content Strategy", "Analytics"],
    technologies: ["Google Analytics", "SEO Tools", "Content Management", "Social Media"],
    price: "Starting from $1,500",
  },
  {
    id: "analytics",
    icon: BarChart,
    title: "Analytics & Insights",
    shortDescription: "Data analytics and business intelligence solutions",
    fullDescription:
      "Turn your data into actionable insights with our analytics solutions. We help you track performance, understand user behavior, and make data-driven decisions.",
    features: ["Data Visualization", "Custom Dashboards", "Reporting", "Predictive Analytics"],
    technologies: ["Google Analytics", "Tableau", "Power BI", "Custom Solutions"],
    price: "Starting from $4,500",
  },
  {
    id: "support",
    icon: Headphones,
    title: "Support & Maintenance",
    shortDescription: "Ongoing support and maintenance services",
    fullDescription:
      "Keep your applications running smoothly with our support and maintenance services. We provide 24/7 monitoring, updates, and technical support.",
    features: ["24/7 Monitoring", "Regular Updates", "Bug Fixes", "Technical Support"],
    technologies: ["Monitoring Tools", "Support Systems", "Update Management", "Documentation"],
    price: "Starting from $1,000/month",
  },
  {
    id: "consulting",
    icon: Cog,
    title: "Technology Consulting",
    shortDescription: "Strategic technology consulting and planning",
    fullDescription:
      "Get expert advice on technology strategy, architecture, and implementation. We help you make informed decisions about your technology investments.",
    features: ["Technology Strategy", "Architecture Planning", "Code Reviews", "Best Practices"],
    technologies: ["Various Technologies", "Industry Standards", "Best Practices", "Documentation"],
    price: "Starting from $200/hour",
  },
]

export function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What We <span className="neon-text">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology services tailored to meet your business needs and drive digital transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isSelected={selectedService === service.id}
              onSelect={() => setSelectedService(selectedService === service.id ? null : service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isSelected,
  onSelect,
}: {
  service: (typeof services)[0]
  index: number
  isSelected: boolean
  onSelect: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
      className="group perspective-1000"
    >
      <div
        className={`glass-card rounded-xl p-6 glow-hover cursor-pointer transition-all duration-500 transform-gpu ${
          isSelected ? "scale-105 shadow-2xl" : ""
        }`}
        onClick={onSelect}
      >
        {/* Service Icon and Title */}
        <div className="flex items-center mb-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg neon-gradient mr-4 group-hover:scale-110 transition-transform duration-300">
            <service.icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold group-hover:text-[var(--neon-cyan)] transition-colors">
              {service.title}
            </h3>
            <p className="text-sm text-[var(--neon-cyan)] font-medium">{service.price}</p>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-muted-foreground mb-4 leading-relaxed">{service.shortDescription}</p>

        {/* Expandable Content */}
        <motion.div
          initial={false}
          animate={{ height: isSelected ? "auto" : 0, opacity: isSelected ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-4 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.fullDescription}</p>

            {/* Features */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2 text-[var(--neon-cyan)]">Key Features:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon-cyan)] mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2 text-[var(--neon-cyan)]">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-full glass-card border border-[var(--neon-cyan)]/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Button className="w-full neon-gradient text-white font-semibold glow-hover">Get Started</Button>
          </div>
        </motion.div>

        {/* Expand/Collapse Indicator */}
        <div className="flex justify-center mt-4">
          <motion.div
            animate={{ rotate: isSelected ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-6 flex items-center justify-center rounded-full glass-card"
          >
            <div className="w-2 h-2 border-r-2 border-b-2 border-[var(--neon-cyan)] transform rotate-45" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

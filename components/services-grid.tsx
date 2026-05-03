"use client"

import { useState, useEffect } from "react"
import {
  Code, Smartphone, Globe, Database, Cloud, Shield, Zap,
  Palette, Search, Headphones, Cog, ChevronDown, Brain
} from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "web-development",
    icon: Code,
    title: "Web Development",
    shortDescription: "Custom web applications built with modern technologies.",
    fullDescription:
      "We create responsive, scalable web applications using frameworks like React and Next.js — optimized for speed, SEO, and great UX.",
    features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Modern Frameworks"],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "mobile-development",
    icon: Smartphone,
    title: "Mobile App Development",
    shortDescription: "Native and cross-platform mobile applications.",
    fullDescription:
      "Build robust mobile apps for iOS and Android using React Native or Flutter. We ensure smooth performance and engaging design.",
    features: ["Cross-platform", "Native Performance", "App Store Optimization", "Push Notifications"],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    id: "digital-solutions",
    icon: Globe,
    title: "Digital Transformation",
    shortDescription: "Comprehensive digital transformation services.",
    fullDescription:
      "We help businesses modernize systems, automate workflows, and integrate cloud technologies for digital growth.",
    features: ["Process Automation", "Legacy Modernization", "Digital Workflows", "System Integration"],
    technologies: ["APIs", "Microservices", "Cloud Platforms", "Automation Tools"],
  },
  {
    id: "database-solutions",
    icon: Database,
    title: "Database Solutions",
    shortDescription: "Scalable database design and optimization.",
    fullDescription:
      "We design and optimize databases for performance, reliability, and scalability — from PostgreSQL to MongoDB.",
    features: ["Database Design", "Optimization", "Data Migration", "Backup Solutions"],
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    id: "cloud-services",
    icon: Cloud,
    title: "Cloud Services",
    shortDescription: "Cloud infrastructure and deployment solutions.",
    fullDescription:
      "We help you migrate, deploy, and scale on the cloud using AWS, Azure, and GCP — with strong DevOps practices.",
    features: ["Cloud Migration", "Auto Scaling", "DevOps", "Monitoring"],
    technologies: ["AWS", "Google Cloud", "Azure", "Docker"],
  },
  {
    id: "security",
    icon: Shield,
    title: "Security Solutions",
    shortDescription: "Comprehensive cybersecurity and data protection.",
    fullDescription:
      "Secure your systems and data with encryption, authentication, and penetration testing best practices.",
    features: ["Security Audits", "Penetration Testing", "Data Encryption", "Compliance"],
    technologies: ["OAuth", "JWT", "SSL/TLS", "Security Frameworks"],
  },
  {
    id: "performance",
    icon: Zap,
    title: "Performance Optimization",
    shortDescription: "Speed up your applications and websites.",
    fullDescription:
      "We identify performance bottlenecks and optimize your frontend, backend, and hosting infrastructure.",
    features: ["Speed Optimization", "Caching", "CDN Setup", "Code Optimization"],
    technologies: ["CDNs", "Caching", "Monitoring Tools", "Profilers"],
  },
  {
    id: "ui-ux",
    icon: Palette,
    title: "UI/UX Design",
    shortDescription: "Beautiful and intuitive user interface design.",
    fullDescription:
      "Our designers craft stunning, accessible, and user-focused designs that elevate user experience.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO & Marketing",
    shortDescription: "Search engine optimization and digital marketing.",
    fullDescription:
      "We help your brand stand out with strategic SEO and marketing campaigns that deliver measurable results.",
    features: ["Keyword Research", "On-page SEO", "Content Strategy", "Social Media"],
    technologies: ["Google Analytics", "SEO Tools", "CMS Platforms", "Social Media"],
  },
  {
    id: "support",
    icon: Headphones,
    title: "Support & Maintenance",
    shortDescription: "Ongoing support and maintenance services.",
    fullDescription:
      "We provide continuous monitoring, updates, and technical assistance to ensure smooth operation.",
    features: ["24/7 Monitoring", "Regular Updates", "Bug Fixes", "Technical Support"],
    technologies: ["Monitoring Tools", "Support Systems", "Update Management", "Documentation"],
  },
  {
    id: "consulting",
    icon: Cog,
    title: "Technology Consulting",
    shortDescription: "Strategic technology consulting and planning.",
    fullDescription:
      "We provide expert advice on architecture, implementation, and scaling your tech infrastructure efficiently.",
    features: ["Strategy Planning", "Architecture Design", "Code Reviews", "Best Practices"],
    technologies: ["Tech Architecture", "Industry Standards", "Documentation"],
  },
  {
    id: "ai-ml",
    icon: Brain,
    title: "AI & Machine Learning Solutions",
    shortDescription: "Empowering business with custom AI and machine learning models.",
    fullDescription:
      "We build intelligent systems using deep learning, natural language processing, and predictive analytics to automate tasks and provide actionable insights.",
    features: ["Deep Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
    technologies: ["TensorFlow", "PyTorch", "Python", "Hugging Face"],
  },
]

export function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-20 bg-muted/20 transition-all duration-700 ease-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What We <span className="neon-text">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology services tailored to meet your business needs and drive digital transformation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const isOpen = selectedService === service.id
            return (
              <div
                key={service.id}
                className={`glass-card rounded-xl p-6 glow-hover cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  isOpen ? "border border-[var(--neon-cyan)]/50" : ""
                }`}
                onClick={() => setSelectedService(isOpen ? null : service.id)}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg logo-gradient mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--neon-cyan)] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <p className="text-muted-foreground mb-3 leading-relaxed">{service.shortDescription}</p>

                {isOpen && (
                  <div className="mt-3 animate-fadeIn">
                    <p className="text-sm text-muted-foreground mb-4">{service.fullDescription}</p>

                    <div className="mb-3">
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

                    <div className="mb-3">
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

                    <Button
                      className="w-full text-white font-semibold logo-glow-hover"
                      style={{
                        background: "linear-gradient(135deg, #00CED1, #FF8C00)",
                        borderRadius: "8px",
                      }}
                    >
                      Get Started
                    </Button>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

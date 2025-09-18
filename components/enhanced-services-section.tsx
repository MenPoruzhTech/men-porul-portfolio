"use client"

import { motion } from "framer-motion"
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Brain, 
  Shield, 
  Zap,
  Rocket,
  Settings,
  Database,
  Globe
} from "lucide-react"
import { useAnimation } from "@/contexts/animation-context"
import { EnhancedAnimation, StaggeredEnhanced, TypewriterText } from "@/components/enhanced-animations"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices.",
    features: ["React/Next.js", "TypeScript", "Responsive Design", "Performance Optimization"],
    color: "from-blue-500 to-cyan-500",
    hoverColor: "hover:from-blue-600 hover:to-cyan-600"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    features: ["React Native", "Flutter", "iOS/Android", "App Store Optimization"],
    color: "from-green-500 to-emerald-500",
    hoverColor: "hover:from-green-600 hover:to-emerald-600"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment solutions for modern applications.",
    features: ["AWS/Azure", "Docker", "Kubernetes", "CI/CD Pipelines"],
    color: "from-purple-500 to-pink-500",
    hoverColor: "hover:from-purple-600 hover:to-pink-600"
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by artificial intelligence and machine learning.",
    features: ["Custom AI Models", "Data Analytics", "Automation", "Predictive Analytics"],
    color: "from-orange-500 to-red-500",
    hoverColor: "hover:from-orange-600 hover:to-red-600"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and data.",
    features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"],
    color: "from-indigo-500 to-blue-500",
    hoverColor: "hover:from-indigo-600 hover:to-blue-600"
  },
  {
    icon: Zap,
    title: "DevOps & Automation",
    description: "Streamlined development workflows and automated deployment processes.",
    features: ["Infrastructure as Code", "Monitoring", "Automation", "Performance Tuning"],
    color: "from-yellow-500 to-orange-500",
    hoverColor: "hover:from-yellow-600 hover:to-orange-600"
  }
]

const animatedIcons = [
  { icon: Rocket, delay: 0 },
  { icon: Settings, delay: 0.5 },
  { icon: Database, delay: 1 },
  { icon: Globe, delay: 1.5 }
]

export function EnhancedServicesSection() {
  const { isSubtle, isFlashy } = useAnimation()

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <EnhancedAnimation type="fade" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold brand-text mb-4">
              {isFlashy ? (
                <TypewriterText text="Our Services" speed={60} />
              ) : (
                "Our Services"
              )}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {isFlashy ? (
                <TypewriterText 
                  text="Comprehensive technology solutions tailored to your business needs. From concept to deployment, we've got you covered." 
                  speed={25}
                />
              ) : (
                "Comprehensive technology solutions tailored to your business needs. From concept to deployment, we've got you covered."
              )}
            </p>
          </div>
        </EnhancedAnimation>

        {/* Flashy floating animated icons */}
        {isFlashy && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {animatedIcons.map(({ icon: Icon, delay }, index) => (
              <motion.div
                key={index}
                className="absolute w-16 h-16 glass-card rounded-full flex items-center justify-center"
                style={{
                  left: `${20 + index * 20}%`,
                  top: `${30 + (index % 2) * 40}%`,
                }}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ 
                  opacity: [0, 0.6, 0], 
                  scale: [0, 1, 0], 
                  rotate: [0, 360, 720],
                  y: [0, -50, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: delay,
                  ease: "easeInOut"
                }}
              >
                <Icon className="w-8 h-8 text-[var(--brand-primary)]" />
              </motion.div>
            ))}
          </div>
        )}

        {/* Services Grid */}
        <StaggeredEnhanced
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.1}
          type={isFlashy ? "flip" : "scale"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              whileHover={{ 
                y: isFlashy ? -15 : -8,
                scale: isFlashy ? 1.05 : 1.02,
                rotateY: isFlashy ? 5 : 0,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <div className="glass-card p-6 rounded-xl hover:brand-glow-hover transition-all duration-300 h-full relative overflow-hidden">
                {/* Service Icon */}
                <motion.div
                  className={`p-4 rounded-full bg-gradient-to-r ${service.color} mb-6 inline-block`}
                  whileHover={{ 
                    rotate: isFlashy ? 360 : 0,
                    scale: isFlashy ? 1.2 : 1.1,
                    transition: { duration: 0.5 }
                  }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Service Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:brand-text transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        delay: featureIndex * 0.1,
                        ease: isFlashy ? [0.68, -0.55, 0.265, 1.55] : "easeOut"
                      }}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <motion.div
                        className="w-2 h-2 bg-[var(--brand-primary)] rounded-full mr-3"
                        whileHover={{ 
                          scale: isFlashy ? 1.5 : 1.2,
                          boxShadow: isFlashy ? "0 0 10px var(--brand-primary)" : "0 0 5px var(--brand-primary)"
                        }}
                        transition={{ duration: 0.2 }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Hover Effect Overlay */}
                <motion.div
                  className="absolute inset-0 rounded-xl border border-[var(--brand-primary)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />

                {/* Flashy animated background */}
                {isFlashy && (
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${service.color.replace('from-', '').replace(' to-', ', ')})`
                    }}
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </StaggeredEnhanced>

        {/* Bottom CTA */}
        <EnhancedAnimation type="scale" delay={0.8}>
          <div className="text-center mt-16">
            <motion.div
              whileHover={{ 
                scale: isFlashy ? 1.05 : 1.02,
                y: isFlashy ? -5 : -2
              }}
              className="inline-block"
            >
              <button
                className={`inline-flex items-center px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                  isFlashy
                    ? "neon-gradient text-white shadow-lg hover:shadow-xl"
                    : "bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary)]/90"
                }`}
              >
                <span>Get a Custom Quote</span>
                <Rocket className="ml-2 w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </EnhancedAnimation>
      </div>
    </section>
  )
}

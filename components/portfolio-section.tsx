"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Eye, ArrowRight } from "lucide-react"
import { useAnimation } from "@/contexts/animation-context"
import { EnhancedAnimation, StaggeredEnhanced, TypewriterText } from "@/components/enhanced-animations"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with advanced analytics and AI-powered recommendations.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Web Development",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication and real-time transactions.",
    image: "/api/placeholder/600/400",
    technologies: ["React Native", "Firebase", "AWS", "Stripe"],
    category: "Mobile Development",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "AI Chatbot Platform",
    description: "Intelligent chatbot platform with natural language processing and multi-language support.",
    image: "/api/placeholder/600/400",
    technologies: ["Python", "TensorFlow", "FastAPI", "Docker"],
    category: "AI/ML",
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 4,
    title: "Cloud Infrastructure",
    description: "Scalable cloud infrastructure setup with automated deployment and monitoring.",
    image: "/api/placeholder/600/400",
    technologies: ["AWS", "Kubernetes", "Terraform", "Docker"],
    category: "DevOps",
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 5,
    title: "Data Analytics Dashboard",
    description: "Real-time data visualization dashboard with interactive charts and reporting.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "D3.js", "Python", "PostgreSQL"],
    category: "Data Analytics",
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 6,
    title: "IoT Monitoring System",
    description: "Internet of Things monitoring system with real-time alerts and data collection.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "MQTT", "InfluxDB"],
    category: "IoT",
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
]

const categories = ["All", "Web Development", "Mobile Development", "AI/ML", "DevOps", "Data Analytics", "IoT"]

export function PortfolioSection() {
  const { isSubtle, isFlashy } = useAnimation()
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <EnhancedAnimation type="fade" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold brand-text mb-4">
              {isFlashy ? (
                <TypewriterText text="Our Portfolio" speed={60} />
              ) : (
                "Our Portfolio"
              )}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {isFlashy ? (
                <TypewriterText 
                  text="Explore our latest projects and see how we transform ideas into innovative digital solutions." 
                  speed={25}
                />
              ) : (
                "Explore our latest projects and see how we transform ideas into innovative digital solutions."
              )}
            </p>
          </div>
        </EnhancedAnimation>

        {/* Category Filter */}
        <EnhancedAnimation type="scale" delay={0.4}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "neon-gradient text-white shadow-lg"
                    : "glass-card text-muted-foreground hover:text-foreground hover:brand-glow-hover"
                }`}
                whileHover={{ 
                  scale: isFlashy ? 1.1 : 1.05,
                  y: isFlashy ? -3 : -2
                }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </EnhancedAnimation>

        {/* Projects Grid */}
        <StaggeredEnhanced
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.1}
          type={isFlashy ? "flip" : "scale"}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              whileHover={{ 
                y: isFlashy ? -10 : -5,
                scale: isFlashy ? 1.02 : 1.01,
                transition: { duration: 0.3 }
              }}
            >
              <div className="glass-card rounded-xl overflow-hidden hover:brand-glow-hover transition-all duration-300 h-full">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    className="w-full h-full bg-gradient-to-br from-[var(--brand-primary)]/20 to-[var(--brand-secondary)]/20"
                    whileHover={{ 
                      scale: isFlashy ? 1.1 : 1.05,
                      transition: { duration: 0.5 }
                    }}
                  >
                    {/* Placeholder for project image */}
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-4xl font-bold text-[var(--brand-primary)]/50">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                  </motion.div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div
                      className="absolute top-4 left-4 px-3 py-1 bg-[var(--brand-primary)] text-white text-xs font-semibold rounded-full"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      Featured
                    </motion.div>
                  )}

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4"
                    initial={false}
                  >
                    <motion.a
                      href={project.liveUrl}
                      className="p-3 rounded-full glass-card hover:brand-glow-hover transition-all duration-300"
                      whileHover={{ 
                        scale: isFlashy ? 1.2 : 1.1,
                        rotate: isFlashy ? 360 : 0
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="p-3 rounded-full glass-card hover:brand-glow-hover transition-all duration-300"
                      whileHover={{ 
                        scale: isFlashy ? 1.2 : 1.1,
                        rotate: isFlashy ? 360 : 0
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5 text-white" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-[var(--brand-primary)]">
                      {project.category}
                    </span>
                    <motion.div
                      whileHover={{ 
                        scale: isFlashy ? 1.2 : 1.1,
                        rotate: isFlashy ? 180 : 0
                      }}
                      className="p-1 rounded-full hover:bg-[var(--brand-primary)]/20 transition-colors duration-300"
                    >
                      <Eye className="w-4 h-4 text-muted-foreground" />
                    </motion.div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:brand-text transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.3, 
                          delay: techIndex * 0.1,
                          ease: isFlashy ? [0.68, -0.55, 0.265, 1.55] : "easeOut"
                        }}
                        className="px-2 py-1 text-xs bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] rounded-full"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <motion.button
                    className="w-full flex items-center justify-center space-x-2 py-2 text-sm font-medium text-[var(--brand-primary)] hover:text-white hover:bg-[var(--brand-primary)] rounded-lg transition-all duration-300"
                    whileHover={{ 
                      scale: isFlashy ? 1.05 : 1.02,
                      x: isFlashy ? 5 : 2
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggeredEnhanced>

        {/* View All Projects CTA */}
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
                <span>View All Projects</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </EnhancedAnimation>
      </div>
    </section>
  )
}

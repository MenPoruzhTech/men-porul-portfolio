"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ExternalLink, Github, X, Calendar, Users, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Modern e-commerce platform with advanced features",
    fullDescription:
      "A comprehensive e-commerce solution built with Next.js and Stripe integration. Features include real-time inventory management, advanced search and filtering, user reviews, and a responsive admin dashboard. The platform handles over 10,000 products and serves 50,000+ monthly active users.",
    image: "/ecommerce-platform-mockup.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/menporuzh/ecommerce",
    client: "TechMart Inc.",
    duration: "3 months",
    teamSize: "5 developers",
    year: "2024",
    results: ["300% increase in sales", "50% faster page load times", "95% customer satisfaction"],
  },
  {
    id: 2,
    title: "Healthcare Mobile App",
    category: "Mobile Development",
    description: "Patient management system for healthcare providers",
    fullDescription:
      "A comprehensive healthcare mobile application that connects patients with healthcare providers. Features include appointment scheduling, telemedicine consultations, prescription management, and health record tracking. Built with React Native for cross-platform compatibility.",
    image: "/healthcare-app-mockup.png",
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "AWS"],
    liveUrl: "https://healthapp-demo.com",
    githubUrl: "https://github.com/menporuzh/healthcare-app",
    client: "MediCare Solutions",
    duration: "4 months",
    teamSize: "6 developers",
    year: "2024",
    results: ["10,000+ app downloads", "40% reduction in appointment no-shows", "4.8/5 app store rating"],
  },
  {
    id: 3,
    title: "Financial Dashboard",
    category: "Web Development",
    description: "Real-time financial analytics and reporting platform",
    fullDescription:
      "A sophisticated financial dashboard providing real-time analytics, portfolio management, and automated reporting. Features advanced data visualization, risk assessment tools, and integration with multiple financial APIs. Built for institutional investors and financial advisors.",
    image: "/financial-dashboard-mockup.jpg",
    technologies: ["React", "D3.js", "Python", "FastAPI", "Redis"],
    liveUrl: "https://fintech-dashboard.com",
    githubUrl: "https://github.com/menporuzh/fintech-dashboard",
    client: "InvestPro Capital",
    duration: "5 months",
    teamSize: "7 developers",
    year: "2023",
    results: ["$2M+ assets under management", "60% faster reporting", "99.9% uptime"],
  },
  {
    id: 4,
    title: "Learning Management System",
    category: "Web Development",
    description: "Comprehensive online learning platform",
    fullDescription:
      "A full-featured learning management system with course creation tools, interactive assessments, progress tracking, and video streaming capabilities. Supports multiple content formats and includes advanced analytics for educators and administrators.",
    image: "/lms-platform-mockup.png",
    technologies: ["Vue.js", "Laravel", "MySQL", "FFmpeg", "AWS S3"],
    liveUrl: "https://edulearn-platform.com",
    githubUrl: "https://github.com/menporuzh/lms-platform",
    client: "EduTech Academy",
    duration: "6 months",
    teamSize: "8 developers",
    year: "2023",
    results: ["25,000+ students enrolled", "90% course completion rate", "4.7/5 user rating"],
  },
  {
    id: 5,
    title: "IoT Monitoring System",
    category: "IoT & Analytics",
    description: "Real-time IoT device monitoring and analytics",
    fullDescription:
      "An advanced IoT monitoring system that tracks and analyzes data from thousands of connected devices. Features real-time dashboards, predictive maintenance alerts, and automated reporting. Includes mobile apps for field technicians and web dashboards for managers.",
    image: "/iot-monitoring-mockup.jpg",
    technologies: ["React", "Node.js", "InfluxDB", "MQTT", "Docker"],
    liveUrl: "https://iot-monitor.com",
    githubUrl: "https://github.com/menporuzh/iot-monitoring",
    client: "SmartFactory Ltd.",
    duration: "4 months",
    teamSize: "6 developers",
    year: "2023",
    results: ["30% reduction in downtime", "500+ devices monitored", "85% maintenance efficiency"],
  },
  {
    id: 6,
    title: "Social Media Analytics",
    category: "Analytics",
    description: "Advanced social media monitoring and analytics tool",
    fullDescription:
      "A comprehensive social media analytics platform that monitors brand mentions, analyzes sentiment, and provides actionable insights. Features include competitor analysis, influencer identification, and automated reporting with customizable dashboards.",
    image: "/social-analytics-mockup.png",
    technologies: ["Angular", "Python", "Elasticsearch", "Kafka", "TensorFlow"],
    liveUrl: "https://social-insights.com",
    githubUrl: "https://github.com/menporuzh/social-analytics",
    client: "BrandWatch Agency",
    duration: "5 months",
    teamSize: "9 developers",
    year: "2022",
    results: ["1M+ social posts analyzed daily", "95% sentiment accuracy", "200+ brands monitored"],
  },
]

const categories = ["All", "Web Development", "Mobile Development", "IoT & Analytics", "Analytics"]

export function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="neon-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover our most impactful projects that demonstrate our expertise across different technologies and
            industries.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? "neon-gradient text-white"
                    : "border-[var(--neon-cyan)] text-[var(--neon-cyan)] hover:bg-[var(--neon-cyan)] hover:text-white bg-transparent"
                } glow-hover`}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onSelect={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
        </AnimatePresence>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: (typeof projects)[0]
  index: number
  onSelect: () => void
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, rotateX: 5, rotateY: 5, scale: 1.02 }}
      className="group cursor-pointer perspective-1000"
      onClick={onSelect}
    >
      <div className="glass-card rounded-xl overflow-hidden glow-hover transform-gpu">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            whileHover={{ scale: 1.1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 text-xs rounded-full glass-card border border-[var(--neon-cyan)]/50 text-[var(--neon-cyan)]">
              {project.category}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
            <p className="text-sm text-gray-200">{project.description}</p>
          </div>
        </div>

        {/* Project Info */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-muted-foreground">{project.client}</span>
            <span className="text-sm text-[var(--neon-cyan)]">{project.year}</span>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-full glass-card border border-[var(--neon-cyan)]/30"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 text-xs rounded-full glass-card border border-[var(--neon-cyan)]/30">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button size="sm" className="flex-1 neon-gradient text-white glow-hover">
              View Details
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-[var(--neon-cyan)] text-[var(--neon-cyan)] bg-transparent"
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }: { project: (typeof projects)[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="glass-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-t-xl" />
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white/20"
          >
            <X className="w-6 h-6" />
          </Button>
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 text-sm rounded-full glass-card border border-[var(--neon-cyan)]/50 text-[var(--neon-cyan)]">
                {project.category}
              </span>
              <span className="px-3 py-1 text-sm rounded-full glass-card border border-white/30 text-white">
                {project.year}
              </span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
            <p className="text-gray-200">{project.description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="glass-card rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Users className="w-5 h-5 text-[var(--neon-cyan)] mr-2" />
                <span className="font-semibold">Client</span>
              </div>
              <p className="text-muted-foreground">{project.client}</p>
            </div>
            <div className="glass-card rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Calendar className="w-5 h-5 text-[var(--neon-cyan)] mr-2" />
                <span className="font-semibold">Duration</span>
              </div>
              <p className="text-muted-foreground">{project.duration}</p>
            </div>
            <div className="glass-card rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Code className="w-5 h-5 text-[var(--neon-cyan)] mr-2" />
                <span className="font-semibold">Team Size</span>
              </div>
              <p className="text-muted-foreground">{project.teamSize}</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
            <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full glass-card border border-[var(--neon-cyan)]/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Key Results</h3>
            <ul className="space-y-2">
              {project.results.map((result, index) => (
                <li key={index} className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-[var(--neon-cyan)] mr-3" />
                  {result}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button asChild className="neon-gradient text-white glow-hover">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Site
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[var(--neon-cyan)] text-[var(--neon-cyan)] hover:bg-[var(--neon-cyan)] hover:text-white bg-transparent"
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View Code
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

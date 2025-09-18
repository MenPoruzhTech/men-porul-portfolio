"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { StaggeredAnimation, ScaleAnimation } from "@/components/scroll-animations"
import { 
  Code2 as ReactIcon,
  Server as Nodejs,
  FileCode as Python,
  Type as Typescript,
  Code as Javascript,
  GitBranch as Git,
  Container as Docker,
  Cloud as Aws,
  Globe as Nextdotjs,
  Palette as Tailwindcss,
  Database as Mongodb,
  Database as Postgresql,
  Circle as Redis,
  Network as Graphql,
  TestTube as Jest,
  Bug as Cypress
} from "lucide-react"

const techStack = [
  { name: "React", icon: ReactIcon, color: "text-blue-400", category: "Frontend" },
  { name: "Next.js", icon: Nextdotjs, color: "text-white", category: "Frontend" },
  { name: "TypeScript", icon: Typescript, color: "text-blue-500", category: "Language" },
  { name: "JavaScript", icon: Javascript, color: "text-yellow-400", category: "Language" },
  { name: "Node.js", icon: Nodejs, color: "text-green-500", category: "Backend" },
  { name: "Python", icon: Python, color: "text-yellow-500", category: "Language" },
  { name: "Tailwind CSS", icon: Tailwindcss, color: "text-cyan-400", category: "Styling" },
  { name: "MongoDB", icon: Mongodb, color: "text-green-600", category: "Database" },
  { name: "PostgreSQL", icon: Postgresql, color: "text-blue-600", category: "Database" },
  { name: "Redis", icon: Redis, color: "text-red-500", category: "Database" },
  { name: "GraphQL", icon: Graphql, color: "text-pink-500", category: "API" },
  { name: "Docker", icon: Docker, color: "text-blue-400", category: "DevOps" },
  { name: "AWS", icon: Aws, color: "text-orange-500", category: "Cloud" },
  { name: "Git", icon: Git, color: "text-orange-600", category: "Version Control" },
  { name: "Jest", icon: Jest, color: "text-red-400", category: "Testing" },
  { name: "Cypress", icon: Cypress, color: "text-green-400", category: "Testing" },
]

const categories = ["All", "Frontend", "Backend", "Language", "Database", "Cloud", "DevOps", "Testing"]

export function TechStackShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  const filteredTech = selectedCategory === "All" 
    ? techStack 
    : techStack.filter(tech => tech.category === selectedCategory)

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Our </span>
            <span className="brand-text">Tech Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build scalable, performant, and innovative solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "brand-gradient text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Tech Stack Grid */}
        <StaggeredAnimation
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          staggerDelay={0.1}
          direction="up"
          distance={30}
        >
          {filteredTech.map((tech, index) => (
            <ScaleAnimation key={tech.name} delay={index * 0.05} scale={0.8}>
              <motion.div
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <div className="glass-card p-6 rounded-xl text-center hover:brand-glow-hover transition-all duration-300 cursor-pointer">
                  <motion.div
                    className="flex flex-col items-center space-y-3"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`p-3 rounded-lg bg-background/50 ${tech.color}`}>
                      <tech.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-foreground group-hover:brand-text transition-colors">
                        {tech.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {tech.category}
                      </p>
                    </div>
                  </motion.div>
                  
                  {/* Hover effect overlay */}
                  <motion.div
                    className="absolute inset-0 rounded-xl border border-[var(--brand-primary)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </div>
              </motion.div>
            </ScaleAnimation>
          ))}
        </StaggeredAnimation>

      </div>
    </motion.section>
  )
}

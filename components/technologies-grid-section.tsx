"use client"

import { motion } from "framer-motion"
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
  Bug as Cypress,
  Zap as Vite,
  Layers as Kubernetes,
  Wrench as Terraform,
  Shield as Jenkins
} from "lucide-react"
import { SimpleAnimation, StaggeredSimple } from "@/components/simple-animations"

const technologies = [
  { name: "React", icon: ReactIcon, color: "text-blue-400" },
  { name: "Node.js", icon: Nodejs, color: "text-green-400" },
  { name: "Python", icon: Python, color: "text-yellow-400" },
  { name: "TypeScript", icon: Typescript, color: "text-blue-500" },
  { name: "JavaScript", icon: Javascript, color: "text-yellow-500" },
  { name: "Next.js", icon: Nextdotjs, color: "text-gray-400" },
  { name: "Tailwind CSS", icon: Tailwindcss, color: "text-cyan-400" },
  { name: "MongoDB", icon: Mongodb, color: "text-green-500" },
  { name: "PostgreSQL", icon: Postgresql, color: "text-blue-600" },
  { name: "Redis", icon: Redis, color: "text-red-500" },
  { name: "GraphQL", icon: Graphql, color: "text-pink-500" },
  { name: "Docker", icon: Docker, color: "text-blue-400" },
  { name: "Kubernetes", icon: Kubernetes, color: "text-blue-600" },
  { name: "AWS", icon: Aws, color: "text-orange-500" },
  { name: "Terraform", icon: Terraform, color: "text-purple-500" },
  { name: "Jenkins", icon: Jenkins, color: "text-blue-500" },
  { name: "Git", icon: Git, color: "text-orange-400" },
  { name: "Jest", icon: Jest, color: "text-red-400" }
]

export function TechnologiesGridSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SimpleAnimation type="fade" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold brand-text mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We leverage cutting-edge technologies and frameworks to build robust, scalable, and innovative solutions.
            </p>
          </div>
        </SimpleAnimation>

        {/* Technologies Grid */}
        <StaggeredSimple
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          staggerDelay={0.05}
          type="scale"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              whileHover={{ 
                scale: 1.1,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="glass-card p-6 rounded-xl text-center hover:brand-glow-hover transition-all duration-300">
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
                  </div>
                </motion.div>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 rounded-xl border border-[var(--brand-primary)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </div>
            </motion.div>
          ))}
        </StaggeredSimple>
      </div>
    </section>
  )
}

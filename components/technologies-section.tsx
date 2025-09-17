"use client"

import { motion } from "framer-motion"

const technologies = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Java", "PHP", "Express.js", "FastAPI"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Ionic"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Vercel"],
  },
  {
    category: "Tools & Others",
    items: ["Git", "Figma", "Jira", "Slack", "Postman", "VS Code"],
  },
]

export function TechnologiesSection() {
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
            Technologies We <span className="neon-text">Master</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We stay up-to-date with the latest technologies and frameworks to deliver cutting-edge solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-xl p-6 glow-hover"
            >
              <h3 className="text-xl font-semibold mb-4 neon-text">{tech.category}</h3>
              <div className="flex flex-wrap gap-2">
                {tech.items.map((item, itemIndex) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 text-sm rounded-full glass-card border border-[var(--neon-cyan)]/30 hover:border-[var(--neon-cyan)]/60 transition-colors cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

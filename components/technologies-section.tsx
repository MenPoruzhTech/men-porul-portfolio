"use client"

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
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technologies We <span className="neon-text">Master</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We stay up-to-date with the latest technologies and frameworks to deliver cutting-edge solutions.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech) => (
            <div
              key={tech.category}
              className="glass-card rounded-xl p-6 glow-hover transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-4 neon-text">{tech.category}</h3>
              <div className="flex flex-wrap gap-2">
                {tech.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm rounded-full glass-card border border-[var(--neon-cyan)]/30 hover:border-[var(--neon-cyan)]/60 transition-all duration-200 cursor-default hover:scale-105"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

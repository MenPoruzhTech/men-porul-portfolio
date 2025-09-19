"use client"

import { motion } from "framer-motion"
import { Code, Terminal, FileCode, Zap } from "lucide-react"
import { StaggeredSimple } from "@/components/simple-animations"

const codeBlocks = [
  {
    title: "Frontend Excellence",
    language: "React + TypeScript",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    code: `const Innovation = () => {
  return (
    <div className="future-ready">
      <h1>Building Tomorrow</h1>
    </div>
  );
};`,
    description: "Modern, responsive, and performant"
  },
  {
    title: "Backend Power",
    language: "Node.js + Python",
    icon: Terminal,
    color: "from-green-500 to-emerald-500",
    code: `async def build_solution():
    innovation = await create_amazing()
    return innovation`,
    description: "Scalable and robust architecture"
  },
  {
    title: "AI Integration",
    language: "Machine Learning",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    code: `class AIEngine:
    def predict_future(self):
        return "Amazing results"`,
    description: "Intelligent automation and insights"
  }
]

export function CodeTypingAnimation() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold brand-text mb-4">
            Code That Powers Innovation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clean, efficient, and scalable code that drives exceptional results
          </p>
        </motion.div>

        {/* Code Blocks Grid */}
        <StaggeredSimple
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          staggerDelay={0.2}
        >
          {codeBlocks.map((block, index) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className="glass-card p-6 rounded-xl hover:brand-glow-hover transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${block.color}`}>
                      <block.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:brand-text transition-colors">
                        {block.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {block.language}
                      </p>
                    </div>
                  </div>

                  {/* Code Block */}
                  <div className="bg-gray-900/80 rounded-lg p-4 mb-4 font-mono text-sm overflow-hidden">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-xs text-gray-400 ml-2">
                        {block.language}
                      </span>
                    </div>
                    <pre className="text-gray-100 whitespace-pre-wrap">
                      {block.code}
                    </pre>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground">
                    {block.description}
                  </p>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl border border-[var(--brand-primary)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </StaggeredSimple>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "100%", label: "Clean Code" },
              { number: "24/7", label: "Monitoring" },
              { number: "99.9%", label: "Uptime" },
              { number: "∞", label: "Scalability" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl font-bold brand-text mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

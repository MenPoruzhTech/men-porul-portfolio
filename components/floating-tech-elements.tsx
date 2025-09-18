"use client"

import { motion } from "framer-motion"
import { 
  Code, 
  Database, 
  Cpu, 
  Globe, 
  Smartphone, 
  Cloud, 
  Shield, 
  Zap,
  GitBranch,
  Terminal,
  Layers,
  Monitor
} from "lucide-react"

const techIcons = [
  { icon: Code, name: "Code", color: "text-blue-500" },
  { icon: Database, name: "Database", color: "text-green-500" },
  { icon: Cpu, name: "CPU", color: "text-purple-500" },
  { icon: Globe, name: "Web", color: "text-cyan-500" },
  { icon: Smartphone, name: "Mobile", color: "text-pink-500" },
  { icon: Cloud, name: "Cloud", color: "text-orange-500" },
  { icon: Shield, name: "Security", color: "text-red-500" },
  { icon: Zap, name: "Performance", color: "text-yellow-500" },
  { icon: GitBranch, name: "Git", color: "text-indigo-500" },
  { icon: Terminal, name: "Terminal", color: "text-gray-500" },
  { icon: Layers, name: "Architecture", color: "text-teal-500" },
  { icon: Monitor, name: "Frontend", color: "text-emerald-500" },
]

const codeSnippets = [
  "const tech = 'awesome';",
  "function innovate() { return 'future'; }",
  "import { creativity } from 'mind';",
  "if (problem) { solve(); }",
  "class Innovation extends Technology {}",
  "const solution = await build();",
  "export default innovation;",
  "while (learning) { grow(); }",
]

export function FloatingTechElements() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Tech Icons */}
      {techIcons.map((tech, index) => {
        const positions = [
          { left: 10, top: 20 },
          { left: 25, top: 60 },
          { left: 40, top: 30 },
          { left: 55, top: 70 },
          { left: 70, top: 25 },
          { left: 85, top: 65 },
          { left: 15, top: 45 },
          { left: 30, top: 80 },
          { left: 45, top: 15 },
          { left: 60, top: 55 },
          { left: 75, top: 35 },
          { left: 90, top: 75 }
        ]
        const pos = positions[index] || { left: 50, top: 50 }
        
        return (
          <motion.div
            key={tech.name}
            className="absolute"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
              y: [0, -50, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + (index % 4),
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.5,
              ease: "easeInOut",
            }}
          >
            <div className={`p-2 rounded-lg bg-background/10 backdrop-blur-sm border border-white/10 ${tech.color}`}>
              <tech.icon className="w-6 h-6" />
            </div>
          </motion.div>
        )
      })}

      {/* Floating Code Snippets */}
      {codeSnippets.map((snippet, index) => {
        const positions = [
          { left: 5, top: 15 },
          { left: 20, top: 45 },
          { left: 35, top: 25 },
          { left: 50, top: 65 },
          { left: 65, top: 35 },
          { left: 80, top: 55 },
          { left: 10, top: 75 },
          { left: 25, top: 85 }
        ]
        const pos = positions[index] || { left: 50, top: 50 }
        
        return (
          <motion.div
            key={index}
            className="absolute font-mono text-xs text-muted-foreground/60 bg-background/5 backdrop-blur-sm px-2 py-1 rounded border border-white/5"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
            }}
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: [0, 0.7, 0],
              x: [0, 100, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 12 + (index % 6),
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 1.5,
              ease: "easeInOut",
            }}
          >
            {snippet}
          </motion.div>
        )
      })}

      {/* Binary Rain Effect */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`binary-${i}`}
          className="absolute font-mono text-xs text-[var(--brand-primary)]/20"
          style={{
            left: `${(i * 3.33) % 100}%`,
            top: `${(i * 7) % 100}%`,
          }}
          animate={{
            y: [0, 1000],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 15 + (i % 10),
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.3,
            ease: "linear",
          }}
        >
          {i % 2 === 0 ? "1" : "0"}
        </motion.div>
      ))}

      {/* Network Connection Lines */}
      {[...Array(8)].map((_, i) => {
        const positions = [
          { left: 10, top: 20, width: 150, rotate: 45 },
          { left: 30, top: 60, width: 200, rotate: 135 },
          { left: 50, top: 30, width: 120, rotate: 225 },
          { left: 70, top: 70, width: 180, rotate: 315 },
          { left: 20, top: 40, width: 160, rotate: 90 },
          { left: 60, top: 80, width: 140, rotate: 180 },
          { left: 80, top: 25, width: 170, rotate: 270 },
          { left: 40, top: 85, width: 130, rotate: 0 }
        ]
        const pos = positions[i] || { left: 50, top: 50, width: 150, rotate: 0 }
        
        return (
          <motion.div
            key={`network-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-[var(--brand-primary)]/30 to-transparent"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
              width: `${pos.width}px`,
              transform: `rotate(${pos.rotate}deg)`,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 6 + (i % 4),
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        )
      })}
    </div>
  )
}

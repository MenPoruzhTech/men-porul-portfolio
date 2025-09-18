"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Zap, Shield, Globe, Code } from "lucide-react"
import { StaggeredAnimation, ScaleAnimation } from "@/components/scroll-animations"

const metrics = [
  {
    icon: TrendingUp,
    label: "Performance",
    value: "99.9%",
    description: "Uptime",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    borderColor: "border-green-400/20"
  },
  {
    icon: Users,
    label: "Users",
    value: "10K+",
    description: "Active Users",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20"
  },
  {
    icon: Zap,
    label: "Speed",
    value: "< 100ms",
    description: "Response Time",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
    borderColor: "border-yellow-400/20"
  },
  {
    icon: Shield,
    label: "Security",
    value: "100%",
    description: "Secure",
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    borderColor: "border-red-400/20"
  },
  {
    icon: Globe,
    label: "Global",
    value: "50+",
    description: "Countries",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "border-purple-400/20"
  },
  {
    icon: Code,
    label: "Projects",
    value: "200+",
    description: "Delivered",
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    borderColor: "border-cyan-400/20"
  }
]

const chartData = [
  { month: "Jan", value: 85, color: "bg-[var(--brand-primary)]" },
  { month: "Feb", value: 92, color: "bg-[var(--brand-secondary)]" },
  { month: "Mar", value: 78, color: "bg-[var(--brand-accent)]" },
  { month: "Apr", value: 95, color: "bg-[var(--brand-primary)]" },
  { month: "May", value: 88, color: "bg-[var(--brand-secondary)]" },
  { month: "Jun", value: 96, color: "bg-[var(--brand-accent)]" },
]

export function AnimatedDataVisualization() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
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
            <span className="text-foreground">Real-Time </span>
            <span className="brand-text">Analytics</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Data-driven insights that power our innovative solutions
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <StaggeredAnimation
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          staggerDelay={0.1}
          direction="up"
          distance={30}
        >
          {metrics.map((metric, index) => (
            <ScaleAnimation key={metric.label} delay={index * 0.05} scale={0.9}>
              <motion.div
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className={`glass-card p-6 rounded-xl border ${metric.borderColor} hover:brand-glow-hover transition-all duration-300`}
              >
                <div className="flex items-center space-x-4">
                  <motion.div
                    className={`p-3 rounded-lg ${metric.bgColor} ${metric.color}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <metric.icon className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <motion.div
                      className="text-2xl font-bold text-foreground"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    >
                      {metric.value}
                    </motion.div>
                    <div className="text-sm text-muted-foreground">
                      {metric.label}
                    </div>
                    <div className="text-xs text-muted-foreground/70">
                      {metric.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScaleAnimation>
          ))}
        </StaggeredAnimation>

        {/* Animated Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-card p-8 rounded-xl"
        >
          <h3 className="text-xl font-semibold mb-6 text-center brand-text">
            Performance Trends
          </h3>
          
          <div className="flex items-end justify-between h-64 space-x-4">
            {chartData.map((data, index) => (
              <motion.div
                key={data.month}
                className="flex flex-col items-center space-y-2 flex-1"
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1 + 0.6,
                  ease: "easeOut"
                }}
              >
                <motion.div
                  className={`w-full ${data.color} rounded-t-lg relative overflow-hidden`}
                  style={{ height: `${data.value}%` }}
                  whileHover={{ scaleY: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Animated fill effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20"
                    animate={{
                      y: [0, -20, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
                <span className="text-sm text-muted-foreground font-medium">
                  {data.month}
                </span>
                <span className="text-xs text-muted-foreground/70">
                  {data.value}%
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.section>
  )
}

"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Zap, Shield, Globe, Briefcase, BarChart3, Clock } from "lucide-react"
import { SimpleAnimation, StaggeredSimple } from "@/components/simple-animations"

const analytics = [
  { name: "Uptime", value: "99.9%", icon: TrendingUp, color: "bg-green-500" },
  { name: "Active Users", value: "10K+", icon: Users, color: "bg-blue-500" },
  { name: "Response Time", value: "<100ms", icon: Zap, color: "bg-yellow-500" },
  { name: "Data Security", value: "100%", icon: Shield, color: "bg-purple-500" },
  { name: "Projects Completed", value: "50+", icon: Briefcase, color: "bg-indigo-500" },
  { name: "Team Members", value: "200+", icon: Users, color: "bg-red-500" }
]

const weeklyData = [
  { day: "Mon", value: 85 },
  { day: "Tue", value: 92 },
  { day: "Wed", value: 78 },
  { day: "Thu", value: 96 },
  { day: "Fri", value: 88 },
  { day: "Sat", value: 75 },
  { day: "Sun", value: 82 }
]

export function AnalyticsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SimpleAnimation type="fade" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold brand-text mb-4">
              Real-Time Analytics
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Data-driven insights that power our innovative solutions and ensure optimal performance.
            </p>
          </div>
        </SimpleAnimation>

        {/* Analytics Grid */}
        <StaggeredSimple
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          staggerDelay={0.1}
          type="scale"
        >
          {analytics.map((metric, index) => (
            <motion.div
              key={metric.name}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="glass-card p-6 rounded-xl hover:brand-glow-hover transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <motion.div
                    className={`p-3 rounded-lg ${metric.color}/20`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <metric.icon className={`w-6 h-6 ${metric.color.replace('bg-', 'text-')}`} />
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
                      {metric.name}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggeredSimple>

        {/* Live Engagement Tracker */}
        <SimpleAnimation type="scale" delay={0.6}>
          <div className="glass-card p-8 rounded-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Live Engagement Tracker
              </h3>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Live</span>
              </div>
            </div>

            <div className="flex items-end justify-between space-x-4 h-32">
              {weeklyData.map((data, index) => (
                <motion.div
                  key={data.day}
                  className="flex flex-col items-center space-y-2 flex-1"
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.8,
                    ease: "easeOut"
                  }}
                >
                  <motion.div
                    className="w-full bg-gradient-to-t from-[var(--brand-primary)] to-[var(--brand-secondary)] rounded-t-lg relative overflow-hidden"
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
                    {data.day}
                  </span>
                  <span className="text-xs text-muted-foreground/70">
                    {data.value}%
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </SimpleAnimation>
      </div>
    </section>
  )
}

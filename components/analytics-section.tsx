"use client"

import { TrendingUp, Users, Zap, Shield, Briefcase } from "lucide-react"
import { StaggeredSimple, SimpleAnimation } from "@/components/simple-animations"

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
    <section className="py-20">
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
          {analytics.map((metric) => (
            <div
              key={metric.name}
              className="group transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <div className="glass-card p-6 rounded-xl hover:brand-glow-hover transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${metric.color}/20`}>
                    <metric.icon className={`w-6 h-6 ${metric.color.replace('bg-', 'text-')}`} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.name}</div>
                  </div>
                </div>
              </div>
            </div>
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
              {weeklyData.map((data) => (
                <div key={data.day} className="flex flex-col items-center space-y-2 flex-1">
                  <div
                    className="w-full bg-gradient-to-t from-[var(--brand-primary)] to-[var(--brand-secondary)] rounded-t-lg transition-transform duration-200 transform group-hover:scale-y-105"
                    style={{ height: `${data.value}%` }}
                  />
                  <span className="text-sm text-muted-foreground font-medium">{data.day}</span>
                  <span className="text-xs text-muted-foreground/70">{data.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </SimpleAnimation>
      </div>
    </section>
  )
}

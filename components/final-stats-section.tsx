"use client"

import { Briefcase, Users, Calendar, TrendingUp } from "lucide-react"
import { StaggeredSimple } from "@/components/simple-animations"

const stats = [
  {
    number: "150+",
    label: "Projects Completed",
    icon: Briefcase,
    color: "from-[var(--brand-primary)] to-[var(--brand-secondary)]"
  },
  {
    number: "50+",
    label: "Happy Clients",
    icon: Users,
    color: "from-[var(--brand-secondary)] to-[var(--brand-accent)]"
  },
  {
    number: "5+",
    label: "Years Experience",
    icon: Calendar,
    color: "from-[var(--brand-accent)] to-[var(--brand-highlight)]"
  },
  {
    number: "99%",
    label: "Client Retention",
    icon: TrendingUp,
    color: "from-[var(--brand-highlight)] to-[var(--brand-primary)]"
  }
]

export function FinalStatsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggeredSimple
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          staggerDelay={0.1}
          type="scale"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <div className="glass-card p-8 rounded-xl hover:brand-glow-hover transition-all duration-300 text-center">
                <div
                  className={`p-4 rounded-full bg-gradient-to-r ${stat.color} mb-6 inline-block transition-transform duration-300 group-hover:scale-110 group-hover:rotate-360`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                <div className="text-4xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>

                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </StaggeredSimple>
      </div>
    </section>
  )
}

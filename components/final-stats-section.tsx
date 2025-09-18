"use client"

import { motion } from "framer-motion"
import { Briefcase, Users, Calendar, TrendingUp } from "lucide-react"
import { SimpleAnimation, StaggeredSimple } from "@/components/simple-animations"

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
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="glass-card p-8 rounded-xl hover:brand-glow-hover transition-all duration-300 text-center">
                <motion.div
                  className={`p-4 rounded-full bg-gradient-to-r ${stat.color} mb-6 inline-block`}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.5 }
                  }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.div
                  className="text-4xl font-bold text-foreground mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1 + 0.3,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  {stat.number}
                </motion.div>
                
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggeredSimple>
      </div>
    </section>
  )
}

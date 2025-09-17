"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, Rocket, Award, Globe, Users, Zap } from "lucide-react"

const timelineEvents = [
  {
    year: "2019",
    title: "Company Founded",
    description: "MenPoruzhTech was established with a vision to revolutionize digital solutions.",
    icon: Rocket,
    color: "from-blue-500 to-cyan-500",
  },
  {
    year: "2020",
    title: "First Major Project",
    description: "Successfully delivered our first enterprise-level web application for a Fortune 500 company.",
    icon: Award,
    color: "from-green-500 to-emerald-500",
  },
  {
    year: "2021",
    title: "Team Expansion",
    description: "Grew our team to 15+ talented developers, designers, and project managers.",
    icon: Users,
    color: "from-purple-500 to-pink-500",
  },
  {
    year: "2022",
    title: "Global Reach",
    description: "Expanded our services internationally, serving clients across 3 continents.",
    icon: Globe,
    color: "from-orange-500 to-red-500",
  },
  {
    year: "2023",
    title: "Innovation Hub",
    description: "Launched our R&D division focusing on AI, blockchain, and emerging technologies.",
    icon: Zap,
    color: "from-cyan-500 to-blue-500",
  },
  {
    year: "2024",
    title: "Industry Recognition",
    description: "Received multiple awards for excellence in web development and digital innovation.",
    icon: Award,
    color: "from-yellow-500 to-orange-500",
  },
]

export function Timeline() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="neon-text">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From a small startup to a recognized leader in technology solutions, here's how we've grown and evolved.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[var(--neon-cyan)] to-[var(--neon-green)] opacity-30" />

          {timelineEvents.map((event, index) => (
            <TimelineItem key={event.year} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ event, index }: { event: (typeof timelineEvents)[0]; index: number }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center mb-12 ${isEven ? "flex-row" : "flex-row-reverse"}`}
    >
      {/* Content */}
      <div className={`w-5/12 ${isEven ? "pr-8 text-right" : "pl-8 text-left"}`}>
        <motion.div whileHover={{ scale: 1.02, y: -5 }} className="glass-card rounded-xl p-6 glow-hover">
          <div className={`flex items-center mb-3 ${isEven ? "justify-end" : "justify-start"}`}>
            <Calendar className="w-4 h-4 text-[var(--neon-cyan)] mr-2" />
            <span className="text-sm font-semibold text-[var(--neon-cyan)]">{event.year}</span>
          </div>
          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{event.description}</p>
        </motion.div>
      </div>

      {/* Center icon */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
          className="w-16 h-16 rounded-full neon-gradient flex items-center justify-center shadow-lg animate-glow"
        >
          <event.icon className="w-8 h-8 text-white" />
        </motion.div>
      </div>

      {/* Empty space on the other side */}
      <div className="w-5/12" />
    </motion.div>
  )
}

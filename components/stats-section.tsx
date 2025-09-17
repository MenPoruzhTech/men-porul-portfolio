"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

const stats = [
  { number: 150, suffix: "+", label: "Projects Completed" },
  { number: 50, suffix: "+", label: "Happy Clients" },
  { number: 5, suffix: "+", label: "Years Experience" },
  { number: 99, suffix: "%", label: "Client Satisfaction" },
]

function AnimatedNumber({ number, suffix, inView }: { number: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (inView) {
      const timer = setInterval(() => {
        setCount((prev) => {
          if (prev < number) {
            return Math.min(prev + Math.ceil(number / 50), number)
          }
          return number
        })
      }, 50)

      return () => clearInterval(timer)
    }
  }, [inView, number])

  return (
    <span className="text-4xl sm:text-5xl font-bold neon-text">
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="neon-text">Impact</span> in Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These numbers represent our commitment to excellence and the trust our clients place in us.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="glass-card rounded-xl p-6 glow-hover">
                <AnimatedNumber number={stat.number} suffix={stat.suffix} inView={inView} />
                <p className="text-muted-foreground mt-2 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

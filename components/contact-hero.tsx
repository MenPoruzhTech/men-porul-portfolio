"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactHero() {
  return (
    <section className="pt-24 pb-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Get In <span className="neon-text">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as soon as
            possible.
          </p>
        </motion.div>

        {/* Quick contact info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Mail,
              title: "Email Us",
              info: "contact@menporuzh.tech",
              description: "Send us an email anytime",
            },
            {
              icon: Phone,
              title: "Call Us",
              info: "+1 (555) 123-4567",
              description: "Mon-Fri from 8am to 6pm",
            },
            {
              icon: MapPin,
              title: "Visit Us",
              info: "123 Tech Street, Innovation City",
              description: "Our office location",
            },
            {
              icon: Clock,
              title: "Response Time",
              info: "Within 24 hours",
              description: "We respond quickly",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="text-center"
            >
              <div className="glass-card rounded-xl p-6 glow-hover">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg neon-gradient mb-4 mx-auto">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-[var(--neon-cyan)] font-medium mb-1">{item.info}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

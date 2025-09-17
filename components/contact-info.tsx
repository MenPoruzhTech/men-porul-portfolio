"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-bold mb-4">
          Let's Start a <span className="neon-text">Conversation</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          We're here to help bring your ideas to life. Whether you have a specific project in mind or just want to
          explore possibilities, we'd love to hear from you.
        </p>
      </div>

      {/* Contact methods */}
      <div className="space-y-6">
        {[
          {
            icon: Mail,
            title: "Email",
            value: "contact@menporuzh.tech",
            description: "Drop us a line anytime",
            action: "mailto:contact@menporuzh.tech",
          },
          {
            icon: Phone,
            title: "Phone",
            value: "+1 (555) 123-4567",
            description: "Call us during business hours",
            action: "tel:+15551234567",
          },
          {
            icon: MapPin,
            title: "Office",
            value: "123 Tech Street, Innovation City, IC 12345",
            description: "Visit our headquarters",
            action: "https://maps.google.com",
          },
        ].map((contact, index) => (
          <motion.div
            key={contact.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex items-start space-x-4"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg neon-gradient flex-shrink-0">
              <contact.icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1">{contact.title}</h3>
              <a
                href={contact.action}
                className="text-[var(--neon-cyan)] hover:text-[var(--neon-green)] transition-colors font-medium"
              >
                {contact.value}
              </a>
              <p className="text-sm text-muted-foreground mt-1">{contact.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Business hours */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="glass-card rounded-xl p-6"
      >
        <div className="flex items-center mb-4">
          <Clock className="w-6 h-6 text-[var(--neon-cyan)] mr-3" />
          <h3 className="text-lg font-semibold">Business Hours</h3>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Monday - Friday</span>
            <span>8:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Saturday</span>
            <span>9:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Sunday</span>
            <span>Closed</span>
          </div>
        </div>
      </motion.div>

      {/* Quick actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-semibold">Prefer Other Ways?</h3>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button className="neon-gradient text-white glow-hover flex-1">
            <MessageCircle className="w-4 h-4 mr-2" />
            Live Chat
          </Button>
          <Button
            variant="outline"
            className="border-[var(--neon-cyan)] text-[var(--neon-cyan)] hover:bg-[var(--neon-cyan)] hover:text-white bg-transparent flex-1"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Call
          </Button>
        </div>
      </motion.div>
    </motion.div>
  )
}

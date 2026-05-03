"use client"

import { Mail, Phone, MapPin, Clock } from "lucide-react"

const contactItems = [
  {
    icon: Mail,
    title: "Email Us",
    info: "contact@menporuzhtech.com",
    description: "Send us an email anytime",
  },
  {
    icon: Phone,
    title: "Call Us",
    info: "+91 63790 02566",
    description: "Mon-Fri from 9am to 6pm IST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    info: "Coimbatore, Tamil Nadu",
    description: "Our development center",
  },
  {
    icon: Clock,
    title: "Response Time",
    info: "Within 24 hours",
    description: "We respond quickly",
  },
]

export function ContactHero() {
  return (
    <section className="pt-24 pb-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Get In <span className="neon-text">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? As a startup, we're excited to work with you and grow together. 
            Send us a message and we'll respond quickly with startup-friendly solutions.
          </p>
        </div>

        {/* Quick Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item) => (
            <div
              key={item.title}
              className="text-center transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
            >
              <div className="glass-card rounded-xl p-6 glow-hover">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg neon-gradient mb-4 mx-auto">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-[var(--neon-cyan)] font-medium mb-1">{item.info}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

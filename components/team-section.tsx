"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    image: "/professional-ceo-headshot.png",
    bio: "Visionary leader with 10+ years in tech industry, passionate about innovation and digital transformation.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    image: "/professional-cto-headshot.jpg",
    bio: "Technical expert specializing in scalable architectures and emerging technologies like AI and blockchain.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Michael Rodriguez",
    role: "Lead Developer",
    image: "/professional-developer-headshot.png",
    bio: "Full-stack developer with expertise in React, Node.js, and cloud technologies. Loves clean code.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Emily Davis",
    role: "UX/UI Designer",
    image: "/professional-designer-headshot.png",
    bio: "Creative designer focused on user-centered design and creating beautiful, intuitive digital experiences.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
]

export function TeamSection() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Meet Our <span className="neon-text">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of experts brings together years of experience, creativity, and passion for technology to
            deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="glass-card rounded-xl p-6 text-center glow-hover">
                <div className="relative mb-4">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--neon-cyan)]/20 to-[var(--neon-green)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="text-xl font-semibold mb-1 group-hover:text-[var(--neon-cyan)] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[var(--neon-cyan)] font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>

                <div className="flex justify-center space-x-3">
                  {[
                    { icon: Linkedin, href: member.social.linkedin },
                    { icon: Twitter, href: member.social.twitter },
                    { icon: Github, href: member.social.github },
                  ].map((social) => (
                    <motion.a
                      key={social.href}
                      href={social.href}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-lg glass-card glow-hover"
                    >
                      <social.icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, User } from "lucide-react"
import { useState, useEffect } from "react"

const teamMembers = [
  {
    name: "Shankar",
    role: "Senior Full Stack Developer",
    icon: User,
    bio: "Senior developer with strong expertise in Next.js and React.js, building scalable web applications with modern architectures.",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Sathish Kumar",
    role: "Full Stack Developer & Mobile App Developer",
    icon: User,
    bio: "Full-stack developer skilled in Next.js and React, with hands-on experience in building cross-platform mobile and web solutions.",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Karthi Keyan",
    role: "Senior Frontend Developer & Full Stack Developer",
    icon: User,
    bio: "Frontend expert with deep knowledge in .NET, HTML, CSS, and advanced React/Next.js, delivering seamless and modern user experiences.",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Pandi Kumar",
    role: "Full Stack Developer",
    icon: User,
    bio: "Full-stack developer specializing in Python Django for backend and HTML/CSS for frontend, creating robust and clean web applications.",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Kesavamoorthy",
    role: "iOS Developer & Full Stack Developer",
    icon: User,
    bio: "iOS developer with expertise in native iOS apps and strong skills in Next.js for full-stack development, blending mobile and web solutions.",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Mahalakshmi",
    role: "UI/UX Designer",
    icon: User,
    bio: "Creative UI/UX designer passionate about crafting intuitive, user-friendly interfaces and enhancing digital experiences.",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Sinduja",
    role: "SEO & SMO Specialist",
    icon: User,
    bio: "Digital marketing strategist skilled in SEO and social media optimization, driving online visibility and brand engagement.",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Hariharan",
    role: "QA Tester",
    icon: User,
    bio: "Quality assurance tester dedicated to ensuring bug-free, high-performance applications through thorough testing and validation.",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
];

export function TeamSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: isMobile ? 0.5 : 0.8 }}
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
              initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: isMobile ? 0.4 : 0.6, delay: isMobile ? index * 0.05 : index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group h-full"
            >
              <div className="glass-card rounded-xl p-6 text-center glow-hover h-full flex flex-col justify-between">
                <div className="relative mb-4">
                <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      className="w-24 h-24 rounded-full mx-auto flex items-center justify-center bg-gray-100"
    >
      <member.icon className="w-16 h-16 text-blue-600" />
    </motion.div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--neon-cyan)]/20 to-[var(--neon-green)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="text-xl font-semibold mb-1 group-hover:text-[var(--neon-cyan)] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[var(--neon-cyan)] font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">{member.bio}</p>

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

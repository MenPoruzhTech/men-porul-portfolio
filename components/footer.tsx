"use client"

import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Instagram, X } from "lucide-react"
import Link from "next/link"
import { ThemeLogo } from "@/components/theme-logo"

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/menporuzh-tech-98185b38b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
  { icon: X, href: "https://x.com/MenPoruzhTech/status/1979852271052603847?t=2JaFe5GNGz7j8w1BkGIFjQ&s=19", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/menporuzhtech?igsh=cG1pYnZ1NWs5azRi", label: "Instagram" },
  { icon: Mail, href: "mailto:contact@menporuzhtech.com", label: "Email" },
]

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-background border-t border-orange-500/20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="logo-glow">
                <ThemeLogo width={32} height={32} alt="MenPoruzhTech Logo" />
              </div>
              <h3 className="text-2xl font-bold logo-text">MenPoruzhTech</h3>
            </div>
            <p className="text-muted-foreground max-w-md">
              Leading technology company specializing in innovative solutions, web development, mobile apps, and
              digital transformation services.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Saravanampatti, Coimbatore, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 89038 67201 / +91 63833 22670</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contact@menporuzhtech.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-[var(--brand-primary)] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg glass-card brand-glow-hover transition-transform duration-200 hover:scale-110 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MenPoruzhTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { motion } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useAnimation } from "@/contexts/animation-context"
import { EnhancedAnimation, StaggeredEnhanced, TypewriterText } from "@/components/enhanced-animations"
import { useState, useEffect } from "react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    company: "TechStart Inc.",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "MenPoruzhTech transformed our digital presence completely. Their innovative approach and attention to detail exceeded all our expectations. The team delivered exceptional results on time and within budget.",
    featured: true
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO, InnovateCorp",
    company: "InnovateCorp",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "Working with MenPoruzhTech was a game-changer for our business. Their technical expertise and creative solutions helped us scale our platform to serve millions of users worldwide.",
    featured: true
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager, FutureTech",
    company: "FutureTech",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "The team at MenPoruzhTech understands both technology and business needs. They delivered a solution that not only met our requirements but also provided insights we hadn't considered.",
    featured: false
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder, StartupXYZ",
    company: "StartupXYZ",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "From concept to launch, MenPoruzhTech guided us through every step. Their expertise in modern technologies and agile development practices made all the difference.",
    featured: false
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Director, GlobalTech",
    company: "GlobalTech",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "MenPoruzhTech's AI-powered solutions revolutionized our operations. The results speak for themselves - 40% increase in efficiency and significant cost savings.",
    featured: true
  },
  {
    id: 6,
    name: "James Wilson",
    role: "VP Engineering, CloudScale",
    company: "CloudScale",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "The cloud infrastructure solution provided by MenPoruzhTech is robust, scalable, and cost-effective. Their DevOps expertise helped us achieve 99.9% uptime.",
    featured: false
  }
]

const clientLogos = [
  { name: "TechStart", logo: "🚀" },
  { name: "InnovateCorp", logo: "💡" },
  { name: "FutureTech", logo: "🔮" },
  { name: "StartupXYZ", logo: "⭐" },
  { name: "GlobalTech", logo: "🌍" },
  { name: "CloudScale", logo: "☁️" }
]

export function TestimonialsSection() {
  const { isSubtle, isFlashy } = useAnimation()
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const featuredTestimonials = testimonials.filter(t => t.featured)

  // Auto-play testimonials
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % featuredTestimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, featuredTestimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % featuredTestimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <EnhancedAnimation type="fade" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold brand-text mb-4">
              {isFlashy ? (
                <TypewriterText text="What Our Clients Say" speed={60} />
              ) : (
                "What Our Clients Say"
              )}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {isFlashy ? (
                <TypewriterText 
                  text="Don't just take our word for it. Here's what our satisfied clients have to say about working with us." 
                  speed={25}
                />
              ) : (
                "Don't just take our word for it. Here's what our satisfied clients have to say about working with us."
              )}
            </p>
          </div>
        </EnhancedAnimation>

        {/* Featured Testimonial Carousel */}
        <EnhancedAnimation type="scale" delay={0.4}>
          <div className="relative mb-16">
            <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Quote Icon */}
                <motion.div
                  className="inline-block mb-6"
                  whileHover={{ 
                    scale: isFlashy ? 1.2 : 1.1,
                    rotate: isFlashy ? 360 : 0
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Quote className="w-12 h-12 text-[var(--brand-primary)]" />
                </motion.div>

                {/* Testimonial Text */}
                <blockquote className="text-xl md:text-2xl text-foreground mb-8 italic">
                  "{featuredTestimonials[currentTestimonial].text}"
                </blockquote>

                {/* Rating Stars */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(featuredTestimonials[currentTestimonial].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      whileHover={{ 
                        scale: isFlashy ? 1.3 : 1.2,
                        boxShadow: isFlashy ? "0 0 15px var(--brand-primary)" : "0 0 10px var(--brand-primary)"
                      }}
                    >
                      <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Client Info */}
                <div className="flex items-center justify-center space-x-4">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] flex items-center justify-center text-white font-bold text-xl"
                    whileHover={{ 
                      scale: isFlashy ? 1.1 : 1.05,
                      rotate: isFlashy ? 360 : 0
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {featuredTestimonials[currentTestimonial].name.charAt(0)}
                  </motion.div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg text-foreground">
                      {featuredTestimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-muted-foreground">
                      {featuredTestimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Navigation Arrows */}
              <motion.button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full glass-card hover:brand-glow-hover transition-all duration-300"
                whileHover={{ 
                  scale: isFlashy ? 1.2 : 1.1,
                  x: isFlashy ? -5 : -2
                }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6 text-[var(--brand-primary)]" />
              </motion.button>

              <motion.button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full glass-card hover:brand-glow-hover transition-all duration-300"
                whileHover={{ 
                  scale: isFlashy ? 1.2 : 1.1,
                  x: isFlashy ? 5 : 2
                }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6 text-[var(--brand-primary)]" />
              </motion.button>

              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-8">
                {featuredTestimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setCurrentTestimonial(index)
                      setIsAutoPlaying(false)
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-[var(--brand-primary)]"
                        : "bg-muted-foreground/30"
                    }`}
                    whileHover={{ 
                      scale: isFlashy ? 1.5 : 1.2,
                      boxShadow: isFlashy ? "0 0 10px var(--brand-primary)" : "0 0 5px var(--brand-primary)"
                    }}
                    whileTap={{ scale: 0.8 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </EnhancedAnimation>

        {/* All Testimonials Grid */}
        <StaggeredEnhanced
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          staggerDelay={0.1}
          type={isFlashy ? "bounce" : "scale"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              whileHover={{ 
                y: isFlashy ? -10 : -5,
                scale: isFlashy ? 1.05 : 1.02,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="glass-card p-6 rounded-xl hover:brand-glow-hover transition-all duration-300 h-full">
                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ 
                        scale: isFlashy ? 1.3 : 1.2,
                        boxShadow: isFlashy ? "0 0 10px var(--brand-primary)" : "0 0 5px var(--brand-primary)"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground mb-6 text-sm">
                  "{testimonial.text}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] flex items-center justify-center text-white font-semibold text-sm"
                    whileHover={{ 
                      scale: isFlashy ? 1.2 : 1.1,
                      rotate: isFlashy ? 360 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {testimonial.name.charAt(0)}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground group-hover:brand-text transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggeredEnhanced>

        {/* Client Logos */}
        <EnhancedAnimation type="fade" delay={0.6}>
          <div className="text-center">
            <h3 className="text-2xl font-semibold brand-text mb-8">
              {isFlashy ? (
                <TypewriterText text="Trusted by Leading Companies" speed={50} />
              ) : (
                "Trusted by Leading Companies"
              )}
            </h3>
            
            <div className="flex flex-wrap justify-center items-center gap-8">
              {clientLogos.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: isFlashy ? [0.68, -0.55, 0.265, 1.55] : "easeOut"
                  }}
                  whileHover={{ 
                    scale: isFlashy ? 1.2 : 1.1,
                    y: isFlashy ? -10 : -5,
                    rotate: isFlashy ? 360 : 0
                  }}
                  className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:glass-card transition-all duration-300 cursor-pointer"
                >
                  <div className="text-4xl">{client.logo}</div>
                  <span className="text-sm text-muted-foreground font-medium">
                    {client.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </EnhancedAnimation>
      </div>
    </section>
  )
}

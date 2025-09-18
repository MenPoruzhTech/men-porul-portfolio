"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Check, X, AlertCircle, Mail, Phone, MapPin, Clock } from "lucide-react"
import { useAnimation } from "@/contexts/animation-context"
import { EnhancedAnimation, TypewriterText } from "@/components/enhanced-animations"

interface FormData {
  name: string
  email: string
  company: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function EnhancedContactForm() {
  const { isSubtle, isFlashy } = useAnimation()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: ""
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [shakeForm, setShakeForm] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      if (isFlashy) {
        setShakeForm(true)
        setTimeout(() => setShakeForm(false), 500)
      }
      return
    }

    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@menporuzhtech.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "123 Tech Street, Innovation City",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Mon-Fri 9AM-6PM",
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <EnhancedAnimation type="fade" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold brand-text mb-4">
              {isFlashy ? (
                <TypewriterText text="Get In Touch" speed={60} />
              ) : (
                "Get In Touch"
              )}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {isFlashy ? (
                <TypewriterText 
                  text="Ready to start your next project? Let's discuss how we can help bring your ideas to life." 
                  speed={25}
                />
              ) : (
                "Ready to start your next project? Let's discuss how we can help bring your ideas to life."
              )}
            </p>
          </div>
        </EnhancedAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <EnhancedAnimation type="slide" delay={0.4} direction="left">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold brand-text mb-6">
                {isFlashy ? (
                  <TypewriterText text="Contact Information" speed={50} />
                ) : (
                  "Contact Information"
                )}
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      x: isFlashy ? 10 : 5,
                      scale: isFlashy ? 1.02 : 1.01
                    }}
                    className="flex items-center space-x-4 p-4 rounded-lg glass-card hover:brand-glow-hover transition-all duration-300"
                  >
                    <motion.div
                      className={`p-3 rounded-full bg-gradient-to-r ${info.color}`}
                      whileHover={{ 
                        scale: isFlashy ? 1.2 : 1.1,
                        rotate: isFlashy ? 360 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.label}</h4>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </EnhancedAnimation>

          {/* Contact Form */}
          <EnhancedAnimation type="slide" delay={0.6} direction="right">
            <motion.div
              animate={shakeForm ? { x: [-10, 10, -10, 10, 0] } : {}}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 rounded-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <motion.input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                      errors.name
                        ? "border-red-500 bg-red-50/10"
                        : "border-border bg-background/50 focus:border-[var(--brand-primary)] focus:bg-background"
                    }`}
                    placeholder="Enter your full name"
                    whileFocus={{ 
                      scale: isFlashy ? 1.02 : 1.01,
                      boxShadow: isFlashy ? "0 0 20px var(--brand-primary)" : "0 0 10px var(--brand-primary)"
                    }}
                  />
                  <AnimatePresence>
                    {errors.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center space-x-2 mt-2 text-red-500 text-sm"
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.name}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <motion.input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                      errors.email
                        ? "border-red-500 bg-red-50/10"
                        : "border-border bg-background/50 focus:border-[var(--brand-primary)] focus:bg-background"
                    }`}
                    placeholder="Enter your email address"
                    whileFocus={{ 
                      scale: isFlashy ? 1.02 : 1.01,
                      boxShadow: isFlashy ? "0 0 20px var(--brand-primary)" : "0 0 10px var(--brand-primary)"
                    }}
                  />
                  <AnimatePresence>
                    {errors.email && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center space-x-2 mt-2 text-red-500 text-sm"
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.email}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Company Field */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <motion.input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:border-[var(--brand-primary)] focus:bg-background transition-all duration-300"
                    placeholder="Enter your company name"
                    whileFocus={{ 
                      scale: isFlashy ? 1.02 : 1.01,
                      boxShadow: isFlashy ? "0 0 20px var(--brand-primary)" : "0 0 10px var(--brand-primary)"
                    }}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <motion.textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 resize-none ${
                      errors.message
                        ? "border-red-500 bg-red-50/10"
                        : "border-border bg-background/50 focus:border-[var(--brand-primary)] focus:bg-background"
                    }`}
                    placeholder="Tell us about your project..."
                    whileFocus={{ 
                      scale: isFlashy ? 1.02 : 1.01,
                      boxShadow: isFlashy ? "0 0 20px var(--brand-primary)" : "0 0 10px var(--brand-primary)"
                    }}
                  />
                  <AnimatePresence>
                    {errors.message && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center space-x-2 mt-2 text-red-500 text-sm"
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.message}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 relative overflow-hidden ${
                    isFlashy
                      ? "neon-gradient text-white shadow-lg hover:shadow-xl"
                      : "bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary)]/90"
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                  whileHover={{ 
                    scale: isFlashy ? 1.05 : 1.02,
                    y: isFlashy ? -2 : -1
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center space-x-2"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>Sending...</span>
                      </motion.div>
                    ) : submitStatus === 'success' ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center justify-center space-x-2"
                      >
                        <Check className="w-5 h-5" />
                        <span>Message Sent!</span>
                      </motion.div>
                    ) : submitStatus === 'error' ? (
                      <motion.div
                        key="error"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center justify-center space-x-2"
                      >
                        <X className="w-5 h-5" />
                        <span>Error - Try Again</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="default"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center space-x-2"
                      >
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>
            </motion.div>
          </EnhancedAnimation>
        </div>
      </div>
    </section>
  )
}

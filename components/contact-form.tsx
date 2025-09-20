"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  service: string
  budget: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          budget: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="glass-card rounded-xl p-8 glow-hover">
        <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center"
          >
            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
            <span className="text-green-500">Message sent successfully! We'll get back to you soon.</span>
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center"
          >
            <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
            <span className="text-red-500">Failed to send message. Please try again.</span>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FloatingLabelInput
              name="name"
              label="Full Name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              focused={focusedField === "name"}
              error={errors.name}
              required
            />
            <FloatingLabelInput
              name="email"
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              focused={focusedField === "email"}
              error={errors.email}
              required
            />
          </div>

          {/* Company and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FloatingLabelInput
              name="company"
              label="Company Name"
              type="text"
              value={formData.company}
              onChange={handleInputChange}
              onFocus={() => setFocusedField("company")}
              onBlur={() => setFocusedField(null)}
              focused={focusedField === "company"}
            />
            <FloatingLabelInput
              name="phone"
              label="Phone Number"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              onFocus={() => setFocusedField("phone")}
              onBlur={() => setFocusedField(null)}
              focused={focusedField === "phone"}
            />
          </div>

          {/* Service and Budget */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FloatingLabelSelect
              name="service"
              label=""
              value={formData.service}
              onChange={handleInputChange}
              onFocus={() => setFocusedField("service")}
              onBlur={() => setFocusedField(null)}
              focused={focusedField === "service"}
              options={[
                { value: "", label: "Select a service" },
                { value: "web-development", label: "Web Development" },
                { value: "mobile-development", label: "Mobile App Development" },
                { value: "digital-transformation", label: "Digital Transformation" },
                { value: "consulting", label: "Technology Consulting" },
                { value: "other", label: "Other" },
              ]}
            />
            <FloatingLabelSelect
              name="budget"
              label=""
              value={formData.budget}
              onChange={handleInputChange}
              onFocus={() => setFocusedField("budget")}
              onBlur={() => setFocusedField(null)}
              focused={focusedField === "budget"}
              options={[
                { value: "", label: "Select budget range" },
                { value: "under-4l", label: "Under ₹4,00,000" },
                { value: "4l-12l", label: "₹4,00,000 - ₹12,00,000" },
                { value: "12l-40l", label: "₹12,00,000 - ₹40,00,000" },
                { value: "40l-plus", label: "₹40,00,000+" },
                { value: "discuss", label: "Let's discuss" },
              ]}
            />
          </div>

          {/* Message */}
          <FloatingLabelTextarea
            name="message"
            label="Project Details"
            value={formData.message}
            onChange={handleInputChange}
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField(null)}
            focused={focusedField === "message"}
            error={errors.message}
            required
            rows={4}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-white font-semibold py-3 logo-glow-hover disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #00CED1, #FF8C00)',
              borderRadius: '8px'
            }}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Sending...
              </div>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </div>
    </motion.div>
  )
}

// Floating Label Input Component
function FloatingLabelInput({
  name,
  label,
  type,
  value,
  onChange,
  onFocus,
  onBlur,
  focused,
  error,
  required = false,
}: {
  name: string
  label: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus: () => void
  onBlur: () => void
  focused: boolean
  error?: string
  required?: boolean
}) {
  const hasValue = value.length > 0
  const shouldFloat = focused || hasValue

  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`w-full px-4 pt-6 pb-2 glass-card rounded-lg border-2 transition-all duration-200 bg-transparent focus:outline-none ${
          error
            ? "border-red-500/50 focus:border-red-500"
            : focused
              ? "border-pink-500 glow-hover"
              : "border-border hover:border-pink-500/50"
        }`}
        required={required}
      />
      <label
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          shouldFloat ? "top-2 text-xs text-teal-500" : "top-1/2 -translate-y-1/2 text-muted-foreground"
        }`}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}

// Floating Label Select Component
function FloatingLabelSelect({
  name,
  label,
  value,
  onChange,
  onFocus,
  onBlur,
  focused,
  options,
}: {
  name: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  onFocus: () => void
  onBlur: () => void
  focused: boolean
  options: { value: string; label: string }[]
}) {
  const hasValue = value.length > 0 && value !== "" && value !== options[0]?.value
  const shouldFloat = focused || hasValue

  return (
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`w-full px-4 pt-7 pb-3 glass-card rounded-lg border-2 transition-all duration-200 bg-background focus:outline-none appearance-none cursor-pointer ${
          focused ? "border-teal-500 glow-hover" : "border-border hover:border-teal-500/50"
        }`}
      >
        {options.map((option, index) => (
          <option 
            key={option.value} 
            value={option.value} 
            disabled={index === 0}
            className={`py-2 ${
              index === 0 
                ? "bg-background text-muted-foreground" 
                : "bg-background text-foreground"
            }`}
          >
            {option.label}
          </option>
        ))}
      </select>
      <label
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          shouldFloat 
            ? "top-2 text-xs text-teal-500 font-medium" 
            : "top-1/2 -translate-y-1/2 text-muted-foreground text-sm"
        }`}
      >
        {label}
      </label>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  )
}

// Floating Label Textarea Component
function FloatingLabelTextarea({
  name,
  label,
  value,
  onChange,
  onFocus,
  onBlur,
  focused,
  error,
  required = false,
  rows = 4,
}: {
  name: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onFocus: () => void
  onBlur: () => void
  focused: boolean
  error?: string
  required?: boolean
  rows?: number
}) {
  const hasValue = value.length > 0
  const shouldFloat = focused || hasValue

  return (
    <div className="relative">
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        rows={rows}
        className={`w-full px-4 pt-6 pb-2 glass-card rounded-lg border-2 transition-all duration-200 bg-transparent focus:outline-none resize-none ${
          error
            ? "border-red-500/50 focus:border-red-500"
            : focused
              ? "border-pink-500 glow-hover"
              : "border-border hover:border-pink-500/50"
        }`}
        required={required}
      />
      <label
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          shouldFloat ? "top-2 text-xs text-teal-500" : "top-6 text-muted-foreground"
        }`}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}

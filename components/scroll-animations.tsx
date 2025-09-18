"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  distance?: number
}

export function ScrollAnimation({ 
  children, 
  className = "", 
  delay = 0, 
  direction = "up", 
  distance = 50 
}: ScrollAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px 0px -100px 0px" 
  })

  const directionVariants = {
    up: { y: distance, opacity: 0 },
    down: { y: -distance, opacity: 0 },
    left: { x: distance, opacity: 0 },
    right: { x: -distance, opacity: 0 },
  }

  const animateVariants = {
    up: { y: 0, opacity: 1 },
    down: { y: 0, opacity: 1 },
    left: { x: 0, opacity: 1 },
    right: { x: 0, opacity: 1 },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={directionVariants[direction]}
      animate={isInView ? animateVariants[direction] : directionVariants[direction]}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  )
}

// Staggered animation for multiple children
interface StaggeredAnimationProps {
  children: React.ReactNode[]
  className?: string
  staggerDelay?: number
  direction?: "up" | "down" | "left" | "right"
  distance?: number
}

export function StaggeredAnimation({ 
  children, 
  className = "", 
  staggerDelay = 0.1, 
  direction = "up", 
  distance = 30 
}: StaggeredAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-50px 0px -50px 0px" 
  })

  const directionVariants = {
    up: { y: distance, opacity: 0 },
    down: { y: -distance, opacity: 0 },
    left: { x: distance, opacity: 0 },
    right: { x: -distance, opacity: 0 },
  }

  const animateVariants = {
    up: { y: 0, opacity: 1 },
    down: { y: 0, opacity: 1 },
    left: { x: 0, opacity: 1 },
    right: { x: 0, opacity: 1 },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: directionVariants[direction],
            visible: animateVariants[direction],
          }}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

// Scale animation for cards and elements
interface ScaleAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
  scale?: number
}

export function ScaleAnimation({ 
  children, 
  className = "", 
  delay = 0, 
  scale = 0.8 
}: ScaleAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-50px 0px -50px 0px" 
  })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ scale: scale, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: scale, opacity: 0 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  )
}

// Fade animation for text and content
interface FadeAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function FadeAnimation({ 
  children, 
  className = "", 
  delay = 0 
}: FadeAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-50px 0px -50px 0px" 
  })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  )
}

"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { useAnimation } from "@/contexts/animation-context"

interface EnhancedAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  distance?: number
  type?: "fade" | "slide" | "scale" | "flip" | "bounce"
}

export function EnhancedAnimation({ 
  children, 
  className = "", 
  delay = 0, 
  direction = "up", 
  distance = 50,
  type = "fade"
}: EnhancedAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px 0px -100px 0px" 
  })
  const { isSubtle, isFlashy } = useAnimation()

  const getAnimationVariants = () => {
    if (isSubtle) {
      // Corporate subtle animations
      switch (type) {
        case "fade":
          return {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.6, delay, ease: "easeOut" }
          }
        case "slide":
          const directionVariants = {
            up: { y: distance, opacity: 0 },
            down: { y: -distance, opacity: 0 },
            left: { x: distance, opacity: 0 },
            right: { x: -distance, opacity: 0 },
          }
          return {
            initial: directionVariants[direction],
            animate: { y: 0, x: 0, opacity: 1 },
            transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }
          }
        case "scale":
          return {
            initial: { scale: 0.95, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { duration: 0.5, delay, ease: "easeOut" }
          }
        default:
          return {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay, ease: "easeOut" }
          }
      }
    } else {
      // Startup flashy animations
      switch (type) {
        case "fade":
          return {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            transition: { 
              duration: 0.8, 
              delay, 
              ease: [0.68, -0.55, 0.265, 1.55],
              type: "spring",
              stiffness: 100
            }
          }
        case "slide":
          const directionVariants = {
            up: { y: distance * 1.5, opacity: 0, scale: 0.9 },
            down: { y: -distance * 1.5, opacity: 0, scale: 0.9 },
            left: { x: distance * 1.5, opacity: 0, scale: 0.9 },
            right: { x: -distance * 1.5, opacity: 0, scale: 0.9 },
          }
          return {
            initial: directionVariants[direction],
            animate: { y: 0, x: 0, opacity: 1, scale: 1 },
            transition: { 
              duration: 0.8, 
              delay, 
              ease: [0.68, -0.55, 0.265, 1.55],
              type: "spring",
              stiffness: 80
            }
          }
        case "scale":
          return {
            initial: { scale: 0, opacity: 0, rotate: -180 },
            animate: { scale: 1, opacity: 1, rotate: 0 },
            transition: { 
              duration: 0.8, 
              delay, 
              ease: [0.68, -0.55, 0.265, 1.55],
              type: "spring",
              stiffness: 120
            }
          }
        case "flip":
          return {
            initial: { rotateY: -90, opacity: 0 },
            animate: { rotateY: 0, opacity: 1 },
            transition: { 
              duration: 0.8, 
              delay, 
              ease: [0.68, -0.55, 0.265, 1.55]
            }
          }
        case "bounce":
          return {
            initial: { y: -100, opacity: 0, scale: 0.5 },
            animate: { y: 0, opacity: 1, scale: 1 },
            transition: { 
              duration: 1, 
              delay, 
              ease: [0.68, -0.55, 0.265, 1.55],
              type: "spring",
              stiffness: 200,
              damping: 10
            }
          }
        default:
          return {
            initial: { opacity: 0, y: 50, scale: 0.8 },
            animate: { opacity: 1, y: 0, scale: 1 },
            transition: { 
              duration: 0.8, 
              delay, 
              ease: [0.68, -0.55, 0.265, 1.55],
              type: "spring",
              stiffness: 100
            }
          }
      }
    }
  }

  const animationProps = getAnimationVariants()

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={animationProps.initial}
      animate={isInView ? animationProps.animate : animationProps.initial}
      transition={animationProps.transition}
    >
      {children}
    </motion.div>
  )
}

// Staggered animation with enhanced effects
interface StaggeredEnhancedProps {
  children: React.ReactNode[]
  className?: string
  staggerDelay?: number
  direction?: "up" | "down" | "left" | "right"
  distance?: number
  type?: "fade" | "slide" | "scale" | "flip" | "bounce"
}

export function StaggeredEnhanced({ 
  children, 
  className = "", 
  staggerDelay = 0.1, 
  direction = "up", 
  distance = 30,
  type = "fade"
}: StaggeredEnhancedProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-50px 0px -50px 0px" 
  })
  const { isSubtle, isFlashy } = useAnimation()

  const getStaggerVariants = () => {
    if (isSubtle) {
      return {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }
    } else {
      return {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay * 0.5, // Faster for flashy
            delayChildren: 0.1,
          },
        },
      }
    }
  }

  const getChildVariants = () => {
    if (isSubtle) {
      switch (type) {
        case "fade":
          return {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }
        case "slide":
          const directionVariants = {
            up: { y: distance, opacity: 0 },
            down: { y: -distance, opacity: 0 },
            left: { x: distance, opacity: 0 },
            right: { x: -distance, opacity: 0 },
          }
          return {
            hidden: directionVariants[direction],
            visible: { y: 0, x: 0, opacity: 1 }
          }
        case "scale":
          return {
            hidden: { scale: 0.8, opacity: 0 },
            visible: { scale: 1, opacity: 1 }
          }
        default:
          return {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }
      }
    } else {
      switch (type) {
        case "fade":
          return {
            hidden: { opacity: 0, scale: 0.5 },
            visible: { opacity: 1, scale: 1 }
          }
        case "slide":
          const directionVariants = {
            up: { y: distance * 2, opacity: 0, scale: 0.8 },
            down: { y: -distance * 2, opacity: 0, scale: 0.8 },
            left: { x: distance * 2, opacity: 0, scale: 0.8 },
            right: { x: -distance * 2, opacity: 0, scale: 0.8 },
          }
          return {
            hidden: directionVariants[direction],
            visible: { y: 0, x: 0, opacity: 1, scale: 1 }
          }
        case "scale":
          return {
            hidden: { scale: 0, opacity: 0, rotate: -45 },
            visible: { scale: 1, opacity: 1, rotate: 0 }
          }
        case "flip":
          return {
            hidden: { rotateY: -90, opacity: 0 },
            visible: { rotateY: 0, opacity: 1 }
          }
        case "bounce":
          return {
            hidden: { y: -50, opacity: 0, scale: 0.3 },
            visible: { y: 0, opacity: 1, scale: 1 }
          }
        default:
          return {
            hidden: { opacity: 0, y: 30, scale: 0.8 },
            visible: { opacity: 1, y: 0, scale: 1 }
          }
      }
    }
  }

  const staggerVariants = getStaggerVariants()
  const childVariants = getChildVariants()

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerVariants}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={childVariants}
          transition={{
            duration: isSubtle ? 0.5 : 0.8,
            ease: isSubtle ? "easeOut" : [0.68, -0.55, 0.265, 1.55],
            type: isFlashy ? "spring" : "tween",
            stiffness: isFlashy ? 100 : undefined,
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

// Typewriter effect for flashy style
export function TypewriterText({ 
  text, 
  className = "",
  speed = 50 
}: { 
  text: string
  className?: string
  speed?: number 
}) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const { isFlashy } = useAnimation()

  useEffect(() => {
    if (!isFlashy) {
      setDisplayedText(text)
      return
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed, isFlashy])

  return (
    <span className={className}>
      {displayedText}
      {isFlashy && currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-0.5 h-6 bg-[var(--brand-primary)] ml-1"
        />
      )}
    </span>
  )
}

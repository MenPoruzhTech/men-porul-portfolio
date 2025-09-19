"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

interface MobileResponsiveAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  distance?: number
  type?: "fade" | "slide" | "scale"
}

export function MobileResponsiveAnimation({ 
  children, 
  className = "", 
  delay = 0, 
  direction = "up", 
  distance = 50,
  type = "fade"
}: MobileResponsiveAnimationProps) {
  const ref = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px 0px -100px 0px" 
  })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const getAnimationVariants = () => {
    // For mobile, use simpler animations
    if (isMobile) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.4, delay, ease: "easeOut" }
      }
    }

    // For desktop, use the original animations
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

// Mobile-responsive staggered animation
interface MobileResponsiveStaggeredProps {
  children: React.ReactNode[]
  className?: string
  staggerDelay?: number
  direction?: "up" | "down" | "left" | "right"
  distance?: number
  type?: "fade" | "slide" | "scale"
}

export function MobileResponsiveStaggered({ 
  children, 
  className = "", 
  staggerDelay = 0.1, 
  direction = "up", 
  distance = 30,
  type = "fade"
}: MobileResponsiveStaggeredProps) {
  const ref = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-50px 0px -50px 0px" 
  })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const getStaggerVariants = () => {
    return {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: isMobile ? staggerDelay * 0.5 : staggerDelay, // Faster on mobile
        },
      },
    }
  }

  const getChildVariants = () => {
    // For mobile, use simpler animations
    if (isMobile) {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }
    }

    // For desktop, use the original animations
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
            duration: isMobile ? 0.3 : 0.5, // Faster on mobile
            ease: "easeOut",
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

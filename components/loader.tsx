"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface LoaderProps {
  isLoading: boolean
  message?: string
  size?: "sm" | "md" | "lg"
  fullScreen?: boolean
}

export function Loader({ 
  isLoading, 
  message = "Loading...", 
  size = "md", 
  fullScreen = false 
}: LoaderProps) {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-30 h-30", 
    lg: "w-32 h-32"
  }

  const containerClasses = fullScreen 
    ? "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
    : "flex items-center justify-center p-4"

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={containerClasses}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex flex-col items-center space-y-4"
          >
            {/* Animated GIF with glow effect */}
            <div className={`relative ${sizeClasses[size]} logo-glow`}>
              <Image
                src="/gif/Loader.gif"
                alt="Loading..."
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Loading message */}
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-sm font-medium text-muted-foreground"
            >
              {message}
            </motion.p>
            
            {/* Loading dots animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="flex space-x-1"
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)]"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Full screen page loader component
export function PageLoader({ isLoading }: { isLoading: boolean }) {
  return (
    <Loader 
      isLoading={isLoading} 
      message="Loading MenPoruzhTech..." 
      size="lg" 
      fullScreen={true} 
    />
  )
}

// Inline loader for components
export function InlineLoader({ isLoading, message = "Loading..." }: { isLoading: boolean; message?: string }) {
  return (
    <Loader 
      isLoading={isLoading} 
      message={message} 
      size="sm" 
      fullScreen={false} 
    />
  )
}

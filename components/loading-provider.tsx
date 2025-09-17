"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  const [isRouteLoading, setIsRouteLoading] = useState(false)
  const pathname = usePathname()

  // Handle initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false)
    }, 2000) // Show loader for 2 seconds on initial load

    return () => clearTimeout(timer)
  }, [])

  // Handle route changes
  useEffect(() => {
    setIsRouteLoading(true)
    const timer = setTimeout(() => {
      setIsRouteLoading(false)
    }, 600) // Show loader for 600ms on route change

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      {/* Initial page loader */}
      <AnimatePresence>
        {isInitialLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center space-y-8"
            >
              {/* Animated GIF */}
              <motion.div
                className="relative w-80 h-80 logo-glow"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <Image
                  src="/gif/Loader.gif"
                  alt="MenPoruzhTech Loading..."
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
              
              {/* Company name with typewriter effect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center space-y-4"
              >
                <motion.h1
                  className="text-3xl font-bold brand-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  MenPoruzhTech
                </motion.h1>
                <motion.p
                  className="text-lg text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Innovative Technology Solutions
                </motion.p>
              </motion.div>
              
              {/* Loading progress */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="w-64 h-2 bg-muted rounded-full overflow-hidden"
              >
                <motion.div
                  className="h-full brand-gradient rounded-full"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Route transition loader */}
      <AnimatePresence>
        {isRouteLoading && !isInitialLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center space-y-4"
            >
              <motion.div
                className="relative w-80 h-80 logo-glow"
              >
                <Image
                  src="/gif/Loader.gif"
                  alt="Loading..."
                  fill
                  className="object-contain"
                />
              </motion.div>
              {/* <motion.p
                className="text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Loading...
              </motion.p> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className={isInitialLoading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        {children}
      </div>
    </>
  )
}

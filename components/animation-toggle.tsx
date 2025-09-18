"use client"

import { motion } from "framer-motion"
import { useAnimation } from "@/contexts/animation-context"
import { Building2, Zap } from "lucide-react"

export function AnimationToggle() {
  const { animationStyle, setAnimationStyle, isSubtle, isFlashy } = useAnimation()

  return (
    <div className="fixed top-20 right-4 z-50">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="glass-card p-2 rounded-full"
      >
        <div className="flex items-center space-x-1">
          <motion.button
            onClick={() => setAnimationStyle("corporate")}
            className={`flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isSubtle
                ? "bg-[var(--brand-primary)] text-white shadow-lg"
                : "text-muted-foreground hover:text-foreground"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Building2 className="w-4 h-4" />
            <span className="hidden sm:inline">Corporate</span>
          </motion.button>
          
          <motion.button
            onClick={() => setAnimationStyle("startup")}
            className={`flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isFlashy
                ? "bg-[var(--brand-primary)] text-white shadow-lg"
                : "text-muted-foreground hover:text-foreground"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="w-4 h-4" />
            <span className="hidden sm:inline">Startup</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

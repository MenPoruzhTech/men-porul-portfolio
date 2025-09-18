"use client"

import { createContext, useContext, useState, useEffect } from "react"

type AnimationStyle = "corporate" | "startup"

interface AnimationContextType {
  animationStyle: AnimationStyle
  setAnimationStyle: (style: AnimationStyle) => void
  isSubtle: boolean
  isFlashy: boolean
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined)

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [animationStyle, setAnimationStyle] = useState<AnimationStyle>("corporate")

  const isSubtle = animationStyle === "corporate"
  const isFlashy = animationStyle === "startup"

  // Save preference to localStorage
  useEffect(() => {
    const saved = localStorage.getItem("animationStyle") as AnimationStyle
    if (saved) {
      setAnimationStyle(saved)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("animationStyle", animationStyle)
  }, [animationStyle])

  return (
    <AnimationContext.Provider
      value={{
        animationStyle,
        setAnimationStyle,
        isSubtle,
        isFlashy,
      }}
    >
      {children}
    </AnimationContext.Provider>
  )
}

export function useAnimation() {
  const context = useContext(AnimationContext)
  if (context === undefined) {
    throw new Error("useAnimation must be used within an AnimationProvider")
  }
  return context
}

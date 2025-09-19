"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect, useState } from "react"
interface ThemeLogoProps {
  width?: number
  height?: number
  darkWidth?: number
  darkHeight?: number
  lightWidth?: number
  lightHeight?: number
  className?: string
  alt?: string
  priority?: boolean
}

export function ThemeLogo({ 
  width = 28, 
  height = 28, 
  darkWidth, 
  darkHeight, 
  lightWidth, 
  lightHeight, 
  className = "", 
  alt = "MenPoruzhTech Logo",
  priority = false 
}: ThemeLogoProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className={`relative ${className}`} style={{ width, height }} />
  }

  const isDark = resolvedTheme === "dark"
  const logoSrc = isDark ? "/bg-removed-logo.png" : "/bg-removed-for-light.png"

  const logoWidth = isDark ? darkWidth ?? width : lightWidth ?? width
  const logoHeight = isDark ? darkHeight ?? height : lightHeight ?? height

  return (
    <div className={`relative ${className}`} style={{ width: logoWidth, height: logoHeight }}>
      <Image
        src={logoSrc}
        alt={alt}
        fill
        className="object-contain transition-all duration-300"
        priority={priority}
      />
    </div>
  )
}

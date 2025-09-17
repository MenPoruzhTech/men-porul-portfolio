"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"

export function Breadcrumbs() {
  const pathname = usePathname()
  const pathSegments = pathname.split("/").filter((segment) => segment !== "")

  if (pathname === "/") return null

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    ...pathSegments.map((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/")
      const name = segment.charAt(0).toUpperCase() + segment.slice(1)
      return { name, href }
    }),
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 pb-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center"
            >
              {index > 0 && <ChevronRight className="w-4 h-4 text-muted-foreground mx-2" />}
              {index === 0 && <Home className="w-4 h-4 mr-2" />}
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-[var(--neon-cyan)] font-medium">{item.name}</span>
              ) : (
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-[var(--neon-cyan)] transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </motion.nav>
  )
}

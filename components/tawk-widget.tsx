"use client"

import Script from "next/script"
import { useEffect } from "react"

/**
 * Tawk.to chat widget with error isolation.
 * Suppresses internal Tawk errors that trigger Next.js error overlay.
 */
export function TawkWidget() {
  useEffect(() => {
    if (typeof window === "undefined") return

    const originalOnError = window.onerror
    window.onerror = function (message, source, lineno, colno, error) {
      if (typeof source === "string" && source.includes("tawk.to")) {
        return true
      }
      if (originalOnError) {
        return originalOnError(message, source, lineno, colno, error)
      }
      return false
    }

    const originalConsoleError = console.error
    console.error = function (...args: unknown[]) {
      const msg = args[0]
      if (msg === "Error: true" || msg === true) {
        return
      }
      if (typeof msg === "object" && msg !== null && "message" in msg && (msg as { message: unknown }).message === "true") {
        return
      }
      originalConsoleError.apply(console, args)
    }

    return () => {
      window.onerror = originalOnError
      console.error = originalConsoleError
    }
  }, [])

  return (
    <Script id="tawk-to" strategy="lazyOnload">
      {`
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
          try {
            var s1=document.createElement("script"),
            s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/69ab0e69847dcd1c37695132/1jj230j8o';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s1.onerror=function(){};
            s0.parentNode.insertBefore(s1,s0);
          } catch(e) {}
        })();
      `}
    </Script>
  )
}

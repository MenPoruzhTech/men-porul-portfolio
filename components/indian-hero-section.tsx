"use client";

import { ArrowRight, Play, Code, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SimpleAnimation } from "@/components/simple-animations";

export function IndianHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-orange-500/10 animate-pulse" />
      </div>

      {/* Logo tint */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-orange-500/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mt-25 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Content */}
          <div className="text-left">
            <SimpleAnimation type="fade" delay={0.2}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="logo-text">Building India's Digital Future</span>
              </h1>
            </SimpleAnimation>

            <SimpleAnimation type="slide" delay={0.4} direction="up">
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                We help businesses bring their digital ideas to life using modern technology, done in a smart, accurate, and effective way.
              </p>
            </SimpleAnimation>

            {/* Buttons */}
            <SimpleAnimation type="scale" delay={0.6}>
              <div className="flex flex-row flex-wrap gap-3 items-center justify-center sm:justify-start">
                {/* Button 1 */}
                <Link
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 text-sm sm:px-8 sm:py-4 sm:text-lg font-semibold transition-transform hover:scale-105 hover:-translate-y-1 text-white"
                  style={{
                    background: "linear-gradient(135deg, #00CED1, #FF8C00)",
                    borderRadius: "9999px",
                  }}
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>

                {/* Button 2 */}
                <Link
                  href="/portfolio"
                  className="inline-flex items-center px-4 py-2 text-sm sm:px-8 sm:py-4 sm:text-lg font-semibold border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 rounded-full"
                >
                  <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  <span>View Our Work</span>
                </Link>
              </div>
            </SimpleAnimation>

            {/* Icons */}
            <div className="mt-12 flex flex-wrap gap-6">
              {[
                { Icon: Code, label: "Development" },
                { Icon: Sparkles, label: "Innovation" },
                { Icon: ArrowRight, label: "Growth" },
              ].map(({ Icon, label }, i) => (
                <SimpleAnimation key={i} type="fade" delay={0.7 + i * 0.2}>
                  <div className="flex flex-col items-center space-y-2 p-4 rounded-lg glass-card hover:scale-110 hover:rotate-3 transition-transform cursor-pointer">
                    <Icon className="w-8 h-8 text-[var(--brand-primary)]" />
                    <span className="text-sm text-muted-foreground">{label}</span>
                  </div>
                </SimpleAnimation>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <SimpleAnimation type="fade" delay={0.4}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-2xl">
                <Image
                  src="/images/img16.png"
                  alt="Technology Innovation"
                  width={800}
                  height={800}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </SimpleAnimation>
        </div>
      </div>

  
    </section>
  );
}

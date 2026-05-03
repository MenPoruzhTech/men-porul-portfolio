"use client";

import { ArrowRight, Play, Code, Sparkles, TrendingUp } from "lucide-react";
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

            {/* Action Cards */}
            <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg lg:max-w-xl">
              {[
                { Icon: Code, label: "Development", gradient: "from-teal-500/10 to-transparent" },
                { Icon: Sparkles, label: "Innovation", gradient: "from-orange-500/10 to-transparent" },
                { Icon: TrendingUp, label: "Growth", gradient: "from-yellow-500/10 to-transparent" },
              ].map(({ Icon, label, gradient }, i) => (
                <SimpleAnimation key={i} type="scale" delay={0.8 + i * 0.1}>
                  <div className="group relative flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl glass-card transition-all duration-500 cursor-pointer overflow-hidden text-center hover:scale-105 hover:-translate-y-2 logo-glow-hover border-teal-500/20 hover:border-teal-500/50 h-full min-h-[120px] sm:min-h-[150px]">
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="mb-2 sm:mb-4 p-2 sm:p-3 rounded-xl bg-background/50 group-hover:bg-background/80 group-hover:scale-110 transition-all duration-500 shadow-sm border border-white/5">
                        <Icon className="w-5 h-5 sm:w-8 sm:h-8 text-[var(--brand-primary)] group-hover:text-[var(--brand-secondary)] transition-colors duration-500" />
                      </div>
                      <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-wider uppercase text-muted-foreground group-hover:text-foreground transition-all duration-500">{label}</span>
                    </div>
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

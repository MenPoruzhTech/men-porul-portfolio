"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

const products = [
  {
    name: "MenBill",
    tagline: "Smart Billing for Modern Businesses",
    description: "A comprehensive invoicing and billing solution designed to streamline financial workflows for startups and SMEs.",
    logo: "/images/products/menbill.png",
    accent: "from-teal-500/20 to-teal-500/5",
    border: "border-teal-500/20",
    glow: "shadow-[0_0_30px_rgba(0,206,209,0.15)]"
  },
  {
    name: "OoruLift",
    tagline: "Elevating Local Connectivity",
    description: "An innovative platform focused on optimizing local logistics and movement, bringing efficiency to community-driven services.",
    logo: "/images/products/oorulift.png",
    accent: "from-orange-500/20 to-orange-500/5",
    border: "border-orange-500/20",
    glow: "shadow-[0_0_30px_rgba(255,140,0,0.15)]"
  }
]

export function ProductsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-teal-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up [animation-delay:200ms]">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Valuable <span className="neon-text">Products</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Innovative solutions developed by <span className="text-foreground font-semibold">MenPoruzhTech</span> to solve real-world challenges and empower businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={`opacity-0 animate-fade-in-up`}
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className={`glass-card rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-2 group ${product.border} ${product.glow}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${product.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 relative p-2 rounded-xl bg-background/50 border border-white/10 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={product.logo}
                        alt={`${product.name} Logo`}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1 group-hover:neon-text transition-all duration-300">
                        {product.name}
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground/80 tracking-wide uppercase">
                        by MenPoruzhTech
                      </p>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold mb-3 text-foreground/90">
                    {product.tagline}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                    {product.description}
                  </p>

                  <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-background/50 border border-white/10 font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/20 group/btn">
                    <span>Know More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

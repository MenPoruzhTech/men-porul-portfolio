"use client"

import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const featuredPosts = [
  {
    title: "G Sale: Revolutionizing the Local Marketplace Experience",
    excerpt: "Exploring the journey of building a seamless, all-in-one marketplace for buying and selling property, vehicles, and electronics with the G Sale application.",
    image: "/images1/lift.png",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    tag: "Marketplace",
    accent: "from-teal-500/20 to-teal-500/5",
    border: "border-teal-500/20",
    glow: "shadow-[0_0_30px_rgba(0,206,209,0.15)]"
  },
  {
    title: "Empowering Small Businesses via MenBill POS Systems",
    excerpt: "How our modern billing solution and point-of-sale system is helping businesses scale operations and manage inventory with precision.",
    image: "/images1/mem.png",
    date: "Mar 18, 2024",
    readTime: "8 min read",
    tag: "FinTech",
    accent: "from-orange-500/20 to-orange-500/5",
    border: "border-orange-500/20",
    glow: "shadow-[0_0_30px_rgba(255,140,0,0.15)]"
  },
  {
    title: "Ooru Lift: The Community-Driven Urban Ride Sharing",
    excerpt: "A revolutionary app connecting people for shared rides, making urban travel affordable while helping bike owners earn money effortlessly on every trip.",
    image: "/images1/ooru-lift.png",
    date: "Mar 20, 2024",
    readTime: "6 min read",
    tag: "Mobility",
    accent: "from-indigo-500/20 to-indigo-500/5",
    border: "border-indigo-500/20",
    glow: "shadow-[0_0_30px_rgba(99,102,241,0.15)]"
  }
]

export function FeaturedBlogs() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-teal-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Featured <span className="neon-text">Stories</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Insights into our latest projects and the technology driving digital transformation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className={`glass-card rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-2 group border ${post.border} ${post.glow} bg-background/30`}
            >
              <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60`} />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-semibold bg-background/80 backdrop-blur-md border border-white/10 text-[var(--brand-primary)]">
                    {post.tag}
                  </span>
                </div>
              </div>

              <div className="relative z-10 p-5 sm:p-6 flex flex-col flex-grow">
                <div className={`absolute inset-0 bg-gradient-to-br ${post.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-3 text-[10px] sm:text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[var(--brand-primary)]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[var(--brand-primary)]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:neon-text transition-all duration-300 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

  )
}

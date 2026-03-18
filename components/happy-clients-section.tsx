import Image from "next/image"
import { SimpleAnimation } from "@/components/simple-animations"
import { ExternalLink, Star, Quote } from "lucide-react"

const clients = [
  {
    name: "Teslead",
    description: "Cutting-edge testing and software solutions provider.",
    testimonial: "MenPoruzhTech delivered exceptional results, transforming our digital presence with a modern and scalable platform. Their expertise in full-stack development is unparalleled.",
    rating: 5,
    link: "#",
    image: "/images/teslead-logo.png",
    caption: "Innovation and Quality Excellence"
  }
]

export function HappyClientsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SimpleAnimation type="fade" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold brand-text mb-4">
              Our Happy Clients
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We take pride in our collaborations with forward-thinking companies to build impactful digital experiences and robust technical foundations.
            </p>
          </div>
        </SimpleAnimation>

        <div className="flex justify-center">
          {clients.map((client) => (
            <SimpleAnimation key={client.name} type="scale" delay={0.4} className="w-full max-w-5xl">
              <div className="glass-card p-6 md:p-8 rounded-[2rem] relative overflow-hidden group hover:brand-glow-hover transition-all duration-500 border border-[var(--glass-border)]/50">
                {/* Decorative background blurs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 blur-3xl -mr-32 -mt-32 group-hover:bg-brand-primary/10 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/5 blur-3xl -ml-32 -mb-32 group-hover:bg-brand-secondary/10 transition-colors duration-500" />

                <div className="relative flex flex-col lg:flex-row items-center lg:items-center gap-10">
                  {/* Image Container with Caption */}
                  <div className="flex-shrink-0 relative group/img w-full max-w-[320px] lg:w-[350px]">
                    <div className="aspect-square rounded-2xl overflow-hidden border border-[var(--brand-primary)]/20 shadow-2xl relative">
                      <Image 
                        src={client.image} 
                        alt={client.name} 
                        fill
                        className="object-cover transform group-hover/img:scale-110 transition-transform duration-700"
                        priority
                      />
                      {/* Caption Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 flex items-end p-6">
                        <span className="text-white font-semibold text-lg">{client.caption}</span>
                      </div>
                    </div>
                    {/* Bottom Caption Container Type */}
                    <div className="mt-4 bg-[var(--brand-primary)]/10 backdrop-blur-sm border border-[var(--brand-primary)]/20 rounded-xl p-3 text-center">
                      <span className="text-xs font-bold uppercase tracking-widest text-[var(--brand-primary)]">Verified Partner</span>
                    </div>
                  </div>

                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
                      <div>
                        <h3 className="text-3xl font-bold text-foreground group-hover:brand-text transition-colors duration-300 mb-1">
                          {client.name}
                        </h3>
                        <p className="text-[var(--brand-primary)] font-medium">Strategic Tech Partner</p>
                      </div>
                      <div className="flex gap-1 bg-background/40 backdrop-blur-sm px-4 py-2 rounded-full border border-[var(--glass-border)]">
                        {[...Array(client.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </div>

                    <div className="relative mb-8 px-6 lg:px-0">
                      <Quote className="absolute -top-4 -left-2 lg:-left-8 w-8 h-8 text-[var(--brand-primary)]/20 rotate-180" />
                      <p className="text-xl italic text-muted-foreground leading-relaxed">
                        "{client.testimonial}"
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-[var(--glass-border)]/50">
                      <div className="text-sm text-muted-foreground max-w-md">
                        <span className="font-semibold text-foreground block mb-1">Industry Leader</span>
                        {client.description}
                      </div>
                      <a 
                        href={client.link} 
                        className="flex items-center gap-2 px-8 py-3 rounded-full bg-foreground text-background hover:bg-brand-primary hover:text-white transition-all duration-300 group/btn font-medium shadow-lg"
                      >
                        Explore Project
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SimpleAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlogsSection } from "@/components/blogs-section"
// import { FeaturedBlogs } from "@/components/featured-blogs"
import Layout from "@/components/meta/layout"

export default function BlogPage() {
  const blogMeta = {
    title: "Blogs | MenPoruzhTech – Web, App & SaaS Experts",
    description:
      "Explore tech blogs powered by DEV Community. Search by title, filter by tags, and open posts in a modal view.",
    keywords: "tech blogs, dev.to, programming, react, ai, menporuzhtech",
    url: "https://menporuzhtech.com/blog",
    ogImage: "https://menporuzhtech.com/Logo.png",
  }

  return (
    <Layout meta={blogMeta}>
      <div className="min-h-screen bg-background">
        <Navbar />

        <div
          className="fixed inset-0 bg-gradient-to-br from-background via-background/98 to-background/95 pointer-events-none"
          style={{ height: "calc(100vh - 180px)" }}
        />
        <div
          className="fixed inset-0 bg-gradient-to-br from-teal-500/5 to-orange-500/5 pointer-events-none"
          style={{ height: "calc(100vh - 180px)" }}
        />

        <main className="relative z-10">
          {/* <FeaturedBlogs /> */}
          <BlogsSection />
        </main>

        <Footer />
      </div>
    </Layout>
  )
}


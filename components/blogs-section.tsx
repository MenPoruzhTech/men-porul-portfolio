"use client"

import { useEffect, useMemo, useState } from "react"
import { X, Calendar, Tag, Clock, Heart, MessageCircle } from "lucide-react"
import { fetchDevArticles, fetchDevArticleById } from "@/api/blogApi"
import { Loader } from "@/components/loader"

function BlogCoverImg({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setFailed(false)
  }, [src])

  if (!src || failed) {
    return (
      <div
        className={`bg-gradient-to-br from-teal-500/15 to-orange-500/10 ${className ?? ""}`}
        aria-hidden
      />
    )
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  )
}

/** DEV.to: prefer cover_image (article hero), then social/OG image */
function getBlogCoverImage(blog: any) {
  const cover = blog?.cover_image
  const social = blog?.social_image
  if (typeof cover === "string" && cover.length > 0) return cover
  if (typeof social === "string" && social.length > 0) return social
  return ""
}

function formatPublishedDate(iso: string) {
  if (!iso) return ""
  try {
    const d = new Date(iso)
    if (Number.isNaN(d.getTime())) return iso
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  } catch {
    return iso
  }
}

export function BlogsSection() {
  const tagButtons = ["programming", "react", "ai"]

  const [selectedTag, setSelectedTag] = useState<string>("programming")
  const [blogs, setBlogs] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const [searchQuery, setSearchQuery] = useState<string>("")

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [activeBlog, setActiveBlog] = useState<any | null>(null)
  const [detailLoading, setDetailLoading] = useState<boolean>(false)
  const [fullArticle, setFullArticle] = useState<any | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchDevArticles(selectedTag, 20, controller.signal)
        setBlogs(Array.isArray(data) ? data : [])
      } catch (e: any) {
        if (e?.name === "AbortError") return
        setError(e?.message || "Failed to load blogs.")
      } finally {
        setLoading(false)
      }
    }

    load()

    return () => controller.abort()
  }, [selectedTag])

  const filteredBlogs = useMemo(() => {
    const list = Array.isArray(blogs) ? blogs : []
    const q = searchQuery.trim().toLowerCase()
    if (!q) return list

    return list.filter((blog) => {
      const title = typeof blog?.title === "string" ? blog.title : ""
      return title.toLowerCase().includes(q)
    })
  }, [blogs, searchQuery])

  useEffect(() => {
    if (!isModalOpen) return

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsModalOpen(false)
        setActiveBlog(null)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isModalOpen])

  function openModal(blog: any) {
    setActiveBlog(blog)
    setFullArticle(null)
    setIsModalOpen(true)

    const id = blog?.id
    if (id) {
      setDetailLoading(true)
      fetchDevArticleById(id)
        .then((data) => setFullArticle(data))
        .catch(() => setFullArticle(blog))
        .finally(() => setDetailLoading(false))
    } else {
      setFullArticle(blog)
    }
  }

  function closeModal() {
    setIsModalOpen(false)
    setActiveBlog(null)
    setFullArticle(null)
  }

  const headerSubtitle = `Tech blogs from DEV Community (${selectedTag}).`

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-teal-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 opacity-0 animate-fade-in-up [animation-delay:200ms]">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Valuable <span className="neon-text">Blogs</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            {headerSubtitle} Search by title, filter by tag, then open any post for full details.
          </p>

          {/* Controls */}
          <div className="mt-10 flex flex-col items-center gap-6">
            <div className="w-full max-w-2xl">
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title..."
                className="w-full h-11 rounded-xl bg-background/50 border border-white/10 px-4 text-foreground placeholder:text-muted-foreground outline-none focus:border-white/20 focus:ring-2 focus:ring-[var(--brand-primary)]/20 transition-all duration-300"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {tagButtons.map((tag) => {
                const isActive = tag === selectedTag
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setSelectedTag(tag)}
                    className={`px-5 py-2 rounded-full transition-all duration-300 border font-medium ${
                      isActive
                        ? "border-[var(--brand-primary)]/40 bg-white/5 text-[var(--brand-primary)]"
                        : "border-white/10 bg-background/30 text-foreground hover:border-white/20 hover:bg-white/10"
                    }`}
                  >
                    {tag}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Blog cards: 3-column grid on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {loading && (
            <Loader isLoading={loading} fullScreen size="lg" message="Loading blogs..." />
          )}

          {!loading && error && (
            <p className="col-span-full text-center text-muted-foreground">
              Sorry, we couldn&apos;t load blogs right now. Please try again later.
            </p>
          )}

          {!loading && !error && filteredBlogs.length === 0 && (
            <p className="col-span-full text-center text-muted-foreground">No blogs found.</p>
          )}

          {!loading &&
            !error &&
            filteredBlogs.map((blog, index) => {
              const title = blog?.title || ""
              const image = getBlogCoverImage(blog)
              const description = blog?.description || ""
              const author = blog?.user?.name || ""
              const date = blog?.published_at || ""
              const dateLabel = formatPublishedDate(date)

              return (
                <article
                  key={blog?.id || `${title}-${index}`}
                  className="glass-card rounded-2xl overflow-hidden h-full min-h-0 flex flex-col transition-all duration-300 hover:-translate-y-2 group border border-white/10 bg-background/30"
                >
                  {/* Same fixed-height media band on every card so row 3 aligns with 1 & 2 */}
                  <div className="relative w-full h-[168px] sm:h-[188px] shrink-0 bg-black/35">
                    <BlogCoverImg
                      src={image}
                      alt={title ? `${title} cover` : "Blog cover"}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>

                  <div className="relative z-10 flex min-h-0 flex-1 flex-col p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:neon-text transition-all duration-300 leading-tight text-foreground">
                      {title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-muted-foreground/90 mb-4">
                      {dateLabel && (
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 shrink-0 text-[var(--brand-primary)]" />
                          {dateLabel}
                        </span>
                      )}
                      {author && (
                        <span className="text-[var(--brand-primary)] font-medium">{author}</span>
                      )}
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-8 flex-grow line-clamp-5 sm:line-clamp-6">
                      {description}
                    </p>

                    <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => openModal(blog)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white transition-all duration-300 logo-glow-hover border border-white/10"
                        style={{
                          background: "linear-gradient(135deg, #00CED1, #FF8C00)",
                        }}
                      >
                        <span>View Details</span>
                      </button>

                      <a
                        href={blog?.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors duration-200 shrink-0"
                      >
                        Direct link
                      </a>
                    </div>
                  </div>
                </article>
              )
            })}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && activeBlog && (
        <div
          className="fixed inset-0 z-[70] flex items-start justify-center pt-12 sm:pt-16 pb-4 px-4 bg-black/60 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl flex flex-col bg-background border border-white/10 shadow-[0_0_40px_rgba(0,206,209,0.12)] my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Accent stripe (right edge) */}
            <div
              className="pointer-events-none absolute right-0 top-0 bottom-0 w-1 z-[2] hidden sm:block"
              style={{
                background: "linear-gradient(180deg, #FF8C00, #00CED1)",
              }}
              aria-hidden
            />

            {/* Full-width hero inside modal (flush with rounded top corners) */}
            <div className="relative w-full aspect-[16/9] min-h-[160px] max-h-[32vh] shrink-0 bg-black/50 rounded-t-2xl overflow-hidden">
              <BlogCoverImg
                src={getBlogCoverImage(activeBlog)}
                alt={
                  activeBlog?.title ? `${activeBlog.title} cover` : "Blog cover"
                }
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-black/25 rounded-t-2xl" />
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 inline-flex items-center justify-center h-10 w-10 rounded-lg bg-black/60 border border-white/25 text-white hover:bg-black/75 transition-all duration-300"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 min-h-0 p-6 sm:p-8 sm:pr-9 overscroll-contain">
              {detailLoading ? (
                <div className="flex items-center justify-center py-12">
                  <Loader isLoading={true} size="sm" message="Loading details..." />
                </div>
              ) : (
                <>
                  <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
                    {(fullArticle?.user?.profile_image_90 || activeBlog?.user?.profile_image_90) && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={(fullArticle?.user || activeBlog?.user)?.profile_image_90}
                        alt=""
                        className="h-10 w-10 rounded-full object-cover border border-white/10"
                      />
                    )}
                    {(fullArticle?.user?.name || activeBlog?.user?.name) && (
                      <span className="font-semibold text-[var(--brand-primary)]">
                        {(fullArticle?.user || activeBlog?.user)?.name}
                      </span>
                    )}
                    {(fullArticle?.published_at || activeBlog?.published_at) && (
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                        <Calendar className="h-4 w-4 text-[var(--brand-primary)] shrink-0" />
                        {formatPublishedDate(fullArticle?.published_at || activeBlog?.published_at)}
                      </span>
                    )}
                    {(fullArticle?.reading_time_minutes ?? fullArticle?.read_time ?? activeBlog?.reading_time_minutes ?? activeBlog?.read_time) != null && (
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                        <Clock className="h-4 w-4 text-[var(--brand-primary)] shrink-0" />
                        {fullArticle?.reading_time_minutes ?? fullArticle?.read_time ?? activeBlog?.reading_time_minutes ?? activeBlog?.read_time} min read
                      </span>
                    )}
                    {(fullArticle?.positive_reactions_count ?? activeBlog?.positive_reactions_count) != null && (
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                        <Heart className="h-4 w-4 text-[var(--brand-primary)] shrink-0" />
                        {(fullArticle?.positive_reactions_count ?? activeBlog?.positive_reactions_count).toLocaleString()} reactions
                      </span>
                    )}
                    {(fullArticle?.comments_count ?? activeBlog?.comments_count) != null && (
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                        <MessageCircle className="h-4 w-4 text-[var(--brand-primary)] shrink-0" />
                        {(fullArticle?.comments_count ?? activeBlog?.comments_count).toLocaleString()} comments
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold leading-snug tracking-tight text-foreground mb-5">
                    {(fullArticle?.title ?? activeBlog?.title)}
                  </h3>

                  {(() => {
                    const tagList = Array.isArray(fullArticle?.tag_list) ? fullArticle.tag_list : Array.isArray(activeBlog?.tag_list) ? activeBlog.tag_list : []
                    return tagList.length > 0 ? (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {tagList.map((tag: string) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium border border-[var(--brand-primary)]/35 bg-teal-500/10 text-[var(--brand-primary)]"
                          >
                            <Tag className="h-3 w-3 opacity-80" />
                            #{tag}
                          </span>
                        ))}
                      </div>
                    ) : null
                  })()}

                  <p className="text-muted-foreground leading-relaxed text-[15px] sm:text-base mb-6">
                    {(fullArticle?.description ?? activeBlog?.description)}
                  </p>

                  {fullArticle?.body_html && (
                    <div
                      className="mb-8 text-muted-foreground text-[15px] leading-relaxed [&_a]:text-[var(--brand-primary)] [&_a]:underline [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:p-4 [&_pre]:bg-black/30 [&_pre]:text-sm [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_h1]:text-xl [&_h2]:text-lg [&_h3]:text-base [&_p]:mb-3"
                      dangerouslySetInnerHTML={{ __html: fullArticle.body_html }}
                    />
                  )}

                  <a
                    href={fullArticle?.url ?? activeBlog?.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-white transition-all duration-300 border border-white/10 logo-glow-hover"
                    style={{
                      background: "linear-gradient(135deg, #00CED1, #FF8C00)",
                    }}
                  >
                    Open original on DEV
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}


const DEV_TO_BASE_URL = "https://dev.to/api/articles"

export async function fetchDevArticles(tag = "programming", perPage = 20, signal) {
  const safeTag = typeof tag === "string" && tag.trim() ? tag.trim() : "programming"
  const url = `${DEV_TO_BASE_URL}?tag=${encodeURIComponent(safeTag)}&per_page=${encodeURIComponent(perPage)}`

  const res = await fetch(url, {
    method: "GET",
    signal,
  })

  if (!res.ok) {
    const text = await res.text().catch(() => "")
    throw new Error(`DEV.to API error: ${res.status} ${res.statusText}${text ? ` - ${text}` : ""}`)
  }

  const data = await res.json()
  return data
}

/** Fetch full article details by ID (read_time, reactions, comments, body, etc.) */
export async function fetchDevArticleById(id, signal) {
  if (!id) return null
  const url = `${DEV_TO_BASE_URL}/${id}`

  const res = await fetch(url, {
    method: "GET",
    signal,
  })

  if (!res.ok) {
    const text = await res.text().catch(() => "")
    throw new Error(`DEV.to API error: ${res.status} ${res.statusText}${text ? ` - ${text}` : ""}`)
  }

  return res.json()
}


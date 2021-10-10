import React, { useEffect } from "react"
import { useGlobalContext } from "../utils/context"

const Stories = () => {
  const { isLoading, hits, handleRemove, fetchStories } = useGlobalContext()
  useEffect(() => {
    fetchStories(`http://hn.algolia.com/api/v1/search_by_date?tags=story
    `)
  }, [])

  console.log(hits)

  return (
    <div>
      {hits.map((hit) => {
        const { author, url, title } = hit
        return (
          <div>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <a href={url}>Read More</a>
          </div>
        )
      })}
    </div>
  )
}

export default Stories

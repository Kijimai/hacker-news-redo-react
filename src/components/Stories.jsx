import React, { useEffect } from "react"
import { useGlobalContext } from "../utils/context"
import Loader from "./Loader"
const Stories = () => {
  const { isLoading, hits, handleRemove, fetchStories } = useGlobalContext()

  if (isLoading) {
    return <Loader />
  }
  console.log(hits)
  return (
    <section className="stories">
      {hits.map((hit) => {
        const { author, url, title, _tags, objectID } = hit
        return (
          <article key={objectID} className="story-container">
            <h2>{title}</h2>
            <h3>by {author}</h3>
            <a href={url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
            <p>
              Tags: <span>{_tags.join(", +")}</span>
            </p>
          </article>
        )
      })}
    </section>
  )
}

export default Stories

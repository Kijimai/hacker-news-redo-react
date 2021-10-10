import React, { useEffect } from "react"
import { useGlobalContext } from "../utils/context"

const Stories = () => {
  const { isLoading, hits, handleRemove, fetchStories } = useGlobalContext()

  if (isLoading) {
    return (
      <div className="loader">
        <p>L</p>
        <p>O</p>
        <p>A</p>
        <p>D</p>
        <p>I</p>
        <p>N</p>
        <p>G</p>
      </div>
    )
  }
  console.log(hits)
  return (
    <div>
      {hits.map((hit) => {
        const { author, url, title } = hit
        return (
          <div className="story-container">
            <h2>{title}</h2>
            <h3>{author}</h3>
            <a href={url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default Stories

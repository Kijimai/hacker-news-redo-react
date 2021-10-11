import React from "react"
import Paginator from "./Paginator"
const Header = () => {
  return (
    <header className="top-header">
      <h2>
        Get the latest from the internet! Courtesy of <a href="https://news.ycombinator.com/">Hacker News.</a>
      </h2>
      <Paginator />
    </header>
  )
}

export default Header

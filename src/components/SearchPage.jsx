import React from "react"
import { useGlobalContext } from "../utils/context"

const SearchPage = () => {
  const { numPages } = useGlobalContext()
  return (
    <div className="searchPage-container">
      <input type="number" min="1" max={numPages} className="page-input" />
    </div>
  )
}

export default SearchPage

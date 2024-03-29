import React from "react"
import { useGlobalContext } from "../utils/context"

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext()
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h2>Search for a story</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </form>
  )
}

export default SearchForm

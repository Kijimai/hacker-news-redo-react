import React from "react"
import { useGlobalContext } from "../utils/context"

const Buttons = () => {
  const { isLoading, page, numPages, handlePage } = useGlobalContext()

  if (isLoading) {
    return <h1>Loading</h1>
  }

  return (
    <div className="btn-container">
      <button disabled={isLoading} className="btn">
        Prev
      </button>
      <p>Page {page + 1}</p>
      <button disabled={isLoading} className="btn">
        Next
      </button>
    </div>
  )
}

export default Buttons

import { useEffect } from "react"
import axios from "axios"
import {
  Buttons,
  SearchForm,
  SearchPage,
  Stories,
  Paginator,
} from "./components/ComponentIndex"
import "./App.css"

function App() {
  return (
    <>
      <SearchForm />
      <Paginator />
      <Stories />
    </>
  )
}

export default App

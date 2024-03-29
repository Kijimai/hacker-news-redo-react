import { useEffect } from "react"
import axios from "axios"
import {
  Buttons,
  SearchForm,
  SearchPage,
  Stories,
  Paginator,
  Header,
} from "./components/ComponentIndex"
import "./App.css"

function App() {
  return (
    <>
      <SearchForm />
      <Header />
      <Stories />
    </>
  )
}

export default App

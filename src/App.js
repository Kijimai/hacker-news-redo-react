import { useEffect } from "react"
import axios from "axios"
import "./App.css"

function App() {
  useEffect(() => {
    axios("https://hn.algolia.com/api/v1/search?")
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          const response = res.data
          console.log(response, res)
        } else {
          throw new Error(res.statusText)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return <div className="App"></div>
}

export default App

import React, { useContext, useEffect, useReducer } from "react"
import axios from "axios"

import {
  SET_LOADING,
  SET_STORIES,
  SET_STARTED,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions"

import { reducer } from "./reducer"

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?"

const AppContext = React.createContext()

const initialState = {
  isLoading: true,
  hits: [],
  query: "",
  page: 0,
  numPages: 0,
  justStarted: true,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchStories = async (url) => {
    dispatch({ type: SET_LOADING })
    try {
      const response = await axios(url)
      if (response.status >= 200 && response.status <= 299) {
        const { hits, nbPages } = response.data
        const filteredHits = hits.filter((hit) => hit.url !== null)
        dispatch({
          type: SET_STORIES,
          payload: { hits: filteredHits, numPages: nbPages },
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (state.query === "") {
      fetchStories(`${API_ENDPOINT}`)
    } else {
      fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`)
    }
  }, [state.query, state.page])

  const handleSearch = (query) => {
    dispatch({ type: HANDLE_SEARCH, payload: query, page: 0 })
  }

  return (
    <AppContext.Provider value={{ ...state, fetchStories, handleSearch }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext }

//OCT 10 -
// Filter out fetched stories that don't have a url

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
        dispatch({
          type: SET_STORIES,
          payload: { hits: hits, numPages: nbPages },
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (state.justStarted) {
      fetchStories(`http://hn.algolia.com/api/v1/search_by_date?tags=story`)
      dispatch({ type: SET_STARTED })
    } else {
      fetchStories(`${API_ENDPOINT}`)
    }
  }, [state.query, state.page, state.justStarted])

  return (
    <AppContext.Provider value={{ ...state, fetchStories }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext }

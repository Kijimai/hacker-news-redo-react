import React, { useContext, useEffect, useReducer } from "react"
import axios from "axios"

import {
  SET_LOADING,
  SET_STORIES,
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
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // const fetchStories = async (url) => {
  //   dispatch({type: SET_LOADING})
  //   try {
  //     const response = await axios(url)
  //     console.log(response)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  useEffect(() => {
    axios(`${API_ENDPOINT}`)
    .then(data => console.log(data))
  },[])
}

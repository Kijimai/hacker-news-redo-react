import {
  SET_LOADING,
  SET_STORIES,
  HANDLE_PAGE,
  HANDLE_SEARCH,
  REMOVE_STORY,
} from "./actions"

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true }
    case SET_STORIES:
      const { hits, numPages } = action.payload
      return { ...state, isLoading: false, hits: hits, numPages: numPages }
    case HANDLE_PAGE:
      return { ...state }
    case HANDLE_SEARCH:
      return { ...state, query: action.payload}
    case REMOVE_STORY:
      return { ...state }
    default:
      throw new Error(`Could not find matching ${action.type} action`)
  }
}

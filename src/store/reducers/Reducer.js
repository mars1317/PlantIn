import {
  FETCH_POSTS,
  SHOW_WEATHER,
  SEARCH_POST,
  SET_MAIN_LOADER,
  SEARCH_NEW_POST
} from "../actionTypes/actionTypes";

const initialState = {
  loading: true,
  fetchedPosts: [],
  searchedPosts: [],
  newPost: {},
  currentPage: 1,
  weatherValue: '',
  weatherLoader: true,
  searchModeOff: true,
  searchValue: ''
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MAIN_LOADER:
      return {
        ...state,
        loading: action.payload
      }
    case FETCH_POSTS:
      return {
        ...state,
        loading: false,
        fetchedPosts: [...state.fetchedPosts, ...action.payload]
      }
    case SHOW_WEATHER:
      return {
        ...state,
        weatherValue: action.payload
      }
    case SEARCH_POST: 
      return {
        ...state,
        searchedPosts: action.payloadSearchedPosts,
        searchModeOff: !action.payloadMode,
        searchValue: action.payloadSearchValue,
      }
    case SEARCH_NEW_POST:
      return {
        ...state, 
        newPost: action.payload
      }
    default:
      return state
  }
}

export default postsReducer;
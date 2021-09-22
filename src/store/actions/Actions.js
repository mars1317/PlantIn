import {
  FETCH_POSTS,
  SHOW_WEATHER,
  SEARCH_POST,
  SET_MAIN_LOADER,
  SEARCH_NEW_POST
} from "../actionTypes/actionTypes";
  
export function fetchPosts(dispatch, currentPage) {
    fetch(`https://my-json-server.typicode.com/mars1317/postsJson/posts?_limit=6&_page=${currentPage}`)
    .then(response => response.json())
    .then(data =>
      dispatch({type: FETCH_POSTS, payload: data })
    );
  }

export function fetchWeatherValue(dispatch) {
  dispatch({type: SET_MAIN_LOADER, payload: true})
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=bb70906d2faee9c379678e930edbfd47&units=metric`)
  .then(response=>response.json())
  .then(data=> dispatch({type: SHOW_WEATHER, payload: data.main.temp}))
}

export function searchPosts(dispatch, searchValue, posts) {
  let searchMode = searchValue.length>0 ? true : false;

  fetch(`https://my-json-server.typicode.com/mars1317/postsJson/posts?q=${searchValue}`)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: SEARCH_POST,
        payloadSearchedPosts: data,
        payloadMode: searchMode,
        payloadSearchValue: searchValue})
    );
}

export function searchNewPost(dispatch) {
  fetch(`https://my-json-server.typicode.com/mars1317/postsJson/posts?_sort=id&_order=DESC`)
  .then(response=>response.json())
  .then(data=> dispatch({type: SEARCH_NEW_POST, payload: data[0]}))
}

export default {fetchPosts, fetchWeatherValue, searchPosts, searchNewPost};
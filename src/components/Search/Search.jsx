import classes from './Search.module.scss'
import Weather from '../Weather/Weather';
import {searchPosts} from '../../store/actions/Actions';
import {useEffect, useState, useRef } from 'react';
import {useSelector, useDispatch} from "react-redux";

export default function Search(params) {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.fetchedPosts);
  const searchValue = useSelector(state => state.searchValue);

  return (
    <div className={classes.Search}>
      <h1 className={classes.Title}>Stay always tuned with planting trends</h1>
      <Weather/>
      <input
        className={classes.SearchInput}type="text" 
        placeholder="Search" onFocus={(e) => e.target.placeholder = ""} 
        onChange={(event)=>searchPosts(dispatch, event.target.value, posts)}
      />
    </div>
  )
}
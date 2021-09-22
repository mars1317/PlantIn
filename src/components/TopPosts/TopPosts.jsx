import classes from './TopPosts.scss'
import {useEffect, useState, useRef } from 'react';
import {useSelector, useDispatch} from "react-redux";
import PostCard from '../PostCard/PostCard';

export default function TopPosts(params) {
  let posts = useSelector(state => state.fetchedPosts);
  let topPosts = posts.slice(0, 2);

  return (
    <div className='TopPosts'>
      <p className='SectionTitle'> Top of the day</p>
      <div className='Container'>
        {
          topPosts.map( (post, keyIndex)=> 
          <PostCard key={keyIndex} post = {post} showBanner={false} parent='top'/>)
        }
      </div>
    </div>
  )
}
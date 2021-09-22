import classes from './Posts.module.scss';
import PostCard from '../PostCard/PostCard';
import {useEffect, useState, useRef } from 'react';
import {useSelector, useDispatch} from "react-redux";
import Loader from '../Loader/Loader';
import Banner from '../Banner/Banner';
import {fetchPosts} from '../../store/actions/Actions';

export default function Posts() {
  const dispatch = useDispatch();
  const bannerQuery = 6;

  const [currentPage, setCurrentPage] = useState(1);

  const loading = useSelector(state => state.loading);
  const fetchedPosts = useSelector(state => state.fetchedPosts);
  const searchedPosts = useSelector(state => state.searchedPosts);
  const searchModeOff = useSelector(state => state.searchModeOff);
  
  const scrollHandler = (e)=> {
    if(e.target.documentElement.scrollHeight - (window.innerHeight+e.target.documentElement.scrollTop)<1) {
      setCurrentPage(prevState => prevState+1);
    }
  }

  useEffect( ()=>{
    fetchPosts(dispatch, currentPage);
    console.log(fetchedPosts)
  }, [currentPage])

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler)

    return () => {
      document.removeEventListener("scroll", scrollHandler)
    }
  }, []);

  let outputedPosts = [];

  if(searchModeOff) {
    outputedPosts = fetchedPosts;
  }

  else {
    outputedPosts = searchedPosts;
  }

  return (
    <div className={classes.PostsContainer}>
      <p className={classes.SectionTitle}> Interesting</p>

      <section className={classes.Posts}>
        {
          loading ? <Loader/> : 
          outputedPosts.length==0 ? 
          <p className={classes.NotFound}>
            No results found
          It seems we can’t find any results based on your search.
          But don’t be sad! Try another word!
          </p> :
          outputedPosts.map( (post, keyIndex)=> 
          (post.id===bannerQuery) ? 
          <PostCard key={keyIndex} post = {post} showBanner={true}/> :
          <PostCard key={keyIndex} post = {post} showBanner={false}/>
          )
        }
      </section>
    </div>
  )
}

import classes from './PostCardNew.module.scss'
import {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {searchNewPost} from '../../store/actions/Actions';
import label from '../../assets/icons/label.svg'
import Loader from '../Loader/Loader.jsx';
export default function PostCardNew() {
  const dispatch = useDispatch();
  const newPost = useSelector(state => state.newPost);

  useEffect( ()=>{
    searchNewPost(dispatch);
  }, [])

  const getImagePath = (image) => {
    return `assets/images/plants_image_${image}.jpg`
  }

  return (
      <section className={classes.PostCardNew}>
        {newPost.id ?
        <>
        <img className={classes.newLabel} src={label} alt="red label"/>

        <div className={classes.PostCard}>
          <img className={classes.PostImage} src={(getImagePath(newPost.id))}/>
          <div className={classes.PostContainer}>
            <p className={classes.OptionalInfo}>
              <span>{newPost.readingTime}</span>
              <span>{newPost.date}</span>
            </p>
            <h1 className={classes.Title}>
              {newPost.title}
            </h1>
            <p className={classes.Content}>
              {newPost.content}
            </p>
          </div>
        </div>
        </>
        :
        <Loader/>

      }
      
    </section> 
  )
}
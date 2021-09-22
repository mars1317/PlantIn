import classes from './PostCard.scss'
import Banner from '../Banner/Banner';

export default function PostCard({post, showBanner}) {
  const getImagePath = (image) => {
    return `assets/images/plants_image_${image}.jpg`
  }

  return (
    <>
      <section className='PostCard'>
        <img className='PostImage' src={(getImagePath(post.id))}/>
        <div className='PostContainer'>
          <p className='OptionalInfo'>
            <span>{post.readingTime}</span>
            <span>{post.date}</span>
          </p>
          <h1 className='Title'>
            {post.title}
          </h1>
          <p className='Content'>
            {post.content}
          </p>
      </div>
      </section>
      {showBanner? <Banner/> : null}
    </>
  )
}
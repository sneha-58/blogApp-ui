import React from 'react'
import { Link } from 'react-router-dom';
import AuthorImage from '../Assets/AuthorImages.jpg';

export default function PostAuthor(){
  return (
    <Link to={`/post/user/:id`} className='post-author'>
      <div className="post-author-image">
        <img src={AuthorImage} alt=""/>
      </div>
      <div className="post-author-info">
        <h5>Rachel Green</h5>
      </div>
    </Link>
  )
}

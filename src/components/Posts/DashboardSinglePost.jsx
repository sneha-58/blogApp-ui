import React,{ useState } from 'react';
import { useParams } from 'react-router-dom';
import './singlepost.css';
import Navbar from '../Navbar/Navbar.js';
import { Link } from 'react-router-dom';
import PostAuthor from '../Posts/PostAuthor.jsx';
import dashboardData from '../Posts/dashboardData.js';
import { FaHeart } from 'react-icons/fa';

const SinglePost = () => {
    const [favorites, setFavorites] = useState(0);
    const [hasFavorited, setHasFavorited] = useState(0);

    const handleAddToFavorites = () => {
      if (!hasFavorited) {
        setFavorites(favorites + 1);
        setHasFavorited(true);
      }
      else {
        setFavorites(favorites+1);
        setHasFavorited(true);
      }
    }
  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this post?');
    if (confirmDelete) {
      console.log('Post deleted!');
    }
  };

  const { postId } = useParams(); 
  const selectedPost = dashboardData.find(post => post.id === parseInt(postId));

  if (!selectedPost) {
    return <div>Post not found</div>;
  }

  const { title, content ,image} = selectedPost;
 
  return (
    <>
    <Navbar />
    <section>
       <div className="containerpostdetail PostDetail-container">
         <div className="postdetail-top">
             <PostAuthor />
             <div className="postdetail-buttons">
               <div className="post-detail-buttons">
                 <button className='btn btn-sm btn-secondary'>
                   Edit
                 </button>
                 <button onClick={handleDelete} className="btn btn-sm btn-danger">
                    Delete
                 </button>
               </div>
             </div>
         </div>
      </div>
     </section>
     <div className="singlepost">
     {/* <button onClick={handleAddToFavorites} className={`fav-button ${hasFavorited ? 'favorited1' : ''}`}>
        <FaHeart />
    </button> <p>Likes: {favorites}</p> */}
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <button onClick={handleAddToFavorites} className={`fav-button ${hasFavorited ? 'favorited1' : ''}`}>
        <FaHeart />
    </button>
    <p style={{ marginLeft: '8px' }}>Likes: {favorites}</p>
    </div>
    <div className="containersinglepost">
      <div className="post-details">
        <img src={image} alt=""/>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
    </div>
    </>
  );
};

export default SinglePost;
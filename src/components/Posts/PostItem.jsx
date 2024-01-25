import React, { useState } from 'react';
import Posts from './Post.jsx';
import { Link } from 'react-router-dom';
// import PostDetail from './PostDetail.jsx';
import PostAuthor from './PostAuthor.jsx';
import { FaHeart } from 'react-icons/fa';

function PostItem({image, category, authorId, title, content, postId }) {
  const shortContent = content && content.length > 145 ? content.substr(0, 146) + '...' : content;
  const shortTitle = title && title.length > 20 ? title.substr(0, 21) + '...' : title;

    const [selectedPost, setSelectedPost] = useState(null);

    const handleReadMoreClick = () => {
    setSelectedPost(postId);
    };
    
    const [favorites, setFavorites] = useState([]);
    const [hasFavorited, setHasFavorited] = useState(false);

    // const handleAddToFavorites = () => {
    //   if (!hasFavorited) {
    //     setFavorites(favorites + 1);
    //     setHasFavorited(true);
    //   }
    //   else {
    //     setFavorites(favorites - 1);
    //     setHasFavorited(false);
    //   }
    // }
    const handleAddToFavorites = () => {
      if (!hasFavorited) {
        setFavorites([...favorites, { postId, title, content }]);
        setHasFavorited(true);
      } else {
        setFavorites(favorites.filter((fav) => fav.postId !== postId));
        setHasFavorited(false);
      }
    };

    return (
      <>
    <article className="post">
      {/* <button onClick={handleAddToFavorites} className={`fav-button1 ${hasFavorited ? 'favorited' : ''}`}>
        <FaHeart />
      </button> */}
      <div className="post-image">
        <img src={image} alt=""/>
      </div>
      <div className="post-content">
        <Link to={`/post/${postId}`}>
        <h3>{shortTitle}</h3>
        </Link>
        <p>{shortContent}</p>
        <Link to={`/post/${postId}`}>
         <button onClick={() => handleReadMoreClick(postId)} className="readMoreButton">
          Read More..
        </button>
        </Link>

        <button
            onClick={handleAddToFavorites}
            className={`fav-button1 ${hasFavorited ? 'favorited' : ''}`}
          >
            {hasFavorited ? 'Remove' : 'Add to Favorites'}
          </button>

        <div className="post-footer">
          <PostAuthor />
        </div>      
        </div>
    </article>
    {/* {selectedPost && <PostDetail postId={selectedPost} title={title} content={content}/>} */}
    </>
  );
}

export default PostItem;
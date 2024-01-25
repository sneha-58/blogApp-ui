// ParentComponent.jsx
import React, { useState } from 'react';
import PostItem from '../Posts/PostItem';
import FavoritesPage from '../Posts/FavoritesPage';
import dummyPosts from '../Posts/data.js';

const ParentComponent = () => {
  const [posts, setPosts] = useState(dummyPosts);
  const [favorites, setFavorites] = useState([]);

  const handleRemoveFavorite = (postId) => {
    setFavorites(favorites.filter((fav) => fav.postId !== postId));
  };

  return (
    <div>
      {/* Render your posts using PostItem */}
      {posts.map((post) => (
        <PostItem
          key={post.postId}
          postId={post.postId}
          title={post.title}
          content={post.content}
          onRemoveFavorite={handleRemoveFavorite}
        />
      ))}

      {/* Render the FavoritesPage */}
      <FavoritesPage favorites={favorites} onRemoveFavorite={handleRemoveFavorite} />
    </div>
  );
};

export default ParentComponent;

import React from 'react';

const FavoritesPage = ({ favorites }) => {
  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.postId}>{favorite.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
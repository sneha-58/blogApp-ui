import React, { useState } from 'react';

const EditPost = ({ post }) => {
  const [editedPost, setEditedPost] = useState({
    title: post.title,
    content: post.content,
    // Other properties...
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the edited post (e.g., send it to the server, update state, etc.)
    console.log('Edited post:', editedPost);
  };

  return (
    <div>
      <h2>Edit Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={editedPost.title}
          onChange={handleChange}
        />

        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          name="content"
          value={editedPost.content}
          onChange={handleChange}
        />

        {/* Other form fields... */}

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditPost;
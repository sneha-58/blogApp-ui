import React,{ useState } from 'react';
import './posts.css';

const Comment = ({ comments }) => {
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    console.log('New Comment:', newComment);
    setNewComment('');
  };
  return (
    <>
    <div className="comment-section">
      <h3>Comments</h3>
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img src='https://vectorified.com/images/profile-png-icon-18.png' alt='Account' className="userimg" />
          <strong className="commentauthor">{comment.user}</strong><br/>
          <div className="commentcontent">{comment.text}</div>
        </div>
      ))}
    </div>
    <form onSubmit={handleCommentSubmit}>
    <label>
      Post a Comment:
      <input 
        type="textarea" 
        value={newComment} 
        onChange={(e) => setNewComment(e.target.value)} 
      />
    </label>
    <button type="submit" className="submitcomment">Post</button>
  </form>
  </>
  );
};

export default Comment;
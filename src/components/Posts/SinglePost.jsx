import React from 'react';
import { useParams } from 'react-router-dom';
import DummyPosts from '../Posts/data.js';
import './singlepost.css';
import Navbar from '../Navbar/Navbar.js';
import Comment from '../Posts/Comment.jsx';
import { Link } from 'react-router-dom';
import PostAuthor from '../Posts/PostAuthor.jsx';

const SinglePost = () => {
  const handleDeletePost = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this post?');
    if (confirmDelete) {
      console.log('Post deleted!');
    }
  };

  const { postId } = useParams(); 
  const comments = [
      { id: 1, user: 'User1', text: 'Nice post!' },
      { id: 2, user: 'User2', text: 'Great content!' },
      { id: 3, user: 'User3', text: 'I just love it !' },
  ];
  const selectedPost = DummyPosts.find(post => post.id === parseInt(postId));

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
                 <button className='btn1 btn-sm1 btn-secondary1'>
                   Edit
                 </button>
                 <button onClick={handleDeletePost} className="btn1 btn-sm1 btn-danger1">
                    Delete
                 </button>
             </div>
         </div>
      </div>
     </section>
     <div className="singlepost">
    <div className="containersinglepost">
      <div className="post-details">
        <img src={image} alt=""/>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
    </div>
    <Comment comments={comments} />
    </>
  );
};

export default SinglePost;
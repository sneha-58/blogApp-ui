// import React, { useState, useEffect } from 'react';
// import DummyPosts from '../Posts/data.js';

// const PostDetail = ({ postId }) => {
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     const fetchPostById = async () => {
//       const selectedPost = DummyPosts.find((p) => p.id === postId);
//       setPost(selectedPost);
//     };

//     fetchPostById();
//   }, [postId]);

//   if (post) {
//     const { title, content } = post;
//     return (
//       <div>
//         <h2>{title}</h2>
//         <p>{content}</p>
//       </div>
//     );
//   }
//   else{
//     return(
//     <h3>OOPS ! Something went wrong ! </h3>
//     );
//   }
//   };

// export default PostDetail;
import React from 'react';
import './posts.css';
import DummyPosts from '../Posts/data.js';
import {useState} from 'react';
import PostItem from '../Posts/PostItem.jsx';
// import DashboardSinglePost from '../Posts/DashboardSinglePost.jsx';
import Navbar from '../Navbar/Navbar.js';
import PostDetail from '../Posts/PostDetail.jsx';
import { Routes, Route } from 'react-router-dom';
import SinglePost from '../Posts/SinglePost.jsx';

function Post() {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState(DummyPosts);

  // const [selectedPost, setSelectedPost] = useState(null);
  // const navigate=useNavigate();
  // const handleReadMoreClick=(postId)=>{
  //   setSelectedPost(postId);
  //   navigate(`/post/${postId}`);
  // }

  return (
    <>
      <Navbar />
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input
            className="searchInput"
            id="searchInput"
            type="text"
            placeholder="Search here..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className="template_Container">
          {DummyPosts.filter((val) => {
            if (searchTerm === "") {
              return val;
            } 
            else if (val.category.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val;
            }
          }).map(({ id, image, category, authorId, title, content }, index) => {
            return (
              <div className="posts" key={index}>
                <div className="posts-container">
                  <PostItem
                    image={image}
                    category={category}
                    authorId={authorId}
                    title={title}
                    content={content}
                    postId={id}
                  />
                </div>
        </div>
            );
          })}
        </div>
      </div>
      <Routes>
        <Route path="/post/:postId" element={<SinglePost />} />
        {/* <Route path="/postdashboard/:postId" element={<DashboardSinglePost />} /> */}
      </Routes>
    </>
  );
}

export default Post;

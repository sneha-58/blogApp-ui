import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar.js';
import './CreatePost.css';

const CreatePost = () => {
  const [category, setCategory] = useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle the form submission, including the selected category
    console.log('Title:', event.target.elements.title.value);
    console.log('Content:', event.target.elements.content.value);
    console.log('Category:', category);
  };

  return (
    <>
      <Navbar />
      <div className="write">
        <h2>Create Your Blog..</h2>
        <img
          className="writeImg"
          src="https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
            <select
              className="writeInput writeSelect"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="" disabled>Select Category</option>
              <option value="Technology">Technology</option>
              <option value="Travel">Travel</option>
              <option value="Food">Food</option>
              <option value="Music">Music</option>
              <option value="Job">Job</option>
              <option value="Health">Health</option>
            </select>
          </div>
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: 'none' }} />
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              name="title"
              autoFocus={true}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              placeholder="Tell your story..."
              type="text"
              className="writeInput writeText"
              name="content"
            ></textarea>
          </div>
          <button type="submit" className="writeSubmit">
            Publish
          </button>
        </form>
      </div>
    </>
  );
};

export default CreatePost;


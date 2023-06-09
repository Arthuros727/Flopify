import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ColorSchemesExample from "./Navbar.js";

function Genre2() {
 
    const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/genres?page=1&limit=999`);
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
        <ColorSchemesExample />

      <ul>
        {posts.map(post => (
          <div id='di'>
        <a  href={`/albumGenre?genre=${post.id}`}>

              <p className='gender'>{post.name}</p>
            </a>    
          </div>
            

          
        ))}
      </ul>

    
    </div>
  );
}

export default Genre2;

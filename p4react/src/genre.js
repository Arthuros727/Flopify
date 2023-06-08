import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      <ul>
        {posts.map(post => (
          <div>
        <a href={`/albumGenre?genre=${post.id}`}>

              <p>{post.name}</p>
            </a>    
          </div>
            

          
        ))}
      </ul>

    
    </div>
  );
}

export default Genre2;

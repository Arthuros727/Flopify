import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Request15() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/albums?page=${currentPage}&limit=10`);
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <ul>
        {posts.map(post => (
          <div className='homepage' key={post.id}>
            <img src={post.cover_small} alt={post.name} />
            <p>{post.name}</p>
            <p>Popularity: {post.popularity}/100</p>
          </div>
        ))}
      </ul>

      <div className='btnPage'>
        <button onClick={handlePreviousPage}>BACK</button>
        <button onClick={handleNextPage}>NEXT</button>
      </div>
    </div>
  );
}

export default Request15;

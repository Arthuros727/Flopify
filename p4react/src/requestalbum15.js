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
  if (!currentPage) {
    return <p>Loading...</p>;
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  function cookied(i){
    console.log(i);
  }
  return (
    <div>
      <ul>
        {posts.map(post => (
              <a href={`/detail?album=${post.id}`}>
            <div className='homepage' id={post.id} >
              <img src={post.cover_small} alt={post.name} />
              <p>{post.name}</p>
              <p>Popularity: {post.popularity}/100</p>
            </div>

              </a>
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

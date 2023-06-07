import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from "react-paginate";

function Request15() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/albums?limit=15')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <ul>
      {posts.map(post => (
        <div className='homepage'>
          <img src={post.cover_small}></img>
          <p>{post.name}</p>
          <p>Popularity : {post.popularity}/100</p>
          <div>
        {data.map(() => {
          return <p>{country.name.common}</p>;
        })}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={25}
          marginPagesDisplayed={3}
          pageRangeDisplayed={6}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
        />
      </div>
        </div>
        // <li>{post.name}</li>
      ))}
    </ul>
  );
}

export default Request15;
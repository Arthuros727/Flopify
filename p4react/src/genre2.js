import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Genre() {
  const i = window.location.href.split('=')[1];

  const [genre, setGenre] = useState(null);
  const [albumIds, setAlbumIds] = useState([]);
  const [albums, setAlbums] = useState([]);

  const fetchGenre = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/genres/${i}`);
      setGenre(response.data.genre);
      setAlbumIds(response.data.albums);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAlbumDetails = async () => {
    try {
      const albumPromises = albumIds.map(albumId => axios.get(`http://localhost:8000/albums/${albumId}`));
      const albumResponses = await Promise.all(albumPromises);
      const albumData = albumResponses.map(response => response.data.album);
      setAlbums(albumData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGenre();
  }, []);

  useEffect(() => {
    if (albumIds.length > 0) {
      fetchAlbumDetails();
    }
  }, [albumIds]);

  return (
    <div>
      
      {genre && (
        <div>
          <h2>Genre</h2>
          <p>{genre.name}</p>
        </div>
      )}
    

      <h2>Albums</h2>
      <ul>
        {albums.map(album => (
           <a href={`/detail?album=${album.id}`}>
           <div className='homepage' id={album.id} >
             <img src={album.cover_small} alt={album.name} />
             <p>{album.name}</p>
             <p>Popularity: {album.popularity}/100</p>
           </div>
 
             </a>
        ))}
      </ul>
    </div>
  );
}

export default Genre;

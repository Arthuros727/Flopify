import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Detail() {
    const [album, setAlbum] = useState(null);
    const [tracks, setTracks] = useState(null);
   
       let i= window.location.href.split('=')[1];
    
    
    useEffect(() => {
        axios.get(`http://localhost:8000/albums/${i}`)
        // axios.get(`http://localhost:8000/albums/${this}`)
        .then(response => {
          setAlbum(response.data.album);
          setTracks(response.data.tracks);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

  if (!album) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={album.cover_small} alt={album.name} />
      <p>{album.name}</p>
      <p>{album.description}</p>

      <h3>Tracks</h3>
      <ul>
        {tracks.map(track => (
          <li key={track.id}>
            <p>{track.name}</p>
            <p>Duration: {track.duration} seconds</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Detail;

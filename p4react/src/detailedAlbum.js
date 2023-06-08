import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Detail() {
  const [album, setAlbum] = useState(null);
  const [tracks, setTracks] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);

  function change(a) {
    setSelectedTrack(a);
    console.log("oui");
  }

  let i = window.location.href.split('=')[1];

  useEffect(() => {
    axios
      .get(`http://localhost:8000/albums/${i}`)
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
            <button type="button" onClick={() => change(track.mp3)}>PLAY</button>
            <p>Duration: {track.duration} seconds</p>
          </li>
        ))}
      </ul>

      {selectedTrack && (
        <audio
          controls
          src={selectedTrack}
          className="audio"
        >
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}

export default Detail;

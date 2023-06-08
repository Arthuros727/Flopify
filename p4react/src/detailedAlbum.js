import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ColorSchemesExample from "./Navbar.js";

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
        function minut(a){
            const minutes = Math.floor(a / 60);
            const seconds = a - minutes * 60;

            return minutes + "min"  + seconds;

        }
  return (
      <div>
        <ColorSchemesExample />
        <div className="albumContainer">
  <img className="albumCover" src={album.cover_small} alt={album.name} />
  <div className="albumDetails">
    <p className="albumName">{album.name}</p>
    <p className="albumDecs">{album.description}</p>
  </div>
</div>


      <h3>Tracks</h3>
      <ul>
          <div className='containers'>
        {tracks.map(track => (
         <>

     <div className="trackRow">
  <p className="trackName">{track.name}</p>
  <p className="trackDuration"> {minut(track.duration)}</p>
  <button className="trackBtn" type="button" onClick={() => change(track.mp3)}>PLAY</button>
  <div className='line'></div>
</div>

         </>
          
          ))}
          </div>
      </ul>

      {selectedTrack && (
        <audio
        id='audioPlayer'
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

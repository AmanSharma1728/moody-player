import { useState, useEffect, useRef } from "react";
import "./MoodSongs.css";

const MoodSongs = ({ Songs }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const audioRef = useRef(null);

  const handlePlayPause = (index, songUrl) => {
    // 1. If clicking the song that is already playing, pause it.
    if (currentSongIndex === index) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setCurrentSongIndex(null);
    }
    // 2. If clicking a new song or starting fresh
    else {
      // Pause existing audio if playing
      if (audioRef.current) {
        audioRef.current.pause();
      }

      // Create new audio instance and play
      audioRef.current = new Audio(songUrl);
      audioRef.current.play();
      setCurrentSongIndex(index);

      // Reset UI when song finishes
      audioRef.current.onended = () => {
        setCurrentSongIndex(null);
      };
    }
  };

  // Cleanup audio when component unmounts
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div className="mood-songs">
      <h2>Recommended Songs</h2>
      {Songs.map((song, index) => {
        return (
          <div className="song" key={index}>
            <div className="title">
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>

            <div className="play-pause-button">
              {/* Note: we pass a callback function () => ... to prevent infinite loop */}
              <button onClick={() => handlePlayPause(index, song.audio)}>
                {currentSongIndex === index ? (
                  <i className="ri-pause-circle-line"></i>
                ) : (
                  <i className="ri-play-circle-line"></i>
                )}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MoodSongs;

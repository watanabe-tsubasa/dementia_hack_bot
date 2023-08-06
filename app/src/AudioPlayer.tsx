import React, { useRef } from "react";

type AudioPlayerProps = {
  src: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ( { src } ) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  
  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <div>
      <audio ref={audioRef}>
        <source src={src} type="audio/mp3" />
        お使いのブラウザはaudio要素をサポートしていません。
      </audio>
      <button onClick={playAudio}>Play</button>
      <button onClick={pauseAudio}>Pause</button>
    </div>
  );
};
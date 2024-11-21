import styles from "./musicplaybutton.module.scss";
import { IconButton } from "@mui/material";
import { Pause, PlayArrow } from "@mui/icons-material";
import React, { Dispatch } from "react";

function MusicPlayButton({
  audio,
  isPlaying,
  setIsPlaying,
}: {
  audio: React.MutableRefObject<HTMLAudioElement | null>;
  setIsPlaying: Dispatch<React.SetStateAction<boolean>>;
  isPlaying: boolean;
}) {
  const handleClick = () => {
    setIsPlaying((prev) => {
      if (prev) {
        audio?.current?.pause();
      } else {
        audio?.current?.play();
      }
      return !prev;
    });
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <div className={styles.playButton}>
          {isPlaying ? (
            <IconButton onClick={handleClick}>
              <Pause />
            </IconButton>
          ) : (
            <IconButton onClick={handleClick}>
              <PlayArrow />
            </IconButton>
          )}
        </div>
      </div>
    </div>
  );
}
export default MusicPlayButton;

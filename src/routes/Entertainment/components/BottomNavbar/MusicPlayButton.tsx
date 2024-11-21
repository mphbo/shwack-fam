import styles from "./musicplaybutton.module.scss";
import { IconButton } from "@mui/material";
import { Pause, PlayArrow } from "@mui/icons-material";
import { useState } from "react";

function MusicPlayButton({
  audio,
}: {
  audio: React.MutableRefObject<HTMLAudioElement | null>;
}) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

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
  );
}
export default MusicPlayButton;

import React, { useState, useEffect, useRef } from "react";

import loadscript from "load-script";
import styles from "./soundcloudwidget.module.scss";
import {
  Card,
  CardActions,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";

// SoundCloud widget API
//  https://developers.soundcloud.com/docs/api/html5-widget

declare global {
  interface Window {
    SC: any;
  }
}

const ExpandMore = styled(
  (props: {
    expand: boolean;
    onClick: () => void;
    children: React.ReactElement;
  }) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  }
)(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function SoundCloudWidget({
  audio,
  pauseMusic,
}: {
  audio: React.MutableRefObject<HTMLAudioElement | null>;
  pauseMusic: () => void;
}) {
  // state

  // used to communicate between SC widget and React
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [playlistIndex, setPlaylistIndex] = useState<number>(0);

  // populated once SoundCloud Widget API is loaded and initialized
  const [player, setPlayer] = useState<any>(false);

  // ref for iframe element - https://reactjs.org/docs/refs-and-the-dom.html
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // initialization - load soundcloud widget API and set SC event listeners

  useEffect(() => {
    // use load-script module to load SC Widget API
    loadscript("https://w.soundcloud.com/player/api.js", () => {
      // initialize player and store reference in state

      const player = window.SC.Widget(iframeRef.current);
      setPlayer(player);

      const { PLAY, PAUSE } = window.SC.Widget.Events;

      // NOTE: closures created - cannot access react state or props from within and SC callback functions!!

      player.bind(PLAY, () => {
        // update state to playing
        setIsPlaying(true);
        audio?.current?.pause();
        pauseMusic();

        // check to see if song has changed - if so update state with next index
        player.getCurrentSoundIndex((playerPlaylistIndex: number) => {
          setPlaylistIndex(playerPlaylistIndex);
        });
      });

      player.bind(PAUSE, () => {
        // update state if player has paused - must double check isPaused since false positives
        player.isPaused((playerIsPaused: boolean) => {
          if (playerIsPaused) setIsPlaying(false);
        });
      });
    });
  }, []);

  useEffect(() => {
    if (player) player.setVolume(10);
  }, [player]);

  // integration - update SC player based on new state (e.g. play button in React section was click)

  // adjust playback in SC player to match isPlaying state
  useEffect(() => {
    if (!player) return; // player loaded async - make sure available

    player.isPaused((playerIsPaused: boolean) => {
      if (isPlaying && playerIsPaused) {
        player.play();
      } else if (!isPlaying && !playerIsPaused) {
        player.pause();
      }
    });
  }, [isPlaying]);

  // adjust seleted song in SC player playlist if playlistIndex state has changed
  useEffect(() => {
    if (!player) return; // player loaded async - make sure available

    player.getCurrentSoundIndex((playerPlaylistIndex: number) => {
      if (playerPlaylistIndex !== playlistIndex) player.skip(playlistIndex);
    });
  }, [playlistIndex]);

  // React section button click event handlers (play/next/previous)
  //  - adjust React component state based on click events

  const url = "https://soundcloud.com/dark-arkade/sets/s-fam-entertainment";

  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
    // audio?.pause();
  };

  return (
    <div className={styles.soundCloudWidget}>
      <div className={styles.heading}>
        <Typography>Music From</Typography>
        <h1>THE FAM</h1>
      </div>
      <Card
        sx={{
          maxWidth: "1200px",
          width: "100%",
          margin: "10px",
          backgroundColor: "rgba(1, 1, 55, 0.4)",
          borderRadius: 0,
        }}
      >
        {/* <h4 className={styles.username}>{username}</h4> */}
        <iframe
          title="soundcloud-widget"
          ref={iframeRef}
          id="sound-cloud-player"
          className={isExpanded ? styles.expandedIFrame : styles.iFrame}
          allow="autoplay"
          src={`https://w.soundcloud.com/player/?url=${url}&amp;color=1D70A2`}
        ></iframe>
        <CardActions>
          <ExpandMore
            sx={{ marginTop: -10 }}
            expand={isExpanded}
            onClick={handleExpand}
          >
            <ExpandMoreIcon sx={{ color: "black" }} />
          </ExpandMore>
        </CardActions>
      </Card>
    </div>
  );
}

export default SoundCloudWidget;

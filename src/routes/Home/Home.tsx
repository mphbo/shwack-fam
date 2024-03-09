import React, { useEffect, useRef } from "react";
import Visualizer from "./components/Visualizer";
import Navbar from "./components/Navbar";
import styles from "./home.module.scss";
import SoundCloudWidget from "./components/SoundCloudWidget";
import Bio from "./components/Bio/Bio";
import Email from "./components/Email";
import { Container } from "@mui/material";

function Home() {
  const audio = useRef<null | HTMLAudioElement>(null);
  const visualizerSection = useRef<null | HTMLDivElement>(null);
  const bioSection = useRef<null | HTMLDivElement>(null);
  const soundcloudSection = useRef<null | HTMLDivElement>(null);
  const emailSection = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    audio.current = new Audio("/back-to-the-matrix.mp3");
  }, []);

  return (
    <div className={styles.page}>
      <Container disableGutters>
        <Navbar />
        <div ref={visualizerSection} className={styles.visualizerSection}>
          <Visualizer audio={audio} />
        </div>
        <div ref={bioSection} className={styles.bioSection}>
          <Bio />
        </div>
        <div ref={soundcloudSection} className={styles.soundcloudSection}>
          <SoundCloudWidget audio={audio} />
        </div>
        <div ref={emailSection} className={styles.emailSection}>
          <Email />
        </div>
      </Container>
    </div>
  );
}

export default Home;

import { useEffect, useRef } from "react";
import Visualizer from "./components/Visualizer";
import Navbar from "./components/Navbar";
import styles from "./home.module.scss";
import SoundCloudWidget from "./components/SoundCloudWidget";
import Bio from "./components/Bio/Bio";
import Email from "./components/Email";
import { Container } from "@mui/material";

function Home() {
  const audio = useRef<null | HTMLAudioElement>(null);

  const visualizerRef = useRef<null | HTMLDivElement>(null);
  const bioRef = useRef<null | HTMLDivElement>(null);
  const soundcloudRef = useRef<null | HTMLDivElement>(null);
  const emailRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    audio.current = new Audio("/back-to-the-matrix.mp3");
  }, []);

  return (
    <div className={styles.page}>
      <Container disableGutters>
        <Navbar refs={{ visualizerRef, bioRef, soundcloudRef, emailRef }} />
        <div ref={visualizerRef} className={styles.visualizerSection}>
          <Visualizer audio={audio} />
        </div>
        <div ref={bioRef} className={styles.bioSection}>
          <Bio />
        </div>
        <div ref={soundcloudRef} className={styles.soundcloudSection}>
          <SoundCloudWidget audio={audio} />
        </div>
        <div ref={emailRef} className={styles.emailSection}>
          <Email />
        </div>
      </Container>
    </div>
  );
}

export default Home;

import React, { useEffect, useRef } from "react";
import Visualizer from "./components/Visualizer";
import Navbar from "./components/Navbar";
import styles from "./home.module.scss";
import SoundCloudWidget from "./components/SoundCloudWidget";
import Bio from "./components/Bio/Bio";
import Email from "./components/Email";

function Home() {
  // const [audio, setAudio] = useState<null | HTMLAudioElement>(null);
  const audio = useRef<null | HTMLAudioElement>(null);

  useEffect(() => {
    audio.current = new Audio("/back-to-the-matrix.mp3");
  }, []);

  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.visualizerSection}>
        <Visualizer audio={audio} />
      </div>
      <div className={styles.bioSection}>
        <Bio />
      </div>
      <div className={styles.soundcloudSection}>
        <SoundCloudWidget audio={audio} />
      </div>
      <div className={styles.emailSection}>
        <Email />
      </div>
    </div>
  );
}

export default Home;

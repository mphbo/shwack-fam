import React, { useEffect, useRef, useState } from "react";
import Visualizer from "./components/Visualizer";
import Navbar from "./components/Navbar";
import styles from "./home.module.scss";
import SoundCloudWidget from "./components/SoundCloudWidget";

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
        <span
          style={{
            position: "absolute",
            textAlign: "center",
          }}
        >
          DARK ARKADE is a musical journey into the shadows, where melodies,
          textures, and atmospheres create a captivating and haunting sonic
          landscape that evoke emotions and stories beyond the ordinary.
        </span>
      </div>
      <div className={styles.soundcloudSection}>
        <SoundCloudWidget audio={audio} />
      </div>
    </div>
  );
}

export default Home;

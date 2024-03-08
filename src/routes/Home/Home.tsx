import React, { useEffect, useState } from "react";
import Visualizer from "./components/Visualizer";
import Navbar from "./components/Navbar";
import styles from "./home.module.scss";

function Home() {
  const [audio, setAudio] = useState<null | HTMLAudioElement>(null);

  useEffect(() => {
    setAudio(new Audio("/back-to-the-matrix.mp3"));
    const audioContext = new AudioContext();
  }, []);

  useEffect(() => {
    // audio?.play();

    // TODO FIND A WAY TO ANALYZE AUDIO AND THEN FEED BACK INTO SHADER
    console.log({ audio });
  }, [audio]);

  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.visualizerSection}>
        <Visualizer audioUrl="/back-to-the-matrix.mp3" />
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
          landscape that evokes emotions and stories beyond the ordinary.
        </span>
      </div>
    </div>
  );
}

export default Home;
